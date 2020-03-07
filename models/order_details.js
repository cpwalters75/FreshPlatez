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
        type:   DataTypes.DECIMAL,
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
      createdAt:  {
        type:   DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      },
      updatedAt:  {
        type:   DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      }   
    });
    return orderDetails;
  };