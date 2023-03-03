const jwt = require("jsonwebtoken");

exports.generateToken = (payload, expired) => {
    console.log("token");
  return jwt.sign(payload,"g!6,1#sVYg)H1k-<$U}YbVEQ^4v5?_" , {
    expiresIn: expired,
  });
};
