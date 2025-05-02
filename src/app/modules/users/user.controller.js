import { createUser, getAllUserInfo } from "./user.service.js";

export const registerUser = async (req, res) => {
  try {
    const user = await createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const getAllUserInfoUser = async (req, res) => {
  try {
    const user = await getAllUserInfo();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
