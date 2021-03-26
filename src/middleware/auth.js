const jwt = require("jsonwebtoken");

const IsAuthenticated = async (req, res, next) => {

  const token = req.header("token");
  if (!token) return res.status(401).json({ message: "Auth Error" });

  try {
    const payload = jwt.verify(token, "randomString");
    req.user = payload.user;
    next();
  } catch (err) {
      res.status(401).json({
        message: "OOps! You are not permitted to access this resource",
      });
    res.status(500).send({ message:`Error with token. ${err.message}` });
  }
 }

module.exports = IsAuthenticated
