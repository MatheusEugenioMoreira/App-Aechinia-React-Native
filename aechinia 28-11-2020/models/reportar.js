'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reportar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Reportar.belongsTo(models.User);
    }
  };
  Reportar.init({
    sintomas: DataTypes.STRING,
    observacoes: DataTypes.STRING,
    usuario_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Reportar',
  });
  return Reportar;
};