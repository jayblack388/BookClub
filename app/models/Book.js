module.exports = function(sequelize, DataTypes) {
    let Book = sequelize.define("book", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            unique: true
        },
        title: DataTypes.STRING,
        author: DataTypes.STRING,
        description: DataTypes.STRING(5000),
        thumbnail: DataTypes.STRING
    })
    return Book
}