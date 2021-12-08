const { verify } = require('jsonwebtoken');

const UserServices = require('../services/users');

const authTokenAdmin = async (request, response, next) => {
  const token = request.headers.authorization;
  try {
    if (!token) return response.status(401).json({ message: 'token invalido' });

    const decoded = verify(token, 'secret');

    const { email } = decoded;

    const user = await UserServices.getUserByEmail(email);
    const getEmail = user.map(({email}) => email).toString();
 
    if (getEmail !== 'admin@ADM.com') return response.status(400).json({ message: 'Acesso concedido apenas por administradores' });

    next();
  } catch (e) {
    console.log(e)
  }

};

const authToken = async (request, response, next) => {
  const token = request.headers.authorization;
  try {
    if (!token) return response.status(401).json({ message: 'token invalido' });

    const decoded = verify(token, 'secret');

    const { email } = decoded;

    const user = await UserServices.getUserByEmail(email);
 
    if (!user) return response.status(400).json({ message: 'Usuario nao esta logado' });

    next();
  } catch (e) {
    console.log(e)
  }
};


module.exports = { authToken, authTokenAdmin };
