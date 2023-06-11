import { log } from "console";
import express from "express";
const userRouter = express.Router();

// default route
userRouter.get('/', (req, res) => {
    res.status(200).redirect('/users/login');
})

// login route
userRouter.route('/login')
.get((req, res) => {
    res.status(200).render("login.ejs");
})
.post((req, res) => {
    // TODO login
    const email = req.body.email;
    const password = req.body.password;
    const authorizedUser = { "email": email, "password": password };
    res.status(200).render("search.ejs", { authorizedUser : authorizedUser });
});

// logout route
userRouter.post('/logout', (req, res) => {
    // TODO logout user
    res.status(200).redirect('/');
});

export default userRouter;