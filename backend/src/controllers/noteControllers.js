import Note from "../models/Note.js"

export async function getAllNotes(_,res)
    {
    try {
        const notes=await Note.find().sort({createdAt:-1})
        // res.json({message:"hello"})
        res.status(200).json(notes)
    } catch (error) {
        console.error("Errro in the get all notes",error)
        res.status(500).json({message:"Internal server error"})
        
    }
}

export async function getNoteById(req,res) {
    try {
        const note=await Note.findById(req.params.id);
        if (!note) return res.status(400).json({message:"Note not found"})
        res.status(200).json(note)
    } catch (error) {
        console.error("Error in the getNotById controller",error)
        res.status(500).json({message:"Internal server error"})        
    }
    
}

export async function createNote(req,res){
    try {
        const {title,content}=req.body
        const note=new Note({title,content})
        const savenote=await note.save()
        res.status(200).json(savenote)
    } catch (error) {
        console.error("error in the create note controler",error)
        res.status(500).json({message:"internal server error"})
    }
}

export async function updateNote(req,res){
    try {
        const {title,content}=req.body
        const note= await Note.findByIdAndUpdate(req.params.id,{title,content},{new:true})
        if (!note) return res.status(404).json({message:"Note not found"})
        res.status(200).json(note)    
    } catch (error) {
        console.error("Error in the update note controler",error)
        res.status(500).json({message:"Internal server error"})
    }
}

export async function deleteNote(req, res) {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote) return res.status(404).json({ message: "Note not found" });
    res.status(200).json({ message: "Note deleted successfully!" });
  } catch (error) {
    console.error("Error in deleteNote controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}