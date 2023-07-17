const router = require('express').Router();
const { Workout } = require('../../models');

// all of these routes are prefixed with '/api/workouts'

//These will populate the workout page
router.get('/legs', async (req, res) => {
  // we know we want to query out DB for all LEG WORKOUTS
  const legWorkouts = await Workout.find({ where: { workoutname: 'legs' } });
  // IF we need we can filter/add/remove data from the database query BEFORE we send the data along with the VIEW
  res.render('workoutPage', { name: data, workouts: legWorkouts });
});

router.get('/ChestWorkouts');

router.get('/difficulty', async (req, res) => {
  const legWorkouts = await Workout.find({
    where: { workoutname: 'difficulty' },
  }); // let's assume this returns an ARRAY
  res.render('workoutList', { name: data, workouts: legWorkouts });
});

router.get('/Squats', async (req, res) => {
  // we know we want to query out DB for all LEG WORKOUTS
  const legWorkouts = await Workout.find({ where: { workoutname: 'Squats' } }); // let's assume this returns an ARRAY
  // IF we need we can filter/add/remove data from the database query BEFORE we send the data along with the VIEW
  res.render('workoutList', { name: data, workouts: legWorkouts });
});

/*
// --> '/api/aquat'
router.get('/squat', (req, res) => {
    // maybe we query the database for some squat DATA
    let data = "Sarah";
    let projects = ["Mario Kart", "Quiz game", "Password Generator"]


    // we RESPONDE to the incoming request (object) with a VIEW and CONTEXT (data)
    res.render('profile', { data });
});
*/

module.exports = router;
