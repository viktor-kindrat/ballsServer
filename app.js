let express = require("express")
let app = express();
let PORT = process.env.PORT || 5555

let bot = require("./bot")
app.use("/bot", bot);


app.listen(PORT, () => {
    console.log(`App listened on port ${PORT}`)
})