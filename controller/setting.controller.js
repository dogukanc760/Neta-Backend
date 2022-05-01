const SettingService = require("../services/setting.services");

exports.get = async (req, res, next) => {
  try {
    const settings = await SettingService.get({});
    if (settings) {
      return res
        .status(200)
        .json({ data: settings, status: 200, message: "success" });
    }
    return res.status(404).json({ message: "Failed", status: 404 });
  } catch (error) {
    return res.status(500).json({ message: error, status: 500 });
  }
};

exports.add = async (req, res, next) => {
  try {
    const settings = await SettingService.add(req.body);
    if (settings) {
      return res
        .status(201)
        .json({ data: settings, status: 201, message: "success" });
    }
    return res.status(404).json({ message: error, status: 404 });
  } catch (error) {
    return res.status(500).json({ message: error, status: 500 });
  }
};

exports.update = async (req, res, next) => {
  try {
    const settings = await SettingService.update(req.body, req.params.id);
    if (settings) {
      return res
        .status(200)
        .json({ data: settings, status: 200, message: "success" });
    }
    return res.status(404).json({ message: "Failed", status: 404 });
  } catch (error) {
    return res.status(500).json({ message: error, status: 500 });
  }
};
