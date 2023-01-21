import Categories from "../model/Categories.js";

export const CreateCategories = async (req, res) => {
  console.log(req.body);
  const newCategories = new Categories(req.body);
  try {
    const savedCategories = await newCategories.save();
    res.status(200).json(savedCategories);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const GetCategories = async (req, res) => {
  try {
    const Category = await Categories.find();
    res.status(200).json(Category);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const UpdateCategories = async (req, res) => {
  try {
    const updatedCategories = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCategories);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const DeleteCategories = async (req, res) => {
  try {
    const deletedCategories = await Categories.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedCategories);
  } catch (error) {
    res.status(500).json(error);
  }
};
