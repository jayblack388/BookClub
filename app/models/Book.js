module.exports = (sequelize, DataTypes)=> {
    let Book = sequelize.define("Book", {
        title: DataTypes.STRING,
        author: DataTypes.STRING,
        description: DataTypes.STRING(5000),
        thumbnail: DataTypes.STRING
    })
    // Book.belongsToMany(User, {through: 'FavoriteBooks'});
    return Book
}