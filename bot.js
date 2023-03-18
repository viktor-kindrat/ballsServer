let express = require("express")
let app = express();

const cors = require('cors');
const allowedOrigins = ['https://ball-shop-abibas.netlify.app/', 'http://localhost:3000'];

const corsOptions = {
    origin: function(origin, callback) {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
};

app.use(cors());
app.use(cors(corsOptions));
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
    let message = JSON.parse(req.body.message);
    bot.sendMessage(751853129, message);
    res.header('Access-Control-Allow-Origin', '*');
    res.send(200).json("success")
})

module.exports = app;