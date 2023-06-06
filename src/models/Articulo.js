const { DataTypes } = require("sequelize");

module.exports = (sequelize) =>{
  sequelize.define("articulo", 
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lead: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      paragraphs: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
        validate: {
          len: {
            args: [1, 10],
            msg: "El número máximo de párrafos es 10",
          },
        },
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    }
  );
}


