const Settings = require('../models/setting.model');

exports.get = async (query) => {
    try {
        const settings = await Settings.find(query);
        return settings;
    } catch (error) {
        return error;
    }
}

exports.add = async (query) => {
    try {
        const newSetting = Settings({
          address: query.address,
          gsm: query.gsm,
          phone: query.phone,
          mail: query.mail,
          instagram: query.instagram,
          facebook: query.facebook,
          twitter: query.twitter,
          linkedin: query.linkedin,
          google: query.google,
          pinterest: query.pinterest
        });
        const savedSettings = await newSetting.save();
        return savedSettings;
    } catch (error) {
        return error;
    }
}

exports.update = async (query, settingId) => {
    try {
        const updatedSetting = await Settings.findByIdAndUpdate(
            settingId,
            {$set:query},
            {new:true}
        );
        return updatedSetting;
    } catch (error) {
        return error;
    }
}