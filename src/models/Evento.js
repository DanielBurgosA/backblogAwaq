const { DataTypes } = require("sequelize");

module.exports = (sequelize) =>{
  sequelize.define("evento", 
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
      paragraphs: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
        validate: {
          len: {
            args: [1, 5],
            msg: "El número máximo de párrafos es 5",
          },
        },
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      place: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }
  );
}

