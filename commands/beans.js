const fetch = (...args) =>
    import('node-fetch').then(({ default: fetch }) => fetch(...args));

const beanjson = require("../functions/beanjson");

module.exports = async (msg, keyword = 'bean') => {
    const json = await beanjson(keyword);
    msg.delete();
    msg.channel.send(json.results[random_index(json.results)].url);
};

const random_index = array => {
    return Math.floor(Math.random() * array.length);
};