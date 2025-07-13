import Post from '../models/Post.js';
import Comment from '../models/Comment.js';

export const createPost = async (req, res) => {
  const { title, content } = req.body;
  const post = await Post.create({ title, content, author: req.userId });
  res.status(201).json(post);
};

export const getPosts = async (req, res) => {
  const posts = await Post.find()
    .populate('author', 'name profilePic')
    .populate({ path: 'comments', populate: { path: 'user', select: 'name' } })
    .sort({ createdAt: -1 });
  res.json(posts);
};

export const likePost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) return res.status(404).json({ message: 'Post not found' });

  const liked = post.likes.includes(req.userId);
  post.likes = liked
    ? post.likes.filter(id => id.toString() !== req.userId)
    : [...post.likes, req.userId];
  await post.save();
  res.json(post);
};

export const addComment = async (req, res) => {
  const comment = await Comment.create({ text: req.body.text, user: req.userId, post: req.params.id });
  await Post.findByIdAndUpdate(req.params.id, { $push: { comments: comment._id } });
  res.status(201).json(comment);
};
