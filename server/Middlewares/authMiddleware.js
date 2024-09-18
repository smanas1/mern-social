import joi from "joi";

export const registerMiddleware = (req, res, next) => {
  const { username, email, password } = req.body;
  const schema = joi.object({
    username: joi.string().min(2).max(15).required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).max(30).required(),
  });

  schema.validate({ username, email, password });

  const { error } = schema.validate({ username, email, password });
  if (error) {
    return res.status(500).send(error.details[0].message);
  }
  next();
};
