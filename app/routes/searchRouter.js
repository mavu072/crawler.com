import { log } from "console";
import express from "express";
const searchRouter = express.Router();

// search route
searchRouter.route('/')
.get((req, res) => {
    // TODO get auth user
    res.status(200).render("search.ejs", { authorizedUser : null });
})
.post((req, res) => {
    log('search query: ', req.body.params.searchQuery);
    // TODO implement
    const searchResults = { "results" : [] };
    res.status(200).render("search.ejs", { searchResults });
});

export default searchRouter;