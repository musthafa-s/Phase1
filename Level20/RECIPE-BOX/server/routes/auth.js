import express from 'express'
import User from '../models/User.js'
import jwt from 'jsonwebtoken'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

// Register for a user
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body

    try {
        if (!username || !email || !password) {
            return res.status(400).json({ success: false, message: "Fill all the details" })
        }

        const userExists = await User.findOne({ email })
        if (userExists) {
            return res.status(400).json({ success: false, message: "User Already Exists" })
        }

        const user = await User.create({ username, email, password })
        const token = generateToken(user._id)

        res.status(201).json({
            _id: user._id,
            username: user.username,
            email: user.email,
            token,
        })
    } catch (error) {
        console.log("Error in Create user:", error.message)
        res.status(500).json({ success: false, message: "Server Error" })
    }
})

// Login for a user
router.post('/login', async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.findOne({ email })
        if (!user || !(await user.matchPassword(password))) {
            return res.status(401).json({ success: false, message: "Invalid Credentials" })
        }
        const token = generateToken(user._id)
        res.json({
            _id: user._id,
            username: user.username,
            email: user.email,
            token,
        })
    } catch (error) {
        console.log("Error in Login user:", error.message)
        res.status(500).json({ success: false, message: "Server Error" })
    }
})

router.get('/me', protect, async (req, res) => {
    res.status(200).json(req.user)
})

// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" })
}

export default router