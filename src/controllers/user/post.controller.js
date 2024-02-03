import { User } from "../../database/conn.js";
import { bcryptHelpers } from "../../helpers/index.helpers.js";

export default async function (req, res) {
  try {
    const { password, ...data } = req.body;
    const passwordHashed = await bcryptHelpers.hashPassword(password);
    await User.create({
      ...data,
      password: passwordHashed,
    });
    return res.status(200).json({
      msg: "Usuario registrado con éxito",
    });
  } catch (error) {
    return res.status(500).json({
      msg: `Error interno en el servidor: ${error}`,
    });
  }
}
