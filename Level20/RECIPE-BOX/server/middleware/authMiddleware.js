import User from '../models/User.js';
import jwt from 'jsonwebtoken';

export const protect = async (req, res, next) => {
  let token;

  // ✅ Check if Authorization header exists and starts with "Bearer"
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // ✅ Extract token string: "Bearer <token>"
      token = req.headers.authorization.split(" ")[1];

      // ✅ Decode token using secret
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // ✅ Attach user to request (excluding password)
      req.user = await User.findById(decoded.id).select("-password");

      // ✅ Proceed to next middleware
      return next();
    } catch (error) {
      console.error("Token verification failed:", error.message);
      return res.status(401).json({
        success: false,
        message: "Not authorized, token invalid",
      });
    }
  }

  // ❌ If no token was found or badly formatted
  return res.status(401).json({
    success: false,
    message: "Not authorized, token missing",
  });
};
