const Imovel = (sequelize, DataTypes) => {
  const Imovel = sequelize.define("Imovel", {
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    rooms: DataTypes.INTEGER,
    garage: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    type: DataTypes.STRING
  });

  return Imovel;
};

module.exports = Imovel;