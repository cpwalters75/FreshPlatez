module.exports = function(sequelize, DataTypes) {
    var orderDetails = sequelize.define("Order_Details", {
      id:  {
        type:   DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      order_id:  {
        type:   DataTypes.INTEGER,
        allowNull: false,
      },
      quanity: 
      {
        type:   DataTypes.INTEGER,
        allowNull: false,
      },
      meal_id:   {
        type:   DataTypes.INTEGER,
        allowNull: false,
      },
      price:  {
        type:   DataTypes.DECIMAL(10,2),
        allowNull: false,
      },
      meal_status:  {
        type:   DataTypes.STRING,
        allowNull: false,
      },
      delivery_date:  {
        type:   DataTypes.DATE,
        allowNull: false,
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
    return orderDetails;
  };