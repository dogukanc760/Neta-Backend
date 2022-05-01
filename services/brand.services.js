var Brand = require("../models/brand.model");

exports.get = async function (query) {
  try {
    console.log(query);
    var brand = await Brand.find(query);
    return brand;
  } catch (error) {
    return error;
  }
};

exports.getById = async (query) => {
  try {
    var brand = await Brand.findById(query);
    return brand;
  } catch (error) {
    return error;
  }
};

exports.add = async (query) => {
  try {
    console.log(query);
    var newBrand = new Brand({
      brandName: query.brandName,
      brandTitle: query.brandTitle,
      brandDescription: query.brandDescription,
      brandImage: query.brandImage,
    });
    const savedBrand = await newBrand.save();
    console.log(savedBrand);
    return savedBrand;
  } catch (error) {
    return error;
  }
};

exports.update = async (query, brandId) => {
  try {
    const updated = await Brand.findByIdAndUpdate(
      brandId,
      { $set: query },
      { new: true }
    );
    return updated;
  } catch (error) {
    return error;
  }
};

exports.delete = async (brandId) => {
  try {
    const deleted = await Brand.findByIdAndDelete(brandId);
    return deleted;
  } catch (error) {
    return error;
  }
};
