import * as express from "express";

let app:express.Application = express();

require('./config/database');

app.listen(process.env.PORT, () => {
    console.log(`Wikme listening to : PORT ${process.env.PORT}`)
})