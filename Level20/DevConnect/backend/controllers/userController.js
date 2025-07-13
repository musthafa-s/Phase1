import User from '../models/User.js';

export const getProfile = async (req, res) => {
  const user = await User.findById(req.userId).select('-password');
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
};

export const updateProfile = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.userId, req.body, { new: true }).select('-password');
  res.json(user);
};

export const uploadProfilePic = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.userId, { profilePic: req.file.path }, { new: true }).select('-password');
  res.json(user);
};
