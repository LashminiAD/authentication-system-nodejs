import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import User from "./models/User.js";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

const SECRET_KEY = "mysecretkey";

const app = express();
const port = 3000;

mongoose.connect("mongodb://localhost:27017/AuthDB")
    .then(() => { 
        console.log("MongoDB Connected");
})
    .catch((err) => {
        console.log(err);
    });

// Tell Express to use EJS
app.set("view engine", "ejs");

// Public folder for CSS
app.use(express.static("public"));

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

// Routes
app.get("/signup", (req, res) => {
    res.render("signup");
});

app.get("/login", (req, res) => {
    res.render("login", {
        error: null
    });
});

app.get("/dashboard", (req, res) => { //still not protected anyone can access it
 //to protect it we need to check if the user is authenticated before rendering the dashboard
       const token = req.cookies.token;

            if(!token){
                return res.redirect("/login"); 
            }
            try {
                const decoded = jwt.verify(
                    token , SECRET_KEY
                );

                // console.log(decoded);

                res.render("dashboard", {
                    username : decoded.username //sends username to dashboard to display it
                });    
            }
            catch (err){
                res.redirect("/login");
            }
});

app.get("/", (req, res) => {
    res.redirect("/login");
});

app.post("/signup", async (req, res) => {
    try {
        const { username, password } = req.body;
        console.log(req.body);

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            username,
            password: hashedPassword
        });

        await user.save();

        res.send("User registered successfully!");
    } catch (err) {
        console.log(err);
        res.send("Error registering user.");
    }
});

app.post("/login", async (req, res) => {
    try{
        const { username , password } = req.body;

        const user = await User.findOne({username});

        if(!user){
            // return res.send("User not found");
            return res.render("login", {
                error: "User not found"
            });
        }

        const isMatch = await bcrypt.compare(
            password,
            user.password
        );

        if(!isMatch){
                        // return res.send("Password Invalid");

                    return res.render("login", {
                        error: "Invalid password"
                    });
        }

        const token = jwt.sign(
            {
            username : user.username
        },
        SECRET_KEY
        );

        // console.log(token);

        res.cookie("token", token); //Browser stores: token in cookies

        res.redirect("/dashboard");

    }
    catch (err){
        console.log(err);
        res.send("Login Error");
    }
});

app.get("/logout", (req, res) => {
    res.clearCookie("token");
    res.redirect("/login");
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});