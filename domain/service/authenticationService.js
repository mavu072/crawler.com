import mongoose from "mongoose";
import { config } from "dotenv";
import { openDbConnection, endDbConnection } from "../../database/connection/connectionManager";
import User from "../model/userModel.js"

export default class AuthenticationService {

    constructor() {
        config();
        this.databaseUri = process.env.DATABASE_URI;
    }

    login() {

    }

    logout() {

    }
}