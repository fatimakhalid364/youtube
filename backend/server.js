import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt from "bcrypt";
import passport from "passport";
import { Strategy } from "passport-local";
import GoogleStrategy from "passport-google-oauth2";
import session from "express-session";
import env from "dotenv";
import axios from "axios";
import cors from "cors";
import fs from "fs";

const app = express();
const port = 3000;
const saltRounds = 10;
const API_URL = 'https://www.googleapis.com/youtube/v3';

env.config();

const API_KEY = process.env.API_KEY;

const db = new pg.Client({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
});
db.connect();

const corsOptions = {
    origin: ['http://localhost:5173']
};

app.use(cors(corsOptions));


app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.get(
    "/auth/google",
    passport.authenticate("google", {
        scope: ["email"],
        prompt: "consent"
    })
);

app.get(
    "/auth/google/youtube",
    passport.authenticate("google", {
        successRedirect: "http://localhost:5173/signed-in-user.html",
        failureRedirect: "http://localhost:5173/index.html",
    })
);

app.get(
    "/auth/google1",
    passport.authenticate("google1", {
        scope: ["email"],
        prompt: "consent"
    })
);



app.get(
    "/auth/google1/userdata",
    passport.authenticate("google1", {
        successRedirect: "https://myaccount.google.com/u/0/yourdata/youtube?hl=en",
        failureRedirect: "http://localhost:5173/index.html",
    })
);

/*app.get('/video', async (req, res) => {
    try {
        let cachedData;
        try {
            cachedData = fs.readFileSync('cachedData.json', 'utf8');
        } catch (err) {
            cachedData = '[]';
        }

        const parsedCachedData = JSON.parse(cachedData);

        if (parsedCachedData.length > 0) {
            res.send(parsedCachedData);
        } else {
        const result = await axios.get(API_URL + '/search', {
            params: {
                key: API_KEY,
                part: 'snippet',
                type: 'video',
                maxResults: 100
            }
        });

        fs.writeFileSync('cachedData.json', JSON.stringify(result.data));

        console.log(result.data);
        res.send(result.data);
        }
    } catch (error) {
        console.log('Error getting videos from YouTube:', error);
        res.status(500).send('Internal Server Error');
    }
});*/


app.get("/logout", (req, res) => {
    req.logout(function (err) {
        if (err) {
        return next(err);
        }
        res.redirect("http://localhost:5173/index.html");
    });
});

passport.use(
    "google",
    new GoogleStrategy(
        {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:3000/auth/google/youtube",
        userProfileURL: "https://www.gmail.googleapis.com/oauth2/v3/userinfo",
        },
        async (accessToken, refreshToken, profile, cb) => {
        try {
            console.log(profile);
            const result = await db.query("SELECT * FROM ytusers WHERE email = $1", [
            profile.email,
            ]);
            if (result.rows.length === 0) {
            const newUser = await db.query(
                "INSERT INTO ytusers (email, password) VALUES ($1, $2)",
                [profile.email, "google"]
            );
            cb(null, newUser.rows[0]);
            } else {
            cb(null, result.rows[0]);
            }
        } catch (err) {
            cb(err);
        }
        }
    )
);

passport.use(
    "google1",
    new GoogleStrategy(
        {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:3000/auth/google1/userdata",
        userProfileURL: "https://www.gmail.googleapis.com/oauth2/v3/userinfo",
        },
        async (accessToken, refreshToken, profile, cb) => {
        try {
            console.log(profile);
            const result = await db.query("SELECT * FROM ytusers WHERE email = $1", [
            profile.email,
            ]);
            if (result.rows.length === 0) {
            const newUser = await db.query(
                "INSERT INTO ytusers (email, password) VALUES ($1, $2)",
                [profile.email, "google"]
            );
            cb(null, newUser.rows[0]);
            } else {
            cb(null, result.rows[0]);
            }
        } catch (err) {
            cb(err);
        }
        }
    )
);

passport.serializeUser((user, cb) => {
    cb(null, user);
});

passport.deserializeUser((user, cb) => {
    cb(null, user);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
