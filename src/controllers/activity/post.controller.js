import { Activity } from "../../database/conn.js";

export default async function (req, res) {
  try {
    const { id: userId } = req.user;
    console.log("Llega userID: ", userId);
    const { countries, ...data } = req.body;
    const activity = await Activity.create({
      ...data,
      userId,
    });
    activity.addCountry(countries);

    return res.status(200).json({
      msg: "Actividad creada con éxito",
    });
  } catch (error) {
    return res.status(500).json({
      msg: `Error interno en el servidor: ${error}`,
    });
  }
}
