'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_company_mapper extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {targetKey : 'id'});
      this.belongsTo(models.Company, {targetKey : 'id'});
    }
  }
  User_company_mapper.init({
    userId: DataTypes.INTEGER,
    companyId: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User_company_mapper',
    tableName:'user_company_mapper'
  });
  return User_company_mapper;
};