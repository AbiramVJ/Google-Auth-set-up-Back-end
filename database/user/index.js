import Mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";


const userSchema = new Mongoose.Schema({
    fullname:{type:String,require:true},
    email:{type:String, require:true},
    password:{type:String},
    address:[{detail:{type:String}, for:{type:String}}],
    phoneNumber: [{type: Number}],


},
{
    timestamps:true,
});

//statics AND method
    userSchema.methods.generateJwtToken = function(){
    return jwt.sign({user:this._id.toString()},"ZomatoAPP");
}

export const UserModel = Mongoose.model("users",userSchema);


