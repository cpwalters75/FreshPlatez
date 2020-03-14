module.exports = function (sequelize, DataTypes) {
  var meal = sequelize.define("Meal", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    short_Description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price_small: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 10.99,
      allowNull: false
    },
    price_large: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 12.99,
      allowNull: false
    },
    ingredients: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    calories_small: {
      type: DataTypes.STRING,
      defaultValue: '300-400',
      allowNull: false
    },
    calories_large: {
      type: DataTypes.STRING,
      defaultValue: '500-600',
      allowNull: false
    },
    lead_time: {
      type: DataTypes.INTEGER,
      defaultValue: 2,
      allowNull: false
    },
    image_name: {
      type: DataTypes.STRING,
      defaultValue: 'FreshPlatezLogo.jpg',
      allowNull: false
    },
    reheat_time: {
      type: DataTypes.TIME,
      allowNull: true
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false
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
  return meal;
};

