const mongoose = require('mongoose');
const dotenv = require('dotenv');
const express = require('express');

const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');


const postRoutes = require('./routes/postRoutes');
const userRoutes = require('./routes/userRoutes');

dotenv.config({path : './config.env'});

const app = express();

mongoose.connect(process.env.DATABASE_USER, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
})
.then(() => console.log('Connected to DB...'))
.catch(err => console.log(`DB Error: ${err.message}`));

app.use(express.json());

// app.use((req, res, next) => {
//   req.requestTime = new Date().toISOString();
//    console.log(req.headers);
//   next();
// });

app.use('/api/posts', postRoutes);
app.use('/api/users', userRoutes);




const port = 3000;

app.listen(port, () => {
  console.log(`App is running on port ${port}.....`);
});
