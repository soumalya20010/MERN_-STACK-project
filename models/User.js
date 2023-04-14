import mongoose from "mongoose" ;
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,"Name is required"]
    },
    email: {
        type: String,
        required: [true,"Name is required"]
        
    },
    password: {
        type: String,
        required: [true,"Name is required"]
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
},{timeStamp:true})

export default mongoose.models.User ||
  mongoose.model("Product",userSchema);

