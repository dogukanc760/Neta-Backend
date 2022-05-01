const CardService = require("../services/card.services");

exports.add = async (req, res, next) => {
  try {
    const added = await CardService.newCard(req.body, req.params.id);
    if (added) {
      return res
        .status(201)
        .json({ data: added, status: 201, message: "Added" });
    }
    return res.status(403).json({ message: "Invalid", status: 403 });
  } catch (error) {
    return res.status(500).json({ message: error, status: 500 });
  }
};

exports.get = async (req, res, next) => {
  try {
    const cards = await CardService.get({});
    if (cards) {
      return res.status(200).json({ data: cards, status: 200, message: "OK" });
    }
    return res.status(404).json({ status: 404, message: "Failed" });
  } catch (error) {
    return res.status(500).json({ message: error, status: 500 });
  }
};

exports.getById = async (req, res, next) => {
  try {
    const cards = await CardService.getById({ _id: req.params.id });
    if (cards) {
      return res
        .status(200)
        .json({ data: cards, status: 200, message: "Success" });
    }
    res.status(404).json({ message: "Failed", status: 404 });
  } catch (error) {
    return res.status(500).json({ message: error, status: 500 });
  }
};

exports.getByUserOne = async (req, res, next) => {
  try {
    const cards = await CardService.getByUserOne({
      userId: { $in: req.params.id },
    });
    if (cards) {
      return res
        .status(200)
        .json({ data: cards, status: 200, message: "Success" });
    }
    return res.status(404).json({ message: "Failed", status: 404 });
  } catch (error) {
    return res.status(500).json({ message: error, status: 500 });
  }
};

exports.getByUserAll = async (req, res, next) => {
  try {
    const cards = await CardService.get({
      userId: { $in: req.params.id },
    });
    if (cards) {
      return res
        .status(200)
        .json({ data: cards, status: 200, message: "Success" });
    }
  } catch (error) {
    return res.status(500).json({ message: error, status: 500 });
  }
};

exports.addToCard = async (req, res, next) => {
  try {
    const addedToCard = await CardService.addToCard(
      req.body,
      req.params.userId,
      req.params.cardId
    );
    if (addedToCard) {
      return res
        .status(201)
        .json({ message: "added", data: addedToCard, status: 201 });
    }
    return res.status(404).json({ message: "Failed", status: 404 });
  } catch (error) {
    return res.status(500).json({ message: error, status: 500 });
  }
};

exports.reduceItem = async (req, res, next) => {
  try {
    const reduceItem = await CardService.reduceProductFromCard(
      req.body,
      req.params.userId,
      req.params.cardId
    );
    if (reduceItem) {
      return res
        .status(200)
        .json({ data: reduceItem, status: 200, message: "Success" });
    }
    return res.status(404).json({ message: "Failed", status: 404 });
  } catch (error) {
    return res.status(500).json({ message: error, status: 500 });
  }
};

exports.discardProduct = async (req, res, next) => {
  try {
    const discardProduct = await CardService.discardProduct(
      req.body,
      req.params.cardId,
      req.params.userId
    );
    if (discardProduct) {
      res
        .status(200)
        .json({ message: "Success", data: addedToCard, status: 200 });
    }
    res.status(404).json({ message: "Failed", status: 404 });
  } catch (error) {
    return res.status(500).json({ message: error, status: 500 });
  }
};

exports.updateCard = async (req, res, next) => {
  try {
    const updateCard = await CardService.updatedCard(
      req.body,
      req.params.cardId
    );
    if (updateCard) {
      return res
        .status(200)
        .json({ message: "Success", data: updateCard, status: 200 });
    }
    return res.status(404).json({ message: "Failed", status: 404 });
  } catch (error) {
    return res.status(500).json({ message: error, status: 500 });
  }
};

exports.deleteCard = async (req, res, next) => {
  try {
    const deleteCard = await CardService.deleteCard(req.params.cardId);
    res.status(200).json({ message: "Success", data: deleteCard });
  } catch (error) {
    res.status(500).json({ message: "failed", status: 500 });
  }
};
