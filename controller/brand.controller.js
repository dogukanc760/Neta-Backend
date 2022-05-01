const BrandService = require("../services/brand.services");

exports.addBrand = async (req, res, next) => {
  try {
    console.log(req.body);
    const newBrand = await BrandService.add(req.body);
    if (newBrand) {
      return res
        .status(201)
        .json({ data: newBrand, message: "Created", status: 201 });
    }
    return res
      .status(401)
      .json({ data: req.body, message: "Invalid brand", status: 401 });
  } catch (error) {
    return res
      .status(500)
      .json({ data: req.body, message: "Error on server", status: 500 });
  }
};

exports.getAllBrand = async (req, res, next) => {
  try {
    const getBrand = await BrandService.get({});
    if (getBrand !== null) {
      return res
        .status(200)
        .json({ data: getBrand, message: "Successfull", status: 200 });
    }
    return res.status(404).json({ message: "Not Found Data!", status: 404 });
  } catch (error) {
    return res.status(500).json({ message: "Process Failed!", status: 500 });
  }
};

exports.getBrand = async (req, res, next) => {
  try {
    const getBrand = await BrandService.getById(req.params.id);
    if (getBrand !== null) {
      return res
        .status(200)
        .json({ data: getBrand, message: "Successfull", status: 200 });
    }
    return res.status(404).json({ message: "Not Found Data!", status: 404 });
  } catch (error) {
    return res.status(500).json({ message: "Failed", status: 500 });
  }
};

exports.updateBrand = async (req, res, next) => {
  try {
    const updatedBrand = await BrandService.update(req.body, req.params.id);
    if (updatedBrand) {
      return res
        .status(201)
        .json({ data: updatedBrand, message: "SuccessUpdated!", status: 201 });
    }
    return res.status(403).json({ message: "Failed process", status: 403 });
  } catch (error) {
    return res.status(500).json({ message: "Failed", status: 500 });
  }
};

exports.getBrandsByQuery = async (req, res, next) => {
  try {
    const getBrands = await BrandService.get({
      brandName: { $in: req.params.query },
    });
    return res
      .status(200)
      .json({ data: getBrands, message: "Success", status: 200 });
  } catch (error) {
    return res.status(500).json({ message: "Failed", status: 500 });
  }
};

exports.deleteBrands = async (req, res, next) => {
  try {
    const deleteBrands = await BrandService.delete(req.params.id);
    if (deleteBrands) {
      return res.status(200).json({ message: "Success", status: 200 });
    }
    return res.status(404).json({ message: "Failed", status: 404 });
  } catch (error) {
    return res.status(500).json({ message: "Failed", status: 500 });
  }
};
