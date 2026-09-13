import express from "express";
import { createNotes, deleteNotes, getAllnotes, getNoteById, updateNotes } from "../controllers/notesController.js";

const router = express.Router();

router.get("/",getAllnotes);

router.get("/:id",getNoteById);

router.post("/",createNotes);

router.put("/:id",updateNotes);

router.delete("/:id",deleteNotes);

export default router;