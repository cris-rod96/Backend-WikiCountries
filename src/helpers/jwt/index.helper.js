import jwt from "jsonwebtoken";
const { SECRET_KEY } = process.env;

const generateToken = (payload) => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: "3h" });
};

export default { generateToken };
