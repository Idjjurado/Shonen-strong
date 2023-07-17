const router = require('express').Router();
const sequelize = require('../../config/connection');
const { User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
    });
    res.status(200).json(userData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Route for login
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({
      where: { email: req.body.email },
    });

    if (!user) {
      return res.status(400).json({ message: 'Credentials not valid.' });
    }

    const validPw = await user.checkPassword(req.body.password);
    if (!validPw) {
      return res
        .status(400)
        .json({ message: 'Incorrect Password, try again!' });
    }

    req.session.save(() => {
      req.session.userId = user.id;
      req.session.loggedIn = true;
      res.status(200).json(user);
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// Route for logout
router.post('/logout', async (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// Route to sign up a new user
router.post('/signup', async (req, res) => {
  console.log('New user signup');
  try {
    const newUser = await User.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    req.session.save(() => {
      (req.session.userId = newUser.id), (req.session.loggedIn = true);
      res.status(201).json(newUser);
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// Route that populates all users
router.get('/:userId', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.userId, {
      attributes: {
        exclude: ['password'],
        include: [
          // Using plain SQL to get user information with all recommended workouts
          [
            sequelize.literal(
              '(SELECT (*) FROM user;)'
            ),
          ],
        ],
      },
    });

    if (!user) {
      return res.status(404).json({ message: 'No user found.' });
    }

    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// Route to update user profile
router.put('/profile', withAuth, async (req, res) => {
  try {
    // pass in req.body to only update what's sent over by the client
    const updatedUser = await User.update(req.body, {
      where: {
        id: req.session.userId,
      },
      individualHooks: true,
    });

    if (!updatedUser[0]) {
      return res.status(404).json({ message: 'No user found.' });
    }

    res.status(202).json(updatedUser);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

//Route to view user profile
router.get('/profile', withAuth, async (req, res) => {
  try {
    const userProfile = await User.findByPk(req.session.userId, {
      attributes: { exclude: ['password'] },
    });

    if (!userProfile) {
      return res.status(404).json({ message: 'No user identified, please login or signup!' });
    }

    res.status(200).json(userProfile);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// Route to delete a user
router.delete('/:userId', async (req, res) => {
  try {
    const deletedUser = await User.destroy({
      where: {
        id: req.params.userId,
      },
    });
    console.log(deletedUser);

    if (!deletedUser) {
      return res.status(404).json({ message: 'No user found.' });
    }

    res.status(202).json(deletedUser);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
