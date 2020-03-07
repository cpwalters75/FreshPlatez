module.exports = function(sequelize, DataTypes) {
    var user = sequelize.define("User", {
      id:  {
        type:   DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      user_email:   {
        type:   DataTypes.STRING,
        allowNull: false,
      }, 
      user_password:    {
        type:   DataTypes.STRING,
        allowNull: false,
      },
      Fname:   {
        type:   DataTypes.STRING,
        allowNull: false,
      },
      Lname:   {
        type:   DataTypes.STRING,
        allowNull: false,
      },
      allergies:  {
        type:   DataTypes.STRING,
        allowNull: false,
      },
      favorites:  {
        type:   DataTypes.STRING,
        allowNull: false,
      },
      is_logged_on:  {
        type:   DataTypes.BOOLEAN,
        allowNull: false,
      },  
      is_admin:   {
        type:   DataTypes.BOOLEAN,
        allowNull: false,
      },  
      email:   {
        type:   DataTypes.STRING,
        allowNull: false,
      },
      createdAt:   {
        type:   DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      },  
      updatedAt:   {
        type:   DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      }
    });
    return user;
  };