import express from 'express';
import bcrypt from 'bcrypt';
import { User } from '../../db/models';

const router = express.Router();

router.get('/signup', (req, res) => {
  res.render('Layout');
});
router.get('/signin', (req, res) => {
  res.render('Layout');
});

router.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;
  if (!(username && email && password)) return res.sendStatus(400);

  try {
    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: {
        userName: username,
        password: await bcrypt.hash(password, 7),
      },
    });
    if (!created) return res.sendStatus(403);

    req.session.user = { id: user.id, username: user.userName };

    return res.sendStatus(200);
  } catch (err) {
    return res.sendStatus(500);
  }
});

router.post('/signin', async (req, res) => {
  const { email, password } = req.body;
  if (!(email && password)) return res.sendStatus(400);

  try {
    const user = await User.findOne({ where: { email } });

    if (await bcrypt.compare(password, user.password)) {
      req.session.user = { id: user.id, username: user.userName };

      return res.sendStatus(200);
    }

    return res.sendStatus(401);
  } catch (err) {
    return res.sendStatus(500);
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('user_sid').sendStatus(200);
});

export default router;
