let express = require("express")
let app = express();
const cors = require('cors');
let PORT = process.env.PORT || 5555

let bot = require("./bot")
app.use("/bot", bot);

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

app.use(cors(corsOptions));

app.listen(PORT, () => {
    console.log(`App listened on port ${PORT}`)
})