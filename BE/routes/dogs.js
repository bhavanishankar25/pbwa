import express from "express";
import {

  createDog,
  deleteDog,
  getDog,
  getDogs,
  updateDog,
} from "../controllers/dog.js";


import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createDog);

//UPDATE
router.put("/:id", verifyAdmin, updateDog);
//DELETE
router.delete("/:id", verifyAdmin, deleteDog);
//GET
router.get("/find/:id", getDog);
//GET ALL

router.get("/", getDogs);


export default router;
