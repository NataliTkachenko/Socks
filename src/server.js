import express from 'express';
import path from 'path';
import session from 'express-session';
import store from 'session-file-store';
import jsxRender from './utils/jsxRender';
import authRouter from './routes/authRouter';
import { authMiddleware } from './middlewares';

const nodemailer = require('nodemailer');
 const {User} = require('../db/models');

const PORT = process.env.PORT || 3000;
const app = express();
const FileStore = store(session);

app.engine('js', jsxRender);
app.set('view engine', 'js');
app.set('views', path.join(__dirname, 'components'));

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const sessionConfig = {
  name: 'user_sid',
  secret: process.env.SESSION_SECRET ?? 'test',
  resave: true,
  store: new FileStore(),
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
};

app.use(session(sessionConfig));
app.use((req, res, next) => {
  res.locals.path = req.originalUrl;
  res.locals.user = req.session.user;
  next();
});
app.use(authMiddleware);


const router = express.Router();
require('dotenv').config();

  app.post('/sendreceipt', async (req, res) => {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'boberbobrovichelbrus@gmail.com',
        pass: 'boberbobrovich11!'
      },
    });
    const USER_ID = req.session.user.id
    const use = await User.findOne({ where: { id: USER_ID } });
      const mailOptions = {
        from: ` "${use.name} ☕ 🥃 🍭" <${use.email}>`,
        to: 'boberbobrovichelbrus@gmail.com',
        subject: 'New Order 🎟',
       
      }
      transporter.sendMail(mailOptions);
      return res.json('All right');
  
  });






    
app.get('/', (req, res) => {
  res.render('Layout', {});
});

app.use('/user/', authRouter);

app.get('/cart', (req, res) => {
  res.render('Layout', {});
});


app.get('/favourites', (req, res) => {
  res.render('Layout', {});
});

app.get('/sockscreate', (req, res) => {
  res.render('Layout', {});
});



app.get('/share', (req, res) => {
  res.render('Layout', {});
});

app.listen(PORT, () => console.log(`App has started on port ${PORT}`));
