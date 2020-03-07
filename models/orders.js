module.exports = function(sequelize, DataTypes) {
    var order = sequelize.define("Order", {
      id:  {
        type:   DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      user_id:   {
        type:   DataTypes.INTEGER,
        allowNull: false,
      },
      quanity:  {
        type:   DataTypes.INTEGER,
        allowNull: false,
      },
      total:  {
        type:   DataTypes.DECIMAL,
        allowNull: false,
      },
      notes:  {
        type:   DataTypes.STRING,
        allowNull: false,
      },
      order_status:  {
        type:   DataTypes.STRING,
        allowNull: false,
      },
      delivery_date:  {
        type:   DataTypes.DATE,
        allowNull: false,
      } ,
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
    return order;
  };