import jwt from "jsonwebtoken";

export const generateToken = (user) => {
  //sign(para1, param2, param3) - tales 3 params
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
