const User = require('./User');
const Animechars = require('./Animechars');
const Exercises = require('./Exercises');
const Goal_tracker = require('./Goal_tracker');
const Rec_workout = require('./Rec_workout');
const Workout = require('./Workout');

//User Keys
User.hasMany(Rec_workout, {
  foreignKey: 'user_id',
});

Rec_workout.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasOne(Goal_tracker, {
  foreignKey: 'usercurrwork_id',
});

Goal_tracker.belongsTo(User, {
  foreignKey: 'usercurrwork_id',
});


//Rec_workout Keys
Rec_workout.hasMany(Animechars, {
  foreignKey: 'recworkout_id',
});

Animechars.belongsTo(Rec_workout, {
  foreignKey: 'recworkout_id',
});

Rec_workout.hasMany(Workout, {
  foreignKey: 'recworkout_id',
});

Workout.belongsTo(Rec_workout, {
  foreignKey: 'recworkout_id',
});

Rec_workout.hasMany(Goal_tracker, {
  foreignKey: 'rectracker_id',
});

Goal_tracker.belongsTo(Rec_workout, {
  foreignKey: 'rectracker_id',
});



//Animechars Keys
Animechars.hasOne(Workout, {
  foreignKey: 'animecharsworkout_id',
});

Workout.belongsTo(Animechars, {
  foreignKey: 'animecharsworkout_id',
});



//Goal_tracker Keys
Goal_tracker.hasOne(Workout, {
  foreignKey: 'goalWork_id',
});

Workout.belongsTo(Goal_tracker, {
  foreignKey: 'goalWork_id',
});


//Workout Keys
Workout.hasMany(Exercises, {
  foreignKey: 'workout_id',
});

Exercises.belongsTo(Workout, {
  foreignKey: 'workout_id',
});


module.exports = { User, Animechars, Exercises, Goal_tracker, Rec_workout, Workout};
