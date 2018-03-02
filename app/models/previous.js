module.exports = (sequelize, DataTypes) => {
    var Previous = sequelize.define("Previous", {
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
    return Previous;
  };
  