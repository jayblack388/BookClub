module.exports = (sequelize, DataTypes) => {
    var Futures = sequelize.define("Futures", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        unique: true
      },
      book_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "books",
          key: "id"
          },
        allowNull: false
      },
      user_id: {
        type: DataTypes.INTEGER,
        references:{
          model: "users",
          key:"id"
        },
        allowNull: false
      }
    });
    return Futures;
  };
  