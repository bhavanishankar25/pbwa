import Dog from "../models/dog.js";


export const createDog = async (req, res, next) => {
  const newDog = new Dog(req.body);

  try {
    const savedDog = await newDog.save();
    res.status(200).json(savedDog);
  } catch (err) {
    next(err);
  }
};
export const updateDog = async (req, res, next) => {
  try {
    const updatedDog = await Dog.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedDog);
  } catch (err) {
    next(err);
  }
};
export const deleteDog = async (req, res, next) => {
  try {
    await Dog.findByIdAndDelete(req.params.id);
    res.status(200).json("Dog has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getDog = async (req, res, next) => {
  try {
    const dog = await Dog.findById(req.params.id);
    res.status(200).json(dog);
  } catch (err) {
    next(err);
  }
};
export const getDogs = async (req, res, next) => {
  const { min, max, ...others } = req.query;
  try {
    const dogs = await Dog.find({
      ...others,
      cheapestPrice: { $gt: min | 1, $lt: max || 999 },
    }).limit(req.query.limit);
    res.status(200).json(dogs);
  } catch (err) {
    next(err);
  }
};