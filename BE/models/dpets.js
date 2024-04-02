import mongoose from "mongoose";
const CatSchema = new mongoose.Schema({
  pet_type: {
    type: String,
    required: true,
  },
  human_safety: {
    type: String,
    required: true,
  },
  friendly: {
    type: String,
    required: true,
  },
  pet_name: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
    required: true,
  },
  Age: {
    type: Number,
    min: 0,
    max: 9999,
  },
  weight: {
    type: Number,
    min: 0,
    max: 9999,
  },
  gender: {
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

export default mongoose.model("dPet", diffpetSchema)