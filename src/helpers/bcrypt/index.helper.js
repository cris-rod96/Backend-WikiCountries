import { hash, compare } from "bcrypt";

const SALT_SYNC = 13;

const hashPassword = async (pwd) => {
  return await hash(pwd, SALT_SYNC);
};

const comparePassword = async (pwd, hashed) => {
  return await compare(pwd, hashed);
};

export default {
  hashPassword,
  comparePassword,
};
