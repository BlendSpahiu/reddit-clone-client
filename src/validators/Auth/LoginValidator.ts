import Joi from "joi";

export const LoginValidatorSchema = Joi.object({
  username: Joi.string().required().messages({
    "string.empty": "Username cannot be empty!",
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
      "string.empty": "Password cannot be empty!",
    }),
});
