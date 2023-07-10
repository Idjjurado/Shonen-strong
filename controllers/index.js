const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const userRoutes = require('./api/userRoutes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/user', userRoutes);

router.use((req, res) => res.send('<h1>Oops! Wrong Route!</h1>'));

module.exports = router;
