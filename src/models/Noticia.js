const { DataTypes } = require("sequelize");

module.exports = (sequelize) =>{
  sequelize.define("noticia", 
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      titulo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      copete: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      parrafos: {
        type: DataTypes.ARRAY(DataTypes.STRING(1000)),
        allowNull: false,
      },
      imagen: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      categoria: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }
  );
}


