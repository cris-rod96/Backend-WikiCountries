import { Op } from "sequelize";
import { Activity, Country } from "../../database/conn.js";

const getAll = async (req, res) => {
  try {
    const { id: userId } = req.user;
    const activities = await Activity.findAll({
      where: {
        userId,
      },
      include: [Country],
    });
    return res.status(200).json(activities);
  } catch (error) {
    return res.status(500).json({
      msg: `Error interno en el servidor: ${error}`,
    });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const { id: userId } = req.user;
    const activity = await Activity.findOne({
      where: {
        id,
        userId,
      },
      include: [Country],
    });

    return activity
      ? res.status(200).json(activity)
      : res.status(404).json({
          msg: `Actividad del usuario no encontrada`,
        });
  } catch (error) {
    return res.status(500).json({
      msg: `Error interno en el servidor: ${error}`,
    });
  }
};
const getByName = async (req, res) => {
  try {
    const { title } = req.query;
    const { id: userId } = req.user;

    const activities = await Activity.findAll({
      where: {
        title: {
          [Op.iLike]: `%${title}%`,
        },
        userId,
      },
    });
    return res.status(200).json(activities);
  } catch (error) {
    return res.status(500).json({
      msg: `Error interno en el servidor: ${error}`,
    });
  }
};

export default { getAll, getById, getByName };
