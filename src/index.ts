import express from 'express';
import path from 'path';
import userRoute from './routes/userRoutes';

const app = express();
const port = 2001;

app.set('views', path.join(__dirname, '../views'));

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/public', express.static(path.join(__dirname, 'public')));

app.use('/',userRoute)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
