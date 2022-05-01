const Campaing = require("../models/campaing.model");
const CampaingContent = require("../models/campaingContent.model");
const Product = require("../models/product.model");

// ----------------------------Main Campaing------------------------------------
exports.get = async (query) => {
  try {
    var campaing = await Campaing.find(query);
    return campaing;
  } catch (error) {
    return error;
  }
};

exports.getById = async (query) => {
  try {
    var campaing = await Campaing.findById(query);
    return campaing;
  } catch (error) {
    return error;
  }
};

// exports.getCampaingByFilter = async (query) => {
//     try {
//         var campaing = await Campaing.find(query);
//         return campaing;
//     } catch (error) {
//         return error;
//     }
// }

exports.addCampaing = async (query) => {
  try {
    var campaing = new Campaing({
      campaingName: query.CampaingName,
      campaingTitle: query.campaingTitle,
      campaingDescription: query.campaingDescription,
      campaingImage: query.campaingImage,
    });
    const savedCampaing = await campaing.save();
    return savedCampaing;
  } catch (error) {
    return error;
  }
};

exports.updateCampaing = async (query, campaingId) => {
  try {
    var updatedCampaing = await Campaing.findByIdAndUpdate(
      campaingId,
      { $set: query },
      { new: true }
    );
    return updatedCampaing;
  } catch (error) {
    return error;
  }
};

exports.deleteCampaing = async (campaingId) => {
  try {
    var deleteCampaing = await Campaing.findByIdAndDelete(campaingId);
    return deleteCampaing;
  } catch (error) {
    return error;
  }
};

//---------------------------Campaing Contents--------------------------------

exports.getCampaingContentAll = async () => {
  try {
    var campaingContent = await CampaingContent.find();
    return campaingContent;
  } catch (error) {
    return error;
  }
};

exports.getContentByCampaing = async (query) => {
  try {
    var campaingContent = await CampaingContent.find(query);
    return campaingContent;
  } catch (error) {
    return error;
  }
};

exports.updateCampaingContent = async (contentId, query) => {
  try {
    var updatedContent = await CampaingContent.findByIdAndUpdate(
      contentId,
      { $set: query },
      { new: true }
    );
    return updatedContent;
  } catch (error) {
    return error;
  }
};

exports.addContentToCampaing = async (campaingid, productId, query) => {
  try {
    var product = await Product.findById(productId);
    var checkCampaign = await CampaingContent.find({
      campaingId: { $in: campaingid },
    });
    checkCampaign = checkCampaign.filter(
      (campaign) => campaign.items.productId === productId
    );
    if (checkCampaign.length > 0) {
      return error({ message: "Campaign already exists this product" });
    }
    var newContent = new CampaingContent({
      campaingId: campaingid,
      items: [
        {
          productImg: product.productImg,
          productName: product.productName,
          stockAmount: product.stockAmount,
          productTitle: product.productTitle,
          productDescription: product.productDescription,
          productComments: product.productComments,
          price: product.price,
        },
      ],
    });
    var savedContent = await newContent.save();
    return savedContent;
  } catch (error) {
    return error;
  }
};


exports.updateCampaingContent = async (contentId, query) => {
  try {
    const updatedContent = await CampaingContent.findByIdAndUpdate(
      contentId,
      { $set: query },
      { new: true }
    );
    return updatedContent;
  } catch (error) {
    return error;
  }
};

exports.deleteCampaingContent = async (contentId) => {
  try {
    const deleteCampaingContent = await CampaingContent.findByIdAndDelete(
      contentId
    );
    return deleteCampaingContent;
  } catch (error) {
    return error;
  }
};
