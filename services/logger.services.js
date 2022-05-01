const Logger = require('../models/logger.model');

exports.add = async (query) => {
    try {
        const newLogger = new Logger({
            logUserId: query.logUserId,
            logTitle: query.logTitle,
            logDescription: query.logDescription,
            logLevel: query.logLevel,
        });
        const savedLogger = await newLogger.save();
        console.log('first')
        return savedLogger;
    } catch (error) {
        return error;
    }
}

exports.get = async (query) => {
    try {
        const logger = await Logger.find(query);
        return logger;
    } catch (error) {
        return error;
    }
}