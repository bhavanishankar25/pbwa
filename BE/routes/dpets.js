import express from "express";
import {
//   countByCity,
//   countByType,
  createdPet,
  deletedPet,
  getdPet,
//   getHotelRooms,
  getdPet,
  updatedPet,
} from "../controllers/dog.js";


import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createdPet);

//UPDATE
router.put("/:id", verifyAdmin, updatedPet);
//DELETE
router.delete("/:id", verifyAdmin, deletedPet);
//GET

router.get("/find/:id", getdPet);
//GET ALL

router.get("/", getdPet);

export default router;
