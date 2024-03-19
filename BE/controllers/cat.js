import Cat from "../models/Cat.js";


export const createCat = async (req, res, next) => {
  const newCat = new Cat(req.body);

  try {
    const savedCat = await newCat.save();
    res.status(200).json(savedCat);
  } catch (err) {
    next(err);
  }
};
export const updateCat = async (req, res, next) => {
  try {
    const updatedCat = await Cat.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedCat);
  } catch (err) {
    next(err);
  }
};
export const deleteCat = async (req, res, next) => {
  try {
    await Cat.findByIdAndDelete(req.params.id);
    res.status(200).json("Cat has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getCat = async (req, res, next) => {
  try {
    const cat = await Cat.findById(req.params.id);
    res.status(200).json(cat);
  } catch (err) {
    next(err);
  }
};
export const getCats = async (req, res, next) => {
  const { min, max, ...others } = req.query;
  try {
    const cats = await Cat.find({
      ...others,
      cheapestPrice: { $gt: min | 1, $lt: max || 999 },
    }).limit(req.query.limit);
    res.status(200).json(cats);
  } catch (err) {
    next(err);
  }
};
// export const countByCity = async (req, res, next) => {
//   const cities = req.query.cities.split(",");
//   try {
//     const list = await Promise.all(
//       cities.map((city) => {
//         return Cat.countDocuments({ city: city });
//       })
//     );
//     res.status(200).json(list);
//   } catch (err) {
//     next(err);
//   }
// };
// export const countByType = async (req, res, next) => {
//   try {
//     const catCount = await Cat.countDocuments({ type: "cat" });
//     const apartmentCount = await Cat.countDocuments({ type: "apartment" });
//     const resortCount = await Cat.countDocuments({ type: "resort" });
//     const villaCount = await Cat.countDocuments({ type: "villa" });
//     const cabinCount = await Cat.countDocuments({ type: "cabin" });

//     res.status(200).json([
//       { type: "cat", count: catCount },
//       { type: "apartments", count: apartmentCount },
//       { type: "resorts", count: resortCount },
//       { type: "villas", count: villaCount },
//       { type: "cabins", count: cabinCount },
//     ]);
//   } catch (err) {
//     next(err);
//   }
// };

// export const getCatRooms = async (req, res, next) => {
//   try {
//     const cat = await Cat.findById(req.params.id);
//     const list = await Promise.all(
//       cat.rooms.map((room) => {
//         return Room.findById(room);
//       })
//     );
//     res.status(200).json(list)
//   } catch (err) {
//     next(err);
//   }
// };
