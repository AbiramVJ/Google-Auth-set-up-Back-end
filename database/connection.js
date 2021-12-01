import  mongoose  from "mongoose";
const mongoDB ="mongodb+srv://abiram:abiram@busparcel.ovql4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
export default async()=>{
    return mongoose.connect( mongoDB, { 
         useNewUrlParser: true,
         useUnifiedTopology: true,
         
        });
  
}


