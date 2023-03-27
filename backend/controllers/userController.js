const { generateToken } = require("../config/generateToken");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

exports.registerUser = async (req, res) => {
  try {
    const { name, email, password, pic } = req.body;
    if (
      !name 
      ||
       !email || !password) {
      return res.status(400).send({ status:false,message: "Please Enter all the Feilds" });
    }
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).send({status:false, message: "User already exists" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashPassword,
    });

    if (user) {
      return res.status(201).send({
        success:true,
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken({ id: user._id }),
        message:"User Created Successfully"
      });
    } else {
      return res.status(400).send({ message: "user not found" });
    }
  } catch (error) {
    return res.status(500).send({ success: false, message: error.message });
  }
};

// login
exports.authUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.send({ success: false, message: "Invalid Email or Password" });
    }

    //to check if the password matches or not
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      res.send({ success: false, message: "password didnot match" });
    }

    res.send({
      success: true,
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken({ id: user._id }),
      message: "Login Successful",
    });
  } catch (error) {
    return res.status(500).send({ success: false, message: error.message });
  }
};

exports.allUsers = async (req, res) => {
  try {
    const keyword = req.query.search
      ? {
          $or: [
            { name: { $regex: req.query.search, $options: "i" } },
            { email: { $regex: req.query.search, $options: "i" } },
          ],
        }
      : {};
    // console.log(req.user);
    console.log(keyword);
    const users = await User.find(keyword).find({ _id: { $ne: req.user._id } });
    res.send(users);
  } catch (error) {
    return res.status(500).send({ success: false, message: error.message });
  }
};
