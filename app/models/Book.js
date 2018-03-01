module.exports = (sequelize, DataTypes)=> {
    let Book = sequelize.define("book", {
        title: DataTypes.STRING,
        author: DataTypes.STRING,
        description: DataTypes.STRING(5000),
        thumbnail: DataTypes.STRING
    })
    // Book.belongsToMany(User, {through: 'Favorite'});
    return Book
}