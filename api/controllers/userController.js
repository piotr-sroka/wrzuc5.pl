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
          console.log("succes", user);
          res.json(user);
        },
        err => {
          console.log(err);
          res.sent(err);
        }
      );
      // bcrypt.genSalt(saltRounds, (err, salt) => {
      //   console.log(saltRounds);
      //   // bcrypt.hash(newUser.password, salt, (err, hash) => {
      //   //   console.log(hash);
      //   //   // newUser.password = hash;
      //   //   // newUser.save().then(
      //   //   //   user => {
      //   //   //     console.log("succes", user);
      //   //   //     res.json(user);
      //   //   //   },
      //   //   //   err => {
      //   //   //     console.log(err);
      //   //   //     res.sent(err);
      //   //   //   }
      //   //   // );
      //   // });
      // });
    });

    // newUser.save().then(
    //   user => {
    //     console.log("success", user);
    //     res.json(user);
    //   },
    //   err => {
    //     console.log(err);
    //     res.send(err);
    //   }
    // );
  }
}

export default Users;
