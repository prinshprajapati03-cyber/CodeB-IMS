import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../services/authService';

function Login() {
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false,
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;

        setFormData((previous) => ({
            ...previous,
            [name]: type === 'checkbox' ? checked : value,
        }));

        setErrors((previous) => ({
            ...previous,
            [name]: '',
            general: '',
        }));
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address.';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required.';
        }

        return newErrors;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const newErrors = validateForm();

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            return;
        }

        try {
            const result = await login(
                formData.email,
                formData.password,
                formData.rememberMe
            );

            if (result.success) {
                navigate('/dashboard');
            } else {
                setErrors({
                    general: result.message,
                });
            }
        } catch (error) {
            setErrors({
                general: 'Unable to connect to the server. Please try again.',
            });
        }
    };

    return (
        <div className="min-vh-100 bg-light d-flex align-items-center justify-content-center py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-10 col-md-7 col-lg-5 col-xl-4">
                        <div className="card border-0 shadow-sm">
                            <div className="card-body p-4 p-md-5">

                                {/* Brand */}
                                <div className="text-center mb-4">
                                    <div
                                        className="bg-primary text-white rounded-3 d-inline-flex align-items-center justify-content-center mb-3"
                                        style={{ width: '52px', height: '52px' }}
                                    >
                                        <i className="bi bi-building fs-4"></i>
                                    </div>

                                    <h1 className="h3 fw-bold mb-1">
                                        Code-B IMS
                                    </h1>

                                    <p className="text-secondary mb-0">
                                        Internal Management System
                                    </p>
                                </div>

                                {/* Login heading */}
                                <div className="mb-4">
                                    <h2 className="h5 fw-semibold mb-1">
                                        Welcome back
                                    </h2>

                                    <p className="text-secondary small mb-0">
                                        Sign in to access your account.
                                    </p>
                                </div>

                                {/* General error */}
                                {errors.general && (
                                    <div
                                        className="alert alert-danger"
                                        role="alert"
                                    >
                                        {errors.general}
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} noValidate>

                                    {/* Email */}
                                    <div className="mb-3">
                                        <label
                                            htmlFor="email"
                                            className="form-label fw-medium"
                                        >
                                            Email Address{' '}
                                            <span className="text-danger">*</span>
                                        </label>

                                        <div className="input-group">
                                            <span className="input-group-text bg-white">
                                                <i className="bi bi-envelope"></i>
                                            </span>

                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                className={`form-control ${
                                                    errors.email
                                                        ? 'is-invalid'
                                                        : ''
                                                }`}
                                                placeholder="Enter your email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                autoComplete="email"
                                            />

                                            {errors.email && (
                                                <div className="invalid-feedback">
                                                    {errors.email}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Password */}
                                    <div className="mb-3">
                                        <label
                                            htmlFor="password"
                                            className="form-label fw-medium"
                                        >
                                            Password{' '}
                                            <span className="text-danger">*</span>
                                        </label>

                                        <div className="input-group">
                                            <span className="input-group-text bg-white">
                                                <i className="bi bi-lock"></i>
                                            </span>

                                            <input
                                                type={
                                                    showPassword
                                                        ? 'text'
                                                        : 'password'
                                                }
                                                id="password"
                                                name="password"
                                                className={`form-control ${
                                                    errors.password
                                                        ? 'is-invalid'
                                                        : ''
                                                }`}
                                                placeholder="Enter your password"
                                                value={formData.password}
                                                onChange={handleChange}
                                                autoComplete="current-password"
                                            />

                                            <button
                                                type="button"
                                                className="btn btn-outline-secondary"
                                                onClick={() =>
                                                    setShowPassword(
                                                        !showPassword
                                                    )
                                                }
                                                aria-label={
                                                    showPassword
                                                        ? 'Hide password'
                                                        : 'Show password'
                                                }
                                            >
                                                <i
                                                    className={`bi ${
                                                        showPassword
                                                            ? 'bi-eye-slash'
                                                            : 'bi-eye'
                                                    }`}
                                                ></i>
                                            </button>

                                            {errors.password && (
                                                <div className="invalid-feedback">
                                                    {errors.password}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Remember Me + Forgot Password */}
                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                        <div className="form-check">
                                            <input
                                                type="checkbox"
                                                id="rememberMe"
                                                name="rememberMe"
                                                className="form-check-input"
                                                checked={formData.rememberMe}
                                                onChange={handleChange}
                                            />

                                            <label
                                                htmlFor="rememberMe"
                                                className="form-check-label small"
                                            >
                                                Remember me
                                            </label>
                                        </div>

                                        <Link
                                            to="/forgot-password"
                                            className="text-decoration-none small"
                                        >
                                            Forgot Password?
                                        </Link>
                                    </div>

                                    {/* Login button */}
                                    <button
                                        type="submit"
                                        className="btn btn-primary w-100 py-2 fw-semibold"
                                    >
                                        <i className="bi bi-box-arrow-in-right me-2"></i>
                                        Login
                                    </button>
                                </form>

                                {/* Register */}
                                <div className="text-center mt-4">
                                    <span className="text-secondary small">
                                        Don't have an account?{' '}
                                    </span>

                                    <Link
                                        to="/register"
                                        className="text-decoration-none small fw-semibold"
                                    >
                                        Create an account
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <p className="text-center text-secondary small mt-3 mb-0">
                            © 2026 Code-B IMS
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;