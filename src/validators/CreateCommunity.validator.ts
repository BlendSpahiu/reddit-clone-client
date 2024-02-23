import Joi from "joi";

export const CreateCommunityValidator = (): Joi.ObjectSchema =>
  Joi.object({
    name: Joi.string().required().max(21).messages({
      "string.empty": "A community name is required",
      "string.max":
        "A maximum number of 21 characters is allowed for a community name",
    }),
    type: Joi.number().required().allow(10, 20, 30).messages({}),
    isNSFW: Joi.boolean().optional().allow(),
  });
