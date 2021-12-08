const Joi = require('@hapi/joi');

const schema = Joi.object().keys({
  address: Joi.string().min(3).required(),
  city: Joi.string().min(3).required(),
  rooms: Joi.number().integer().required(),
  garage: Joi.string().required(),
  price: Joi.number().integer().required(),
  type: Joi.string().min(3).required(),
});


const ValidateImmobile = async (request, response, next) => {
  const validation = schema.validate(request.body);

  if (validation.error) return response.status(422).json({ message: validation.error.message });

  next();
};

module.exports = { ValidateImmobile }