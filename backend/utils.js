import jwt from "jsonwebtoken";

export const generateToken = (user) => {
  //sign(para1, param2, param3) - takes 3 params
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET || "myscret",
    {
      expiresIn: "30d",
    }
  );
};


// Middleware
export const isAuth = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (authorization) {
    const token = authorization.slice(7, authorization.length); 
    jwt.verify(
      token,
      process.env.JWT_SECRET || 'myscret',
      (err, decode) => {
        if (err) {
          res.status(401).send({ message: 'Invalid Token' });
        } else {
          req.user = decode;
          next();
        }
      }
    );
  } else {
    res.status(401).send({ message: 'No Token' });
  }
};