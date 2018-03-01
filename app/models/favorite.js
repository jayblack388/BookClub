module.exports = (sequelize, DataTypes)=> {
    let Favorite = sequelize.define("Favorite", {
        /* id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            unique: true
          },
        bookId: {
            type: DataTypes.INTEGER,
            references: "Book",
            referencesKey: "id",
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            references: "User",
            referencesKey: "id",
            allowNull: false
        } */
    })
    return Favorite
}


// Book.belongsToMany(User, {through: 'Favorite'});
// User.belongsToMany(Book, {through: 'Favorite'});
