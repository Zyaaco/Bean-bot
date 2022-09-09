const express = require('express');
const app = express();

app.listen(5000, () => {
  console.log("App is running");
});

app.get('/', (req, res) => {
  res.send("Hello world");
});

console.log("Beep Beep Boop 🤖");

require("dotenv").config();

const Discord = require("discord.js");
const client = new Discord.Client()
client.login(process.env.BOTTOKEN);

const commandHandler = require("./commands");

client.on("ready", () => {
    console.log("Ready 🤖");
    client.user.setActivity("use >help for beans", { type: "PLAYING" });
});

client.on("message", commandHandler);