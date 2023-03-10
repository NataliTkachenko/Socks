import express from 'express';
import morgan from 'morgan';
import path from 'path';
import session from 'express-session';
import store from 'session-file-store';
import jsxRender from './utils/jsxRender';
import authRouter from './routes/authRouter';
import { authMiddleware } from './middlewares';
   import nodeMailer  from 'nodemailer';

const PORT = 3000;
const app = express();
const FileStore = store(session);

app.engine('jsx', jsxRender);
app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, 'components'));

app.use(express.static('public'));
app.use(morgan('dev'));
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

app.post('/send-email', function (req, res) {
      let transporter = nodeMailer.createTransport({
          host: 'smtp.gmail.com',
          port: 465,
          secure: true,
          auth: {
              user: 'xxx@xx.com',
              pass: 'xxxx'
          }
      });
      let mailOptions = {
          from: '"Krunal Lathiya" <xx@gmail.com>', // sender address
          to: req.body.to, // list of receivers
          subject: req.body.subject, // Subject line
          text: req.body.body, // plain text body
          html: '<b>NodeJS Email Tutorial</b>' // html body
      };

      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          }
          console.log('Message %s sent: %s', info.messageId, info.response);
              res.render('index');
          });
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
