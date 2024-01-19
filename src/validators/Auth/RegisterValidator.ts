import Joi from "joi";

export const RegisterValidatorSchema = () =>
  Joi.object({
    username: Joi.string().required().messages({
      "string.empty": "Username cannot be empty.",
    }),
    password: Joi.string()
      .required()
      .pattern(
        new RegExp(
          "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$",
        ),
      )
      .messages({
        "string.pattern.base":
          "Password must have at least one lowercase letter, one uppercase letter, one number and one special character.",
        "string.empty": "Password cannot be empty.",
      }),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .messages({
        "string.empty": "Email cannot be empty.",
        "string.email": "Email is not valid.",
      }),
    date_of_birth: Joi.string()
      .required()
      .pattern(
        new RegExp(
          /^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/,
        ),
      )
      .messages({
        "string.pattern.base": "Date of birth must match pattern DD-MM-YYYY",
        "string.empty": "Date of birth cannot be empty.",
      }),
  });
