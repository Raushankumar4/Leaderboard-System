import { History } from "../models/history.model.js";

export const getHistory = async (_, res) => {
  const history = await History.find()
    .populate("userId", "name")
    .sort({ claimedAt: -1 });
  res.json(history);
};
