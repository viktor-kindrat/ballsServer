let express = require("express")
let app = express();
let bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require("dotenv").config()
const TOKEN = process.env.TG_TOKEN;
const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(TOKEN, { polling: true });
bot.on("message", msg => {
    bot.sendMessage(msg.chat.id, `Your chat id is: \`${msg.chat.id}.\``, {
        parse_mode: "MarkdownV2"
    })
})

app.post("/", (req, res) => {
    let message = req.body.message;
    bot.sendMessage(751853129, message);
    res.send(200).json("success")
})

module.exports = app;