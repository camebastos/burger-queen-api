'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Orders, {
      foreignKey: 'UID'
    });
  };
  // User.create({
    // email:'palomita@camis.com'
  // })
  return User;
};