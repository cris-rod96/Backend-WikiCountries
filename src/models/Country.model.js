import { DataTypes } from "sequelize";
export default (sequelize) => {
  sequelize.define(
    "Country",
    {
      id: {
        type: DataTypes.STRING(3),
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      commonName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      officialName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      capital: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      continent: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: [
          "South America",
          "North America",
          "Europe",
          "Asia",
          "Africa",
          "Antarctica",
          "Oceania",
        ],
      },
      population: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      area: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      flag: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isUrl: true,
        },
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isUrl: true,
        },
      },
    },
    {
      timestamps: false,
    }
  );
};
