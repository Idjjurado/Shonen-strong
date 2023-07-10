const router = require('express').Router();

const userRoutes = require('./userRoutes.js');
const workoutRoutes = require('./workoutRoutes.js');
// const postRoutes = require('./postRoutes.js');
// const commentRoutes = require('./commentRoutes.js');

// all of these routes are prefixed with '/api'
router.use('/users', userRoutes);
// router.use('/posts', postRoutes);
// router.use('/comments', commentRoutes);
router.use('/workouts', workoutRoutes)


module.exports = router;
