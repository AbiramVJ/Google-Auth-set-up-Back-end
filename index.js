
// LIBRARY
import express  from "express";
import cors from "cors";
import passport from 'passport';

//database connection
import ConnectDB from "./database/connection.js";

//google authentication
import googlAutheConfig from "./config/google.config.js";

// API
import Auth from "./API/Auth/index.js";


//use
const app = express();
app.use(cors());
app.use(express.json()); 
app.use(passport.initialize());

//passoword config
googlAutheConfig(passport);

// Application Routes
app.use("/auth",Auth);

// Server connection port
app.listen(4000, () => {

  ConnectDB()
  .then(()=>{
    console.log("CONNECTED SUCCESFULLY");

  })
  .catch((error)=>{
    console.log("server is running but database not conected");
    console.log(error);
  })
  
});
