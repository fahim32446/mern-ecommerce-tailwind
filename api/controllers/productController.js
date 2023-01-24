import Product from "../model/Product.js";

export const CreateProduct = async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const UpdateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const DeleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedProduct);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const GetProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const TotalProducts = async (req, res) => {
  try {
    const totalProducts = await Product.countDocuments({});
    res.status(200).json(totalProducts);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const ProductsPagination = async (req, res) => {
  let page = Number(req.query.page) || 1;
  let limit = Number(req.query.limit) || 6;
  let skip = (page - 1) * limit;
  const totalProducts = await Product.countDocuments({});

  try {
    const products = await Product.find()
      .skip(skip)
      .limit(limit)
      .sort({ _id: -1 });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const GetProducts = async (req, res) => {
  const priceFilter = req.query.price;
  const qCategory = req.query.category;
  const sizeFilter = req.query.filter;
  const search = req.query.search;
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 6;
  const skip = (page - 1) * limit;
  try {
    let products;

    if (priceFilter == "asc") {
      products = await Product.find()
        .sort({ price: -1 })
        .skip(skip)
        .limit(limit);
    } else if (priceFilter == "desc") {
      products = await Product.find()
        .sort({ price: 1 })
        .skip(skip)
        .limit(limit);
    } else if (search) {
      products = await Product.find({ $text: { $search: search } })
        .skip(skip)
        .limit(limit);
    } else if (sizeFilter) {
      products = await Product.find({
        size: {
          $in: [sizeFilter],
        },
      })
        .skip(skip)
        .limit(limit);
    } else if (qCategory) {
      products = await Product.find({
        category: {
          $regex: new RegExp(qCategory, "i"),
        },
      })
        .skip(skip)
        .limit(limit);
    } else {
      products = await Product.find().sort({ _id: -1 }).skip(skip).limit(limit);
    }

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
};
