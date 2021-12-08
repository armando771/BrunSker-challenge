const jwt = require('jsonwebtoken');

const UserLogin = async (request, response) => {
  const { email, password } = request.body;

  const payload = {
    email,
    password,
  };

  const token = jwt.sign(payload, 'secret');

  response.status(200).json({ token });
};

module.exports = { UserLogin };
