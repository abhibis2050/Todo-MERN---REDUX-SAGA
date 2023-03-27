const jwt = require("jsonwebtoken");

exports.protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res
        .status(400)
        .send({ success: false, message: "token is missing" });
    } else {
      jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
          return res
            .status(400)
            .send({ sucess: false, message: "Invalid Authentication" });
        }
        req.user = user;
        next();
      });
    }
  }
};
