import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { Sequelize } from 'sequelize';

import postRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

const PORT = process.env.PORT|| 5000;

// Connect to the database via sequilize

const sequelize = new Sequelize('mydb', 'mysql', '1234', {
  host: '192.168.64.2',
  dialect: 'mysql'/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

app.use('/posts', postRoutes);




try {
  await sequelize.authenticate();
  app.listen(PORT, () => console.log(`Server running on port: ${ PORT }`))
} catch (error) {
  console.log(`${ error } did not connect`);
}


// mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
//   .catch((error) => console.log(`${error} did not connect`));

// mongoose.set('useFindAndModify', false);