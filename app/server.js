import { log } from "console";
import express from "express";
import path from "path";
import { config } from "dotenv";
import userRouter from "./routes/userRouter.js";
import searchRouter from "./routes/searchRouter.js";
import { openDbConnection } from "../database/connection/connectionManager.js";

log('Starting application');

// load env variables
config();
log('Process environment variables loaded');

// validate env variables
// TODO

// open database connection
await openDbConnection();

// resolve path
const __dirname = path.resolve();

// express
const server = express();

// middleware
server.use((req, res, next) => {
    log(new Date(Date.now()).toString(), '', req.method, '', req.originalUrl);
    next();
})

server.use(express.static("public")); // set public directory for static files
server.set("view engine", "ejs"); // set the view engine to ejs
server.set("views", path.join(__dirname, "/domain/view")); // set views directory
server.use(express.urlencoded({ extended: true })); // use url encoding
server.use(express.json()); // use json

// routes
server.use("/user", userRouter); // users router
server.use("/search", searchRouter); // search router

// default route
server.get("/", (req, res) => {
    // TODO check if user logged in
    const authenticated = true;

    if (authenticated) {
        res.status(200).redirect('/search');
    } else {
        res.status(200).redirect('/user/login');
    }
});

// unkown routes
server.all("*", (req, res) => {
    res.status(404).render("404.ejs");
});

// server listen
server.listen(process.env.SERVER_PORT, () => {
    log(`Server listening on port ${process.env.SERVER_PORT}`);
});