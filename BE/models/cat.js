import mongoose from "mongoose";
const CatSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  Age: {
    type: Number,
    min: 0,
    max: 9999,
  },
  breed: {
    type: String,
    required: true,
  },
 
  gender: {
    type: String,
    required: true,
  },
  weight: {
    type: Number,
    min: 0,
    max: 9999,
  },
  friendly: {
    type: String,
    required: true,
  },
 any_allergies:{
    type: String,
    required: true,

 }
 
//   featured: {
//     type: Boolean,
//     default: false,
//   },
});

export default mongoose.model("Cat", CatSchema)