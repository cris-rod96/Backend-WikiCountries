import { Sequelize } from "sequelize";

import {
  UserModel,
  ActivityModel,
  CountryModel,
} from "../models/index.models.js";

const { URI_DATABASE } = process.env;

const conn = new Sequelize(URI_DATABASE, { logging: false });

UserModel(conn);
ActivityModel(conn);
CountryModel(conn);

const { User, Country, Activity } = conn.models;

User.hasMany(Activity, {
  foreignKey: "userId",
  sourceKey: "id",
});
Activity.belongsTo(User, {
  foreignKey: "userId",
});

Activity.belongsToMany(Country, { through: "Activities_Countries" });
Country.belongsToMany(Activity, { through: "Activities_Countries" });

export default { conn, models: conn.models };
