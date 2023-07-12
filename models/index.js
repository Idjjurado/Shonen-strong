const User = require('./User');
const Animechars = require('./Animechars');
const Exercises = require('./Exercises');
const Goaltracker = require('./Goal_tracker');
const Rec_workout = require('./Rec_workout');
const Workout = require('./Workout');

//User Keys



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

Rec_workout.hasMany(Goaltracker, {
  foreignKey: 'rectracker_id',
});

Goaltracker.belongsTo(Rec_workout, {
  foreignKey: 'rectracker_id',
});



//Animechars Keys
Animechars.hasOne(Workout, {
  foreignKey: 'animecharsworkout_id',
});

Workout.belongsTo(Animechars, {
  foreignKey: 'animecharsworkout_id',
});



//Goaltracker Keys
Goaltracker.hasOne(Workout, {
  foreignKey: 'goalWork_id',
});

Workout.belongsTo(Goaltracker, {
  foreignKey: 'goalWork_id',
});


//Workout Keys
Workout.hasMany(Exercises, {
  foreignKey: 'workout_id',
});

Exercises.belongsTo(Workout, {
  foreignKey: 'workout_id',
});


module.exports = { User, Animechars, Exercises, Goaltracker, Rec_workout, Workout};
