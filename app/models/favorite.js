module.exports = (sequelize, DataTypes)=> {
    let Favorite = sequelize.define("Favorite", {

    })
    // User.belongsToMany(Book, {through: Favorite});
    // Book.belongsToMany(User, {through: Favorite});
    // Favorite.belongsToMany(User, {through: 'FavoriteBooks'});
    return Favorite
}
