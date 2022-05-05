const Category = require("../models/category.model");
const SubCategory = require("../models/subCategory.model");

// --------------------------Main Category--------------------------------------
exports.get = async (query) => {
  try {
    const category = await Category.find(query);
    return category;
  } catch (error) {
    return error;
  }
};

exports.getById = async (query) => {
  try {
    const category = await Category.findById(query);
    return category;
  } catch (error) {
    return error;
  }
};

exports.add = async (query) => {
  try {
    console.log(query+"query");
    const newCategory = new Category({
      categoryTitle: query.categoryTitle,
      categoryDescription: query.categoryDescription,
      categoryName: query.categoryName,
      categoryImage: query.categoryImage,
    });
    const saved = await newCategory.save();
    console.log(saved+"asd");
    console.log("first")
    return saved;
  } catch (error) {
    console.log(error);
    return error;
  }
};

exports.update = async (query, categoryId) => {
  try {
    const updatedCategory = await Category.findByIdAndUpdate(
      categoryId,
      { $set: query },
      { new: true }
    );
    return updatedCategory;
  } catch (error) {
    return error;
  }
};

exports.delete = async (query) => {
  try {
    const deletedCategory = await Category.findByIdAndDelete(query);
    return deletedCategory;
  } catch (error) {
    return error;
  }
};


// ---------------------------Sub Category-------------------------------------


exports.getAllSubCategory = async (query) => {
    try {
        const subCategories = await SubCategory.find(query);
        return subCategories;
    } catch (error) {
        return error;
    }
}

exports.getSubsByMainCategory = async (query) => {
    try {
        const subCategories = await SubCategory.find({
            categoryId:{$in:query}
        });
        return subCategories;
    } catch (error) {
        return error;
    }
}

exports.addSubCategory = async (query, categoryId) => {
    try {
        const newSubCategory = new SubCategory({
            categoryId: categoryId,
            subCategoryName: query.subCategoryName,
            subCategoryTitle: query.subCategoryTitle,
            subCategoryDescription: query.subCategoryDescription,

        });
        const savedSubCategory = await SubCategory.save(newSubCategory);
        return savedSubCategory;
    } catch (error) {
        return error;
    }
}

exports.deleteSubCategory = async (query) => {
    try {
        const deletedSubCategory = await SubCategory.findByIdAndDelete(query);
        return deletedSubCategory;
    } catch (error) {
        return error;
    }
}

exports.updateSubCategory = async (query, subCategoryId) => {
    try {
        const updateSubCategory = await SubCategory.findByIdAndUpdate(
            subCategoryId,
            {$set:query},
            {new:true}
        );
        return updateSubCategory;
    } catch (error) {
        return error;
    }
}