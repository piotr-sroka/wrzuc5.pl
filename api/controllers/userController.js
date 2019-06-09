import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

let User = mongoose.model("User");

const saltRounds = 10;

class Users {
  add_user(req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    User.findOne({ email: email })
      .then(user => {
        if (user) {
          return res.status(409).send({ errorMessage: "User already exists. Please use other email." });
        }
        if (password !== confirmPassword) {
          return res.status(409).send({ errorMessage: "Passwords don't match" });
        }
        return bcrypt
          .hash(password, saltRounds)
          .then(hashedPassword => {
            const newUser = new User({
              email: email,
              password: hashedPassword
            });
            return newUser.save();
          })
          .then(result => {
            res.status(200).send({ message: "User created with success." });
          });
      })
      .catch(err => {
        console.log(err);
      });
  }

  login_user(req, res) {
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({ email: email })
      .then(user => {
        if (!user) {
          return res.send({ errorMessage: "User not found." });
        }
        bcrypt
          .compare(password, user.password)
          .then(doMatch => {
            if (!doMatch) {
              return res.send({ errorMessage: "Password is incorrect." });
            }
            const token = jwt.sign({ email: user.email, id: user._id.toString() }, process.env.JWT_SECRET, { expiresIn: "24h" });
            res.status(200).send({ loggedUser: { email: user.email, id: user._id }, token: token });
          })
          .catch(err => {
            console.log("err", err);
          });
      })
      .catch(err => {
        console.log(err);
      });
  }
}

export default Users;
