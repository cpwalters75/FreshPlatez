module.exports = function (sequelize, DataTypes) {
  var orderDetails = sequelize.define("Order_Details", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    meal_size: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity:
    {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    meal_status: {
      type: DataTypes.STRING,
      allowNull: false,
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


  orderDetails.associate = function (models) {
    orderDetails.belongsTo(models.Order)
    orderDetails.belongsTo(models.Meal)
  }

  return orderDetails;
};