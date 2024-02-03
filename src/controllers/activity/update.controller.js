import { Activity } from "../../database/conn.js";

export default async function (req, res) {
  try {
    const { id } = req.params;
    const { id: userId } = req.user;
    const { countries, ...data } = req.body;
    const activity = await Activity.findOne({
      where: {
        id,
        userId,
      },
    });

    if (activity) {
      await activity.update({
        ...data,
      });

      if (countries) {
        await activity.setCountries([]);
        await activity.addCountry(countries);
      }
      await activity.save();
      return res.status(201).json({
        msg: "Actividad actualizada con éxito",
      });
    }

    return res.status(404).json({
      msg: "Actividad no encontrada",
    });
  } catch (error) {
    return res.status(500).json({
      msg: `Error interno en el servidor: ${error}`,
    });
  }
}
