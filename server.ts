import * as express from "express";

import bodyParser = require("body-parser");
import cookieParser = require("cookie-parser");
import cors = require('cors');
import { Callback } from "mongoose";

let app:express.Application = express();

require('./config/database');

app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit: 50000}));
app.use(bodyParser.json({limit: "50mb"}));
app.use(cookieParser());

let whiteList = [undefined, 'http://localhost:3000', 'localhost:3000'];
const corsOptions:Object = {
    origin : function (origin:string, cb:Callback) {
        if (whiteList.indexOf(origin) !== -1)
        {
            cb(null, true);
        } else {
            cb(new Error('Not Allowed by CORS'), true);
        }
    },
    'credentials' : true,
    'allowHeaders' : ['sessionId', 'Content-Type', 'Authorization'],
    'exposedHeaders' : ['sessionId'],
    'methods' : 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false,
    'optionsSuccessStatus': 200
}
app.use(cors(corsOptions));

let { checkUser, requireAuth } = require('./middlewares/auth.middlewares');
app.use(checkUser);
app.get('/api/jwtid', requireAuth, (req: express.Request, res: express.Response) => {
    res.status(200).send(res.locals.user.id);
});

import authRoutes from './src/routes/auth.routes';
import userRoutes from './src/routes/user.routes';
import wikiRoutes from './src/routes/wiki.routes';

app.use('/api/auth', authRoutes);
app.use('/api/user', requireAuth, userRoutes);
app.use('/api/wiki', requireAuth, wikiRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Wikme listening to : PORT ${process.env.PORT}`)
});