const fetch = (...args) =>
    import('node-fetch').then(({ default: fetch }) => fetch(...args));

const beanjson = require("./functions/beanjson");

const beans = require('./commands/beans.js');
const help = require('./commands/help.js');

const prefix = ">"; //The prefix of the bot

const commands = { beans, help };

module.exports = async (msg) => {
    try {
        let tokens = msg.content.split(" ");
        let command = tokens.shift();
        if (command.charAt(0) === prefix) {
            command = command.substring(1);
            if (command in commands) {
                commands[command](msg, tokens);
            }else {
                msg.channel.send("Invalid command");
                msg.react("❌");
            }
        }else if (msg.content.toLowerCase().includes("bean") && !msg.author.bot) {
            const json = await beanjson('bean');
            msg.channel.send(json.results[random_index(json.results)].url);
        }else if (msg.content.toLowerCase().includes("gay") && !msg.author.bot) {
            const json = await beanjson('gay');
            msg.channel.send(json.results[random_index(json.results)].url);
        }else if (msg.content.toLowerCase().includes("lesbian") && !msg.author.bot) {
            const json = await beanjson('lesbian');
            msg.channel.send(json.results[random_index(json.results)].url);
        }
    } catch (error) {
        console.log(error);
    }
}

const random_index = array => {
    return Math.floor(Math.random() * array.length);
};