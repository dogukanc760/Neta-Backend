const Card = require("../models/card.model");

exports.get = async (query) => {
  try {
    const card = await Card.find(query);
    return card;
  } catch (error) {
    return error;
  }
};

exports.getById = async (query) => {
  try {
    const card = await Card.findById(query);
    return card;
  } catch (error) {
    return error;
  }
};

exports.getByUserOne = async (user) => {
  try {
    const card = await Card.findOne(user);
    return card;
  } catch (error) {
    return error;
  }
};

exports.newCard = async (query, userId) => {
  try {
    const findCard = await Card.find({
      userId: { $in: userId },
      isFinished: { $in: true },
    });
    if (findCard) {
      return error({ message: "A card is active" });
    }
    const newCard = new Card({
      userId: query.userId,
      items: [
        {
          productId: query.items.productId,
          productName: query.items.productName,
          productImage: query.items.productImage,
          quantity: query.items.quantity,
          price: query.items.price,
          total: query.items.quantity * query.items.price,
        },
      ],
      subTotal: query.items.quantity * query.items.price,
      cargoNum: query.cargoNum,
    });
    const savedCard = newCard.save();
    return savedCard;
  } catch (error) {
    return error;
  }
};

exports.addToCard = async (query, userId, cardId) => {
  try {
    const findCard = await Card.find({
      userId: { $in: userId },
      isFinished: { $in: true },
    });
    if (!findCard) {
      return error({ message: "Card not found" });
    }
    const indexFound = findCard.findIndex(
      (item) => item.items.productId === query.items.productId
    );
    if (indexFound !== -1) {
      (findCard.items[indexFound].quantity =
        findCard.items[indexFound].quantity + query.items.quantity),
        (findCard.items[indexFound].price = query.items.price),
        (findCard.items[indexFound].total =
          findCard.items[indexFound].quantity * query.items.price);
      findCard.subTotal = query.items.total;
    } else {
      findCard.items.push({
        productId: query.items.productId,
        productName: query.items.productName,
        productImage: query.items.productImage,
        quantity: query.items.quantity,
        price: query.items.price,
        total: query.items.quantity * query.items.price,
      });
      findCard.subTotal += query.items.total;
    }
    const updatedCard = await Card.findByIdAndUpdate(
      cardId,
      { $set: findCard },
      { new: true }
    );
    return updatedCard;
  } catch (error) {
    return error;
  }
};

exports.reduceProductFromCard = async (query, userId, cardId) => {
  try {
    const findCard = await Card.find({
      userId: { $in: userId },
      isFinished: { $in: true },
    });
    if (!findCard) {
      return error({ message: "Card not found" });
    }
    const indexFound = findCard.findIndex(
      (item) => item.items.productId === query.items.productId
    );
    if (indexFound !== -1) {
      (findCard.items[indexFound].quantity =
        findCard.items[indexFound].quantity - 1),
        (findCard.items[indexFound].price = query.items.price),
        (findCard.items[indexFound].total =
          findCard.items[indexFound].quantity * query.items.price);
      findCard.subTotal -= query.items.total;
    } else {
      return error({ message: "Product not found!" });
    }
    const updatedCard = await Card.findByIdAndUpdate(
      cardId,
      { $set: findCard },
      { new: true }
    );
    return updatedCard;
  } catch (error) {
    return error;
  }
};

exports.discardProduct = async (query, cardId, userId) => {
  try {
    const findCard = await Card.find({
      userId: { $in: userId },
      isFinished: { $in: true },
    });
    if (!findCard) {
      return error({ message: "Card not found" });
    }
    const indexFound = findCard.findIndex(
      (item) => item.items.productId === query.items.productId
    );
    findCard.items.splice(indexFound, 1);
    findCard.subTotal -= query.items.total;
    const updatedCard = await Card.findByIdAndUpdate(
      cardId,
      { $set: query },
      { new: true }
    );
    return updatedCard;
  } catch (error) {
    return error;
  }
};

exports.updatedCard = async (query, cardId) => {
  try {
    const updatedCard = await Card.findByIdAndUpdate(
      cardId,
      { $set: query },
      { new: true }
    );
    return updatedCard;
  } catch (error) {
    return error;
  }
};

exports.deleteCard = async (cardId) => {
  try {
    const deleteCard = await Card.findByIdAndUpdate(cardId);
    return deleteCard;
  } catch (error) {
    return error;
  }
};
