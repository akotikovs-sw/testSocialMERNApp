import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { sequelize } from './utils/db.js';

import postRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

const PORT = process.env.PORT || 5000;

app.use('/posts', postRoutes);

try {
  await sequelize.authenticate();
  app.listen(PORT, () => console.log(`Server running on port: ${ PORT }`))
} catch (error) {
  console.log(`${ error } did not connect`);
}
