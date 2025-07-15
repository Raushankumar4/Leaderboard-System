import { User } from "../models/user.model.js";
import { History } from "../models/history.model.js";

const addUser = async (req, res) => {
  const { name } = req.body;
  const user = await User.create({ name });
  res.status(201).json(user);
};

const getAllUsers = async (_, res) => {
  const users = await User.find().sort({ totalPoints: -1 });
  const rankedUsers = users.map((user, index) => ({
    ...user.toObject(),
    rank: index + 1,
  }));
  res.json(rankedUsers);
};

const claimPoints = async (req, res) => {
  const { userId } = req.body;
  const points = Math.floor(Math.random() * 10) + 1;

  const user = await User.findById(userId);
  user.totalPoints += points;
  await user.save();

  const history = await History.create({ userId, pointsClaimed: points });

  res.json({ message: "Points claimed", points, updatedUser: user });
};

export { getAllUsers, addUser, claimPoints };
