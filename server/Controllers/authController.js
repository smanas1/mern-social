import { User } from "../models/userModel.js";

export const registerController = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const userinfo = new User({ username, email, password });

    await userinfo.save();

    res.send(userinfo);
  } catch (error) {
    console.log(error);
    if (error.code === 11000) {
      return res.status(400).send("Email already exists");
    }
  }
};
