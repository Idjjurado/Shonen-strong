const router = require('express').Router();

const userRoutes = require('./userRoutes.js');
const workoutRoutes = require('./workoutRoutes.js');

// all of these routes are prefixed with '/api'
router.use('/users', userRoutes);
router.use('/workouts', workoutRoutes);


module.exports = router;
