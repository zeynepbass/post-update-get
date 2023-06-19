import mongoose from 'mongoose'
const post=new mongoose.Schema({
    title:{type:String, required:true},
    message:{type:String, required:true},
    creator:{type:String, required:true},


})
export default mongoose.model('Post',post)