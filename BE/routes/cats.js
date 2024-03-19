import express from "express";
import {
//   countByCity,
//   countByType,
  createCat,
  deleteCat,
  getCat,
//   getHotelRooms,
  getCats,
  updateCat,
} from "../controllers/cat.js";
import cat from "../models/Cat.js";

import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createCat);

//UPDATE
router.put("/:id", verifyAdmin, updateCat);
//DELETE
router.delete("/:id", verifyAdmin, deleteCat);
//GET

router.get("/find/:id", getCat);
//GET ALL

router.get("/", getCats);
// router.get("/countByCity", countByCity);
// router.get("/countByType", countByType);
// router.get("/room/:id", getHotelRooms);

export default router;
