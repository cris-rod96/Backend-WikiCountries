import { Op } from "sequelize";
import { Country } from "../../database/conn.js";
const getAll = async (req, res) => {
  try {
    const countries = await Country.findAll({});
    return res.status(200).json(countries);
  } catch (error) {
    return res.status(500).json({
      msg: `Error interno en el servidor: ${error} `,
    });
  }
};
const getByID = async (req, res) => {
  try {
    const { id } = req.params;
    const country = await Country.findByPk(id);
    return country
      ? res.status(200).json(country)
      : res.status(404).json({ msg: "País no encontrado" });
  } catch (error) {
    return res.status(500).json({
      msg: `Error interno en el servidor: ${error}`,
    });
  }
};
const getByName = async (req, res) => {
  try {
    const { name } = req.query;
    const countries = await Country.findAll({
      where: {
        commonName: {
          [Op.iLike]: `%${name}%`,
        },
      },
    });

    return res.status(200).json(countries);
  } catch (error) {
    return res.status(500).json({
      msg: `Error interno en el servidor: ${error}`,
    });
  }
};

export default {
  getAll,
  getByID,
  getByName,
};
