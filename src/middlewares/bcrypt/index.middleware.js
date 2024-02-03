import jwt from "jsonwebtoken";
import { User } from "../../database/conn.js";
const { SECRET_KEY } = process.env;
const validateJWT = async (req, res, next) => {
  const token = req.header("x-token");

  if (!token)
    return res.status(401).json({
      msg: "No se encontró ningún token.",
    });

  try {
    const { userId } = jwt.verify(token, SECRET_KEY);
    const user = await User.findByPk(userId);
    if (!user)
      return res.status(401).json({
        msg: `Token no válido - usuario inválido`,
      });

    if (!user.status)
      return res.status(401).json({
        msg: `Token no válido - usuario inválido`,
      });

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({
      msg: "Token no válido",
    });
  }
};

export default { validateJWT };
