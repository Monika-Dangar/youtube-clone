import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signinUser } from '../../services/auth.service';
import { useAuth } from '../../context/AuthContext';

const SignInModal = ({ isOpen, onClose }) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        usernameOrEmail: '',
        password: '',
    });
    const [error, setError] = useState(null);


    // Inside component
    const { login } = useAuth();

    if (!isOpen) return null;
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        try {
            const result = await signinUser(formData);
            // console.log(result); // you can show toast, redirect, or close modal here
            login(result.user); // <-- set in context
            onClose();
        } catch (err) {
            setError(err.message);
        }
    };

    const switchToSignUp = () => {
        navigate('/signup');
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Sign in</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 text-2xl"
                    >
                        &times;
                    </button>
                </div>

                <p className="mb-4">Sign in to access all features of YouTube</p>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-gray-700 mb-1">Email/Username</label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email/username"
                            name='usernameOrEmail'
                            value={formData.usernameOrEmail}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your password"
                            name='password'
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                        Sign In
                    </button>
                </form>

                <div className="mt-4 text-center">
                    <span className="text-gray-600">Don't have an account?</span>
                    <button onClick={switchToSignUp} className="ml-2 text-blue-600 hover:underline">Sign up</button>
                    {error && <p className="text-red-600 text-sm">{error}</p>}
                </div>
            </div>
        </div>
    );
};

export default SignInModal;
