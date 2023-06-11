import { log } from "console";
import mongoose from "mongoose";
import { config } from "dotenv";

// load env variables
config();

/**
 * Opens a connection to the database
 * @returns {Promise<void>}
 */
export const openDbConnection = async () => {
    await mongoose.connect(process.env.DATABASE_URI)
        .then((res) => {
            log(`Database connection open on ${process.env.DATABASE_URI}`);
            return res;
        })
        .catch(err => {
            log(err)
            throw new err; // stop the application
        });
}
/**
 * Closes the database connection
 * @returns {Promise<void>}
 */
export const endDbConnection = async () => {
    await mongoose.connection.close()
        .then((res) => {
            log('Database connection ended');
            return res;
        })
        .catch((err) => {
            log(err)
            throw new err;
        });
}