import express from 'express';
import { getProfile, updateProfile, uploadProfilePic } from '../controllers/userController.js';
import auth from '../middleware/auth.js';
import upload from '../middleware/upload.js';

const router = express.Router();
router.get('/me', auth, getProfile);
router.put('/me', auth, updateProfile);
router.post('/me/upload', auth, upload.single('profilePic'), uploadProfilePic);
export default router;
