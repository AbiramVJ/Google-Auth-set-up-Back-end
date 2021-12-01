// library
import express from "express";
import passport from "passport";

// create a rotes
const Router = express.Router();


/**
 * Router    /signin
 * Des        Google signin
 * Params     none
 * access     public
 * method     GET
 */

Router.get("/google",passport.authenticate("google",{
    scope:[
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email",
    ]
}))

/**
 * Router    /google/callback
 * Des        Google signin callback
 * Params     none
 * access     public
 * method     GET
 */

Router.get("/google/callback",passport.authenticate("google",{failureRedirect:"/"}),
    (req,res)=>{
        return res.status(200).json({token: req.session.passport.user.token, status:"success"})
    }
);

export default Router;