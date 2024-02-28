import Joi from "joi";

export const PostValidatorSchema = (): Joi.ObjectSchema =>
  Joi.object({
    title: Joi.string().required().max(300).messages({
      "string.empty": "Title can't be empty",
      "string.max": "Maximum 300 characters allowed",
    }),
    content: Joi.string().optional().allow(""),
    isOC: Joi.boolean().optional(),
    isNSFW: Joi.boolean().optional(),
    isSpoiler: Joi.boolean().optional(),
    link: Joi.string()
      .optional()
      .pattern(
        new RegExp(
          "(http|ftp|https)://[w-]+(.[w-]+)+([w.,@?^=%&amp;:/~+#-]*[w@?^=%&amp;/~+#-])?",
        ),
      )
      .messages({
        "string.pattern.base": "URL must match https:// pattern.",
      }),
  });
