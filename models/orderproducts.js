'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrderProducts = sequelize.define('OrderProducts', {
    orderId: DataTypes.INTEGER,
    productsId: DataTypes.INTEGER
  }, {});
  OrderProducts.associate = function(models) {
    OrderProducts.belongsTo(models.Orders,{
      foreignKey: 'ordeId'
    });
    OrderProducts.belongsTo(models.Products,{
      foreignKey: 'productsId'
    })
  };
  return OrderProducts;
};