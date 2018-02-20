module.exports = (sequelize, DataTypes)=> {
    let Account = sequelize.define("Account", {
        username: DataTypes.STRING,
        email: DataTypes.STRING
    })
    return Account
}