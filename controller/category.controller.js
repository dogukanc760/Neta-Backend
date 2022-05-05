const CategoryService = require("../services/category.services");

//main categories

exports.getCategory = async (req, res, next) => {
  try {
    const category = await CategoryService.get({});
    if (category) {
     return res.status(200).json({ data: category, status: 200, message: "Success" });
    }
    return res.status(404).json({ status: 404, message: "Not Found" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error, status: 500 });
  }
};

exports.getCategoryById = async (req, res, next) => {
  try {
    const category = await CategoryService.getById(req.params.id);
    if (category) {
      return res
        .status(200)
        .json({ data: category, status: 200, message: "Success" });
    }
    return res.status(404).json({ status: 404, message: "Failed" });
  } catch (error) {
    return res.status(500).json({ message: error, status: 500 });
  }
};

exports.addCategory = async (req, res, next) => {
  try {
    console.log(req.body + "body");
    const category = await CategoryService.add(req.body);
    if (category) {
      return res
        .status(201)
        .json({ data: category, status: 201, message: "Success" });
    }
    return res.status(404).json({ status: 404, message: "Failed" });
  } catch (error) {
    return res.status(500).json({ message: "Failed", status: 500 });
  }
};

exports.updateCategory = async (req, res, next) => {
  try {
    const category = await CategoryService.update(req.body, req.params.id);
    if (category) {
      return res
        .status(200)
        .json({ data: category, status: 200, message: "Success" });
    }
    return res.status(404).json({ status: 404, message: "failed" });
  } catch (error) {
    return res.status(500).json({ message: error, status: 500 });
  }
};

exports.deleteCategory = async (req, res, next) => {
  try {
    const category = await CategoryService.delete(req.params.id);
    if (category) {
      return res
        .status(200)
        .json({ data: category, status: 200, message: "Success" });
    }
    return res.status(404).json({ status: 404, message: "Failed" });
  } catch (error) {
    return res.status(500).json({ message: error, status: 500 });
  }
};

//Sub Categories

exports.getSubCategory = async (req, res, next) => {
  try {
    const subCategory = await CategoryService.getAllSubCategory({});
    if (subCategory) {
      return res
        .status(200)
        .json({ data: subCategory, status: 200, message: "Success" });
    }
    return res.status(404).json({ status: 404, message: "failed" });
  } catch (error) {
    return res.status(500).json({ message: error, status: 500 });
  }
};

exports.getSubsByMain = async (req, res, next) => {
  try {
    const subCategory = await CategoryService.getSubsByMainCategory(
      req.params.id
    );
    if (subCategory) {
      return res
        .status(200)
        .json({ data: subCategory, status: 200, message: "Success" });
    }
    return res.status(404).json({ status: 404, message: "Failed" });
  } catch (error) {
    return res.status(500).json({ message: error, status: 500 });
  }
};

exports.addSub = async (req, res, next) => {
  try {
    const subCategory = await CategoryService.addSubCategory(
      req.body,
      req.params.id
    );
    if (subCategory) {
      return res
        .status(201)
        .json({ data: subCategory, status: 201, message: "Success" });
    }
    return res.status(404).json({ status: 404, message: "Failed" });
  } catch (error) {
    return res.status(500).json({ message: error, status: 500 });
  }
};

exports.deleteSub = async (req, res, next) => {
  try {
    const subCategory = await CategoryService.deleteSubCategory(req.params.id);
    if (subCategory) {
      return res.status(204).json({ status: 204, message: "Success" });
    }
    return res.status(404).json({ status: 404, message: "failed" });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error });
  }
};

exports.updateSub = async (req, res, next) => {
  try {
    const subCategory = await CategoryService.updateSubCategory(
      req.body,
      req.params.id
    );
    if (subCategory) {
      return res
        .status(200)
        .json({ status: 200, message: "Success", data: subCategory });
    }
    return res.status(404).json({ status: 404, message: "failed" });
  } catch (error) {
    return res.status(500).json({ message: error, status: 500 });
  }
};
