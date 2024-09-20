import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs";

export const registerController = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ email: email });

    if (existingUser) return res.status(400).send("Email already exists");

    bcrypt.hash(password, 8, async function (err, hash) {
      const userinfo = new User({ username, email, password: hash });

      await userinfo.save();

      res.send(userinfo);
      if (err) {
        return res.status(500).send("Encryption failed");
      }
    });
  } catch (error) {
    if (error.code === 11000) {
      console.log(error.message);
      return res.status(400).send("Email already exists");
    }
  }
};
