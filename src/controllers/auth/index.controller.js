import { User } from "../../database/conn.js";
import { jwtHelpers, bcryptHelpers } from "../../helpers/index.helpers.js";

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (user && !user.status)
      return res.status(401).json({ msg: `Usuario no válido` });

    const validLogin =
      user && (await bcryptHelpers.comparePassword(password, user.password));

    if (validLogin) {
      const token = jwtHelpers.generateToken({
        userId: user.id,
        email: user.email,
      });

      return res.status(200).json({
        user: {
          id: user.id,
          email: user.email,
          fullName: user.fullName,
        },
        token,
      });
    }

    return res.status(401).json({
      msg: "Credenciales incorrectas",
    });
  } catch (error) {}
};

export default { login };
