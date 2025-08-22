import mongoose, { Schema } from "mongoose";

const noteSchema=new Schema(
    {
        title:{
            type:String,
            required:true
        },
        content:{
            type:String,
            required:true
        }

    },
    {timestamps:true}  // it is used to use the pre built cols
)

const Note=mongoose.model("Note",noteSchema)


export default Note;