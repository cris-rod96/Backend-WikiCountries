import { User } from "../../database/conn.js";
import { bcryptHelpers } from "../../helpers/index.helpers.js";

export default async function (req, res) {
  try {
    // Saco el ID del token
    // const { id } = req.user;
    const { id } = req.params;
    const data = req.body;
    console.log(data);
    if (data.password) {
      data.password = await bcryptHelpers.hashPassword(data.password);
    }

    const [updated, _] = await User.update(data, {
      where: {
        id,
      },
    });

    return updated > 0
      ? res.status(200).json({
          msg: "Información del usuario actualizada",
        })
      : res.status(400).json({
          msg: "No se pudo actualizar la información del usuario",
        });
  } catch (error) {
    return res.status(500).json({
      msg: `Error interno en el servidor: ${error}`,
    });
  }
}
