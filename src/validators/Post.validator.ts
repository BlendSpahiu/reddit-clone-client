import Joi from "joi";

export const PostValidatorSchema = (): Joi.ObjectSchema =>
  Joi.object({
    title: Joi.string().required().max(300).messages({
      "string.empty": "Title can't be empty",
      "string.max": "Maximum 300 characters allowed",
    }),
  });
