import express from "express";
import getdb from "./config/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import useroutes from "./routes/userroutes.js";

const app = express();

// ✅ CORS config
app.use(cors({
    origin: "http://localhost:5173", // frontend ka origin
    credentials: true, // cookies/jwt allow
}));

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use("/user", useroutes);

app.listen(3000, () => {
    console.log("Server has been started bruh");
    getdb();
});
