const sequelize = require('../config/connection');
const { User, Animechars, Exercises, Goal_tracker, Rec_workout, Workout } = require('../models');

const userData = require('./userData.json');
const animecharsData = require('./animechars.json');
const exercisesData = require('./exercises.json');
const goaltrackerData = require('./goaltracker.json');
const recworkoutData = require('./recworkout.json');
const workoutsData = require('./workouts.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  console.log('allseeded');
  await Exercises.bulkCreate(exercisesData);
  
  await User.bulkCreate(userData, { individualHooks: true });
  await Rec_workout.bulkCreate(recworkoutData);
  await Animechars.bulkCreate(animecharsData);
 
  await Goal_tracker.bulkCreate(goaltrackerData);
  await Workout.bulkCreate(workoutsData);


  process.exit(0);
};

seedDatabase();
