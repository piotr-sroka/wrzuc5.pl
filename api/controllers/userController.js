import mongoose from "mongoose";
import bcrypt from "bcrypt";

let User = mongoose.model("User");

const saltRounds = 10;

class Users {
  list_all_users(req, res) {
    // User.find().then(
    //   user => {
    //     res.json(user);
    //   },
    //   err => {
    //     res.send(err);
    //   }
    // );
    // console.log(User);
  }

  add_user(req, res) {
    let newUser = new User(req.body);
    let userExists = false;
    User.findOne({email: newUser.email}, (err, user) => {
      if (err) {
        console.log(err);
      }
      if (user) {
        res.send({errorMessage: "User already exist. Please use other email."});
        return;
      }
      const salt = bcrypt.genSaltSync(saltRounds);
      const hashed = bcrypt.hashSync(newUser.password, salt);
      newUser.password = hashed;
      newUser.save().then(
        user => {
          res.send({user:user, message: "User created with success."});
        },
        err => {
          console.log(err);
          res.send(err);
        }
      );
    });
  }

  login_user(req, res) {
    let loggingUser = new User(req.body);
    User.findOne({email:loggingUser.email}, (err, user) => {
      if (err) {
        console.log(err);
      }
      if (!user) {
        res.send({errorMessage: "User not found."});
        return;
      }
      const isProperPassword = bcrypt.compareSync(loggingUser.password, user.password);
      if (!isProperPassword) {
        res.send({errorMessage: "Password is incorrect."});
        return;
      }
      res.send({loggedUser: user.email});
    });
  }
}

export default Users;
