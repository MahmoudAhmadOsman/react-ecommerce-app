import express from "express";
import expressAsyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import data from "../data.js";

import User from "../models/userModel.js";
import { generateToken } from "../utils.js";

const userRouter = express.Router();

userRouter.get(
	"/seed",
	expressAsyncHandler(async (req, res) => {
		//await User.remove({}); // You can remove all users in order to insert new users
		const createdUsers = await User.insertMany(data.users);
		res.send({ createdUsers });
	})
);

//Login Route

userRouter.post(
	"/signin",
	expressAsyncHandler(async (req, res) => {
		const user = await User.findOne({ email: req.body.email });

		//Check the user and compare password
		if (user) {
			if (bcrypt.compareSync(req.body.password, user.password)) {
				//Compare password
				res.send({
					_id: user._id,
					name: user.name,
					email: user.email,
					isAdmin: user.isAdmin,
					token: generateToken(user),
				});
				return;
			}
		}
		//If user doesn't exist or user email or password is in incorrect
		res.status(401).send({ message: "Wrong email or password!" });
	})
);

//Registeration router
userRouter.post(
	"/register",
	expressAsyncHandler(async (req, res) => {
		//Create new user
		const user = new User({
			name: req.body.name,
			email: req.body.email,
			password: bcrypt.hashSync(req.body.password, 10),
		});

		//Save the user to the database
		const createdUser = await user.save();
		//Now, send the data to the backend
		res.send({
			_id: createdUser._id,
			name: createdUser.name,
			email: createdUser.email,
			isAdmin: createdUser.isAdmin,
			token: generateToken(createdUser),
		});
	})
);

//User profile route

//Get user by id
userRouter.get(
	"/:id",
	expressAsyncHandler(async (req, res) => {
		const user = await User.findById(req.params.id);
		if (user) {
			res.send(user);
		} else {
			res.status(404).send({ message: "User not found!" });
		}
	})
);

export default userRouter;
