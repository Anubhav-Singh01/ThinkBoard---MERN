import Note from "../models/Note.js"

export async function getAllnotes(req,res){
    try {
        const notes = await Note.find().sort({createdAt:-1});
        res.status(200).json(notes);
    } catch (error) {
        console.error("Error in getAllnotes controller ",error);
        res.status(500).json({message:"Internal server error."});
    }
};

export async function  getNoteById(req,res){
    try {
        const note = await Note.findById(req.params.id);
        if(!note) return res.status(404).json({message:"Note not found"});
        res.json(note);
    } catch (error) {
        console.error(500).json({message: "Error in the getNoteById controller",error});
        res.status(500).json({message:"Internal sever error"});
    }
};

export async function createNotes(req,res){
    try {
        const {title,content} =req.body;
        const note = new Note({title,content});

        const savedNote = await note.save();
        res.status(201).json(savedNote);
    } catch (error) {
        console.error("Error in createNotes controller",error);
        res.status(500).json({message:"Internal server error"});
    }
};

export async function updateNotes(req,res){
    try {
        const {title,content} = req.body;
        const updatedNote = await Note.findByIdAndUpdate(req.params.id,{title,content},{new:true});
        if(!updatedNote) return res.status(404).json({message:"Note not found"});
        res.status(200).json(updatedNote);
    } catch (error) {
        console.error(500).json({message:"Error in updateNotes controller",error});
        res.status(500).json({message:"Internal serve error"});
    }
    
};

export async function deleteNotes(req,res){
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id);
        if(!deletedNote) return res.status(404).json({message : " Note not found"});
        res.status(200).json({message: "Note deleted successfully"});
    } catch (error) {
        console.error(500).json({message: "Error in the deleteNotes controller",error});
        res.status(500).json({message:"Internal server error"});
    }
};