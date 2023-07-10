const sequelize = require('../config/connection');
const { User, Animechars, Exercises, Goal_tracker, Rec_workout, Workout } = require('../models');

const userData = require('./userData.json');
const animecharsData = require('./animechars.json');
const exercisesData = require('./exercise.json');
const goaltrackerData = require('./goaltracker.json');
const recworkoutData = require('./recworkout.json');
const workoutsData = require('./workouts.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, { individualHooks: true });
  await Animechars.bulkCreate(animecharsData);
  await Exercises.bulkCreate(exercisesData);
  await Goal_tracker.bulkCreate(goaltrackerData);
  await Rec_workout.bulkCreate(recworkoutData);
  await Workout.bulkCreate(workoutsData);



  process.exit(0);
};

seedDatabase();
