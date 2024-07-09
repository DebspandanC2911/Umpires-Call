import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        min:5,
        max:20,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    profilePicture:{
        type:String,
        default: "https://www.thesportsmirror.com/wp-content/uploads/2023/02/Best-Cricket-Team.jpg",
    }
}, {timestamps:true});

const User = mongoose.model('User',userSchema);

export default User;