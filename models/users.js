module.exports = function (sequelize, DataTypes) {
  var user = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    user_email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_password: {
      type: DataTypes.STRING,
      defaultValue: '',
      allowNull: true,
    },
    Fname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Lname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    allergies: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    favorites: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    is_logged_on: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    is_admin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false
    }
  });


  user.associate = function (models) {
    user.hasMany(models.Order)
  }

  return user;
};