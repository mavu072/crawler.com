import mongoose from "mongoose";

const UserModel = {
    email : {
        type: String,
        require: true,
    },
    password : {
        type: String,
        require: true,
    }
}

const UserSchema = new mongoose.Schema(UserModel, { timestamps : true });

// TODO add middleware to schema

const User = mongoose.model('User', UserSchema);

export default User;