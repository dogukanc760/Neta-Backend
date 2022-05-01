const CampaingService = require("../services/campaing.services");

//---------------------------Campaing Main-------------------------------------
exports.add = async (req, res, next) => {
  try {
    const addedCampaing = await CampaingService.addCampaing(req.body);
    if (addedCampaing) {
      return res
        .status(201)
        .json({ data: addedCampaing, status: 201, message: "Added" });
    }
    return res.status(402).json({ status: 402, message: "Failed" });
  } catch (error) {
    return res.status(500).json({ message: error, status: 500 });
  }
};

exports.update = async (req, res, next) => {
  try {
    const updatedCampaing = await CampaingService.updateCampaing(
      req.body,
      req.params.id
    );
    if (updatedCampaing) {
      return res
        .status(200)
        .json({ data: updatedCampaing, status: 200, message: "Updated" });
    }
    return res.status(404).json({ message: "Failed", status: 404 });
  } catch (error) {
    return res.status(500).json({ message: error, status: 500 });
  }
};

exports.delete = async (req, res, next) => {
  try {
    const deletedCampaing = await CampaingService.deleteCampaing(req.params.id);
    if (deletedCampaing) {
      return res.status(200).json({ message: "Deleted", status: 200 });
    }
    return res.status(404).json({ message: "failed", status: 404 });
  } catch (error) {
    return res.status(500).json({ message: error, status: 500 });
  }
};

exports.get = async (req, res, next) => {
  try {
    const getCampaing = await CampaingService.get({});
    if (getCampaing) {
      return res
        .status(200)
        .json({ message: "Success", status: 200, data: getCampaing });
    }
    return res.status(404).json({ message: "failed", status: 404 });
  } catch (error) {
    return res.status(500).json({ message: error, status: 500 });
  }
};

exports.getByQuery = async (req, res, next) => {
  try {
    const getCampaing = await CampaingService.get({
      campaingName: { $in: req.params.query },
    });
    if (getCampaing) {
      return res
        .status(200)
        .json({ message: "Success", status: 200, data: getCampaing });
    }
    return res.status(404).json({ message: "failed", status: 404 });
  } catch (error) {
    return res.status(500).json({ message: error, status: 500 });
  }
};

exports.getById = async (req, res, next) => {
  try {
    const getCampaing = await CampaingService.getById(req.params.id);
    if (getCampaing) {
      return res
        .status(200)
        .json({ data: getCampaing, status: 200, message: "Success" });
    }
    return res.status(404).json({ message: "Failed", status: 404 });
  } catch (error) {
    return res.status(500).json({ message: error, status: 500 });
  }
};

//-------------------------Campaing Content--------------------------

exports.getContent = async (req, res, next) => {
  try {
    const getContent = await CampaingService.getCampaingContentAll({});
    if (getContent) {
      return res
        .status(200)
        .json({ data: getContent, status: 200, message: "success" });
    }
    return res.status(404).json({ message: "Failed", status: 404 });
  } catch (error) {
    return res.status(500).json({ message: error, status: 500 });
  }
};

exports.getContentById = async (req, res, next) => {
  try {
    const getContentById = await CampaingService.getCampaingContentAll({
      _id: req.params.id,
    });
    if (getContentById) {
      return res
        .status(200)
        .json({ message: "Success", status: 200, data: getContentById });
    }
    return res.status(404).json({ message: "Failed", status: 404 });
  } catch (error) {
    return res.status(500).json({ message: "Failed", status: 500 });
  }
};

exports.getContentByCampaing = async (req, res, next) => {
  try {
    const getContent = await CampaingService.getContentByCampaing({
      campaingId: { $in: req.params.query },
    });
    if (getContent) {
      return res
        .status(200)
        .json({ data: getContent, status: 200, message: "success" });
    }
    return res.status(404).json({ message: "Failed", status: 404 });
  } catch (error) {
    return res.status(500).json({ message: error, status: 500 });
  }
};

exports.addContent = async (req, res, next) => {
  try {
    const addCampaing = await CampaingService.addContentToCampaing(
      req.params.id,
      req.params.productId,
      req.body
    );
    if (addCampaing) {
      return res
        .status(201)
        .json({ message: "Success", status: 201, data: addCampaing });
    }
    return res.status(404).json({ message: "Failed", status: 404 });
  } catch (error) {
    return res.status(500).json({ message: "Failed", status: 500 });
  }
};

exports.updateContent = async (req, res, next) => {
  try {
    const updateContent = await CampaingService.updateCampaingContent(
      req.params.id,
      req.body
    );
    if (updateContent) {
      return res
        .status(200)
        .json({ message: "Success", data: updateContent, status: 200 });
    }
    return res.status(404).json({ message: "Failed", status: 404 });
  } catch (error) {
    return res.status(500).json({ message: "Failed", status: 500 });
  }
};

exports.deleteContent = async (req, res, next) => {
  try {
    const deleteContent = await CampaingService.deleteCampaingContent(
      req.params.id
    );
    if (deleteContent) {
      return res.status(200).json({ message: "Success", status: 200 });
    }
    return res.status(404).json({ message: "Failed", status: 404 });
  } catch (error) {
    return res.status(500).json({ message: "Failed", status: 500 });
  }
};
