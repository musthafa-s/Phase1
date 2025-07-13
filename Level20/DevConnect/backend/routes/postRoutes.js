import express from 'express';
import { createPost, getPosts, likePost, addComment } from '../controllers/postController.js';
import auth from '../middleware/auth.js';

const router = express.Router();
router.post('/', auth, createPost);
router.get('/', getPosts);
router.put('/:id/like', auth, likePost);
router.post('/:id/comments', auth, addComment);
export default router;
