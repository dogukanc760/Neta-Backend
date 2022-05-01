const CreditsService = require("../services/credits.services");

exports.get = async (req, res, next) => {
  try {
    const credits = await CreditsService.get({});
    if (credits) {
      return res
        .status(200)
        .json({ data: credits, status: 200, message: "Success" });
    }
    return res.status(404).json({ message: "Failed", status: 404 });
  } catch (error) {
    return res.status(500).json({ message: error, status: 500 });
  }
};

exports.getById = async (req, res, next) => {
  try {
    const credits = await CreditsService.getById(req.params.id);
    if (credits) {
      return res
        .status(200)
        .json({ data: credits, status: 200, message: "Success" });
    }
    return res.status(404).json({ message: "Failed", status: 404 });
  } catch (error) {
    return res.status(500).json({ message: error, status: 500 });
  }
};

exports.add = async (req, res, next) => {
  try {
    const credits = await CreditsService.add(req.body);
    if (credits) {
      return res
        .status(201)
        .json({ data: credits, status: 201, message: "Success" });
    }
    return res.status(404).json({ message: "failed", status: 404 });
  } catch (error) {
    return res.status(500).json({ message: error, status: 500 });
  }
};

exports.update = async (req, res, next) => {
  try {
    const credits = await CreditsService.update(req.body, req.params.id);
    if (credits) {
      return res
        .status(200)
        .json({ data: credits, status: 200, message: "success" });
    }
    return res.status(404).json({ message: "Failed", status: 404 });
  } catch (error) {
    return res.status(500).json({ message: error, status: 500 });
  }
};

exports.delete = async (req, res, next) => {
  try {
    const credits = await CreditsService.delete(req.params.id);
    if (credits) {
      return res
        .status(200)
        .json({ data: credits, status: 200, message: "success" });
    }
    return res.status(404).json({ message: "Failed", status: 404 });
  } catch (error) {
    return res.status(500).json({ message: "Failed", status: 500 });
  }
};
