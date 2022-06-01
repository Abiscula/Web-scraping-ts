import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../config'

export const Sites = sequelize.define('sites', {
  site: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  gameName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  gameUrl: {
    type: DataTypes.STRING,
    allowNull: false
  },
  gamePrice: {
    type: DataTypes.REAL,
    allowNull: false
  }
}, { timestamps: false })