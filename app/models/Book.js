module.exports = (sequelize, DataTypes)=> {
    let Book = sequelize.define("Book", {
        title: DataTypes.STRING,
        author: DataTypes.STRING
    })
    return Book
}