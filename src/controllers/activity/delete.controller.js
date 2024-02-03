import { Activity } from "../../database/conn.js";
export default async function (req, res) {
  try {
    const { id } = req.params;
    const { id: userId } = req.user;

    const activity = await Activity.findOne({
      where: {
        id,
        userId,
      },
    });

    if (!activity)
      return res.status(404).json({
        msg: `Actividad no encontrada`,
      });

    activity.isDeleted = true;
    await activity.save();

    return res.status(200).json({
      msg: `La actividad ha sido eliminada con éxito`,
    });
  } catch (error) {
    return res.status(500).json({
      msg: `Error interno en el servidor: ${error}`,
    });
  }
}
