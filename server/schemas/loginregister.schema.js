const Joi = require("joi");

const LOGINSCHEMA = Joi.object().keys({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

const REGISTERSCHEMA = Joi.object().keys({
  username: Joi.string().required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().required(),
  confirmPassword: Joi.string().required(),
});

const FORGOTPASSWORDSCHEMA = Joi.object().keys({
  username: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
});
const CHANGEPASSWORDSCHEMA = Joi.object().keys({
  password: Joi.string().required(),
});

module.exports = {
  LOGINSCHEMA,
  REGISTERSCHEMA,
  FORGOTPASSWORDSCHEMA,
  CHANGEPASSWORDSCHEMA,
};
