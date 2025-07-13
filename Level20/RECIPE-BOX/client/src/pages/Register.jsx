import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
   e.preventDefault()
    try {
      await register(username, email, password);
      navigate('/');
    } catch (error) {
      console.error("Register Error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700">
      <div className="w-full max-w-md bg-purple-800 rounded-xl shadow-lg p-8">
        <div className="text-3xl font-bold mb-6 text-center text-purple-100 tracking-wide">
          Register
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="block text-purple-200 mb-1 font-medium">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full p-3 rounded-lg bg-purple-900 text-purple-100 border border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-purple-400"
              placeholder="Enter your username"
            />
          </div>

          <div className="mb-5">
            <label className="block text-purple-200 mb-1 font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 rounded-lg bg-purple-900 text-purple-100 border border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-purple-400"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-8 relative">
            <label className="block text-purple-200 mb-1 font-medium">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 rounded-lg bg-purple-900 text-purple-100 border border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-purple-400 pr-12"
              placeholder="Enter your password"
            />
            <span
              className="absolute right-4 top-10 transform -translate-y-1/2 text-purple-400 hover:text-purple-200 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
              tabIndex={0}
              aria-label="Toggle password visibility"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-700 to-purple-900 text-purple-100 font-semibold px-8 py-3 rounded-lg shadow-md hover:from-purple-800 hover:to-purple-950 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;