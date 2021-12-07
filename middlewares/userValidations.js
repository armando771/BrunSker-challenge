const Joi = require('@hapi/joi');

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

module.exports = { ValidateUser }
