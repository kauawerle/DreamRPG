import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import { db } from './database/connection';
import  {routes}  from './routes';

const app = express();

app.use(cors());

app.use(routes);

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3400, async () => {
    await db.sync();
    console.log('DreamRpg Started 🚀')
})
