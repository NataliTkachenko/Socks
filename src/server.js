import express from 'express';
import morgan from 'morgan';
import path from 'path';
import jsxRender from './utils/jsxRender';
import authRouter from "./routes/authRouter";

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
app.use("/api/auth", authRouter);

app.listen(PORT, () => console.log(`App has started on port ${PORT}`));
