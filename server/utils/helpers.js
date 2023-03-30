const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const hashPassword = (password) => {
  const salt = bcrypt.genSaltSync();
  return bcrypt.hashSync(password, salt);
};

const comparePassword = (raw, hash) => {
  return bcrypt.compare(raw, hash);
};

const generateTOken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};


module.exports = {
    hashPassword,
    comparePassword,
    generateTOken
}