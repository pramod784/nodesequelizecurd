'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.User_company_mapper, {foreignKey : 'userId'});
      this.hasMany(models.User_company_mapper, {foreignKey : 'companyId'});
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'User',
    tableName:'user'
  });
  return User;
};