const jwt = require('jsonwebtoken');

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const UserLogin = async (request, response) => {
  const { email, password } = request.body;

  const payload = {
    email,
    password,
  };

  const token = jwt.sign(payload, 'secret', jwtConfig);

  response.status(200).json({ token });
};

module.exports = { UserLogin };
