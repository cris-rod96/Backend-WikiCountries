import { User } from "../../database/conn.js";

export default async function (req, res) {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (user) {
      user.status = false;
      await user.save();
      return res.status(200).json({
        msg: "Usuario eliminado con éxito",
      });
    }
    return res.status(404).json({
      msg: "Usuario no encontrado",
    });
  } catch (error) {
    return res.status(500).json({
      msg: `Error interno en el servidor: ${error}`,
    });
  }
}
