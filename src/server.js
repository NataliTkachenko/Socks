import express from 'express';
import morgan from 'morgan';
import path from 'path';
import jsxRender from './utils/jsxRender';
import authRouters from './routes/authRouters';

const PORT = 3000;
const app = express();

app.engine('jsx', jsxRender);
app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, 'components'));

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  const initState = { hello: 'world' };
  res.render('Layout', initState);
});

app.use('/user/', authRouters);

app.listen(PORT, () => console.log(`App has started on port ${PORT}`));

app.get('/cart', (req, res) => {
  res.render('Layout', {});
});

app.get('/favourites', (req, res) => {
  res.render('Layout', {});
});

app.get('/cart', (req, res) => {
  res.render('Layout', {});
});
