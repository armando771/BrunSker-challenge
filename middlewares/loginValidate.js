const UserServices = require('../services/users');

const validateLogin = async (request, response, next) => {
  const { email, password } = request.body;
  console.log({ email, password });
   const user = await UserServices.getUserByEmail(email);
   const getEmail = user.map(({email}) => email).toString();
   const getPassword = user.map(({password}) => password).toString();
   console.log({ getEmail, getPassword });

   if (getEmail !== email || getPassword !== password) {
     return response.status(401).json({ message: 'Email ou senha Incorretos' }); 
   }
  next();
};

module.exports = { validateLogin };
