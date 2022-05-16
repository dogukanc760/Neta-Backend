const ProductService = require("../services/product.services");

exports.get = async (req, res, next) => {
  try {
    const product = await ProductService.get({});
    if (product) {
      return res
        .status(200)
        .json({ data: product, status: 200, message: "Success" });
    }
    return res.status(404).json({ message: "Not Found", status: 400 });
  } catch (error) {
    return res.status(500).json({ message: error, status: 500 });
  }
};


exports.getByCategory = async (req, res, next) => {
  try {
    const product = await ProductService.get({
      categoryId:{$in:req.params.categoryId}
    });
    if (product) {
      return res
        .status(200)
        .json({ data: product, status: 200, message: "Success" });
    }
    return res.status(404).json({ message: "Not Found", status: 400 });
  } catch (error) {
    return res.status(500).json({ message: error, status: 500 });
  }
};

exports.getById = async (req, res, next) => {
  try {
    const product = await ProductService.getById(req.params.id);
    if (product) {
      return res
        .status(200)
        .json({ data: product, status: 200, message: "Success" });
    }
    return res.status(404).json({ message: "Not Found", status: 400 });
  } catch (error) {
    return res.status(500).json({ message: error, status: 500 });
  }
};

exports.add = async (req, res, next) => {
  try {
    const product = await ProductService.add(req.body);
    if (product) {
      return res
        .status(201)
        .json({ data: product, status: 201, message: "Success" });
    }
    return res.status(404).json({ message: "Not Found", status: 400 });
  } catch (error) {
    return res.status(500).json({ message: error, status: 500 });
  }
};

exports.update = async (req, res, next) => {
  const product = await ProductService.update(req.body, req.params.id);
  try {
    const product = await ProductService.update(req.body, req.params.id);
    if (product) {
      return res
        .status(200)
        .json({ data: product, status: 200, message: "Success" });
    }
    return res.status(404).json({ message: "Not Found", status: 404 });
  } catch (error) {
    return res.status(500).json({ message: error, status: 500 });
  }
};

exports.delete = async (req, res, next) => {
  try {
    const product = await ProductService.delete(req.params.id);
    if (product) {
      return res
        .status(200)
        .json({ data: product, status: 200, message: "Success" });
    }
    return res.status(404).json({ message: "Not Found", status: 404 });
  } catch (error) {
    return res.status(500).json({ message: error, status: 500 });
  }
};
