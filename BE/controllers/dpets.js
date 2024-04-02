import dPets from "../models/dpets.js";

export const createdPets = async (req, res, next) => {
  const newdPets = new dPets(req.body);

  try {
    const saveddPets = await newdPets.save();
    res.status(200).json(saveddPets);
  } catch (err) {
    next(err);
  }
};
export const updatedPets = async (req, res, next) => {
  try {
    const updateddPets = await Dog.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateddPets);
  } catch (err) {
    next(err);
  }
};
export const deletedPets= async (req, res, next) => {
  try {
    await dPets.findByIdAndDelete(req.params.id);
    res.status(200).json("Dog has been deleted.");
  } catch (err) {
    next(err);
  }
};
//single different pet
export const getdPets = async (req, res, next) => {
  try {
    const dPets = await dPets.findById(req.params.id);
    res.status(200).json(dPets);
  } catch (err) {
    next(err);
  }
};
//multiple diff pets-plural pets
export const getdPetss = async (req, res, next) => {
  const { min, max, ...others } = req.query;
  try {
    const dPetss = await Dog.find({
      ...others,
      cheapestPrice: { $gt: min | 1, $lt: max || 999 },
    }).limit(req.query.limit);
    res.status(200).json(dPetss);
  } catch (err) {
    next(err);
  }
};