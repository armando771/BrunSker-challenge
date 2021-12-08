const Joi = require('@hapi/joi');

const { getUserByEmail } = require('../services/users');

const schema = Joi.object().keys({
  firstName: Joi.string().min(3).required(),
  lastName: Joi.string().min(3).required(),
  password: Joi.string().min(6).required(),
  email: Joi.string().required(),
});

const ValidateUser = async (request, response, next) => {
  const { email } = request.body;
  const validation = schema.validate(request.body);

  if (validation.error) return response.status(422).json({ message: validation.error.message });

  if (!email || !email.includes('@') || !email.includes('.com')) {
    return response.status(422).json({ message: 'invalid email' });
  }

  next();
};

const ValidateEqualEmail = async (request, response, next) => {
  const { email } = request.body;
  const verify = await getUserByEmail(email);
  if (verify) return response.status(400).json({ message: 'Email ja cadastrado' });
};

module.exports = { ValidateUser, ValidateEqualEmail }
