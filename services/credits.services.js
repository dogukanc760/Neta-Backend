const Credits = require('../models/credits.model');

exports.get = async (query) => {
    try {
        const credits = await Credits.find(query);
        return credits;
    } catch (error) {
        return error;
    }
}

exports.getById = async (query) => {
    try {
        const credits = await Credits.findById(query);
        return credits;
    } catch (error) {
        return error;
    }
}

exports.add = async (query) => {
    try {
        const newCredits = new Credits({
            about:[{
                title:query.about.title,
                description:query.about.description,
                image:query.about.image,
                text:query.about.text,
            }],
            business:[{
                title:query.business.title,
                subtitle:query.business.subtitle,
                image:query.business.image,
                description:query.business.description,
                text:query.business.text,
            }],
            referances:[{
                title:query.referances.title,
                description:query.referances.description,
                text:query.referances.text,
                image:query.referances.image,
                referanceLink:query.referances.referanceLink,
                referanceMail:query.referances.referanceMail,
                referanceGsm:query.referances.referanceGsm,
            }]
        });
        const savedCard = await newCredits.save();
        return savedCard;
    } catch (error) {
        return error;
    }
}

exports.update = async (query, creditId) => {
    try {
        const updated = await Credits.findByIdAndUpdate(
            creditId,
            {$set:query},
            {new:true}
        );
        return updated;
    } catch (error) {
        return error;
    }
}

exports.delete = async (creditId) => {
    try {
        const deleteCredit = await Credits.findByIdAndDelete(creditId);
        return deleteCredit;
    } catch (error) {
        return error;
    }
}