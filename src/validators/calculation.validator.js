const Joi = require("joi");

const ShapeSchema = Joi.object({
  shape_name: Joi.string().required(),
  dimensions: Joi.number().required(),
  userId: Joi.string().required()
});

const validateShapeData = (data) => {
  let { error, value } = ShapeSchema.validate(data);
  return { err: error, value };
};

module.exports = { validateShapeData };
