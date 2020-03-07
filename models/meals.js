module.exports = function(sequelize, DataTypes) {
    var meal = sequelize.define("Meal", {
      id:  {
        type:   DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      short_Description:  {
        type:   DataTypes.STRING,
        allowNull: false
      },    
      price_small:  {
        type:   DataTypes.DECIMAL(10,2),
        allowNull: false
      },
      price_large:  {
        type:   DataTypes.DECIMAL(10,2),
        allowNull: false
      },
      ingredients:  {
        type:   DataTypes.TEXT,
        allowNull: false
      },
      calories_small:  {
        type:   DataTypes.STRING,
        allowNull: false
      }, 
      calories_large:  {
          type:  DataTypes.STRING,
          allowNull: false
      }, 
      lead_time:  {
        type:     DataTypes.INTEGER,
        allowNull: false
      },
      image_name:   {
          type:     DataTypes.STRING,
          allowNull: false
      },
      reheat_time:  {
          type:     DataTypes.TIME,
          allowNull: false
      },
      is_active:  {
          type:     DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: true
      },
      createdAt:   {
        type:   DataTypes.DATE,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      },  
      updatedAt:   {
        type:   DataTypes.DATE,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      } 
    });
    return meal;
  };
  