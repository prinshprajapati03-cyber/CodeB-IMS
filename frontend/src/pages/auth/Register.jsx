import { useState } from 'react';
import { registerUser } from '../../services/userService';
function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: 'SALESPERSON',
        terms: false,
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;

        setFormData((previous) => ({
            ...previous,
            [name]: type === 'checkbox' ? checked : value,
        }));

        setErrors((previous) => ({
            ...previous,
            [name]: '',
        }));

        setSuccessMessage('');
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Full Name is required.';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address.';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required.';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters.';
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'Please confirm your password.';
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match.';
        }

        if (!formData.role) {
            newErrors.role = 'Please select a role.';
        }

        if (!formData.terms) {
            newErrors.terms = 'You must accept the Terms and Conditions.';
        }

        return newErrors;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const validationErrors = validateForm();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            await registerUser({
                fullName: formData.fullName,
                email: formData.email,
                password: formData.password,
                role: formData.role,
            });

            setSuccessMessage(
                'Registration successful. Please verify your email.'
            );

            setErrors({});
        } catch (error) {
            setErrors({
                general: error.message,
            });
        }
    };

    return (
        <div className="min-vh-100 bg-light d-flex align-items-center justify-content-center py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
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

                                    <h1 className="h3 fw-bold mb-1">Code-B IMS</h1>

                                    <p className="text-secondary mb-0">
                                        Internal Management System
                                    </p>
                                </div>

                                {/* Heading */}
                                <div className="mb-4">
                                    <h2 className="h5 fw-semibold mb-1">
                                        Create an account
                                    </h2>

                                    <p className="text-secondary small mb-0">
                                        Register a new user account.
                                    </p>
                                </div>

                                {/* Success Message */}
                                {successMessage && (
                                    <div
                                        className="alert alert-success d-flex align-items-start"
                                        role="alert"
                                    >
                                        <i className="bi bi-check-circle me-2 mt-1"></i>
                                        <span>{successMessage}</span>
                                    </div>
                                )}

                                {errors.general && (
                                    <div className="alert alert-danger" role="alert">
                                        {errors.general}
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} noValidate>

                                    {/* Full Name */}
                                    <div className="mb-3">
                                        <label
                                            htmlFor="fullName"
                                            className="form-label fw-medium"
                                        >
                                            Full Name <span className="text-danger">*</span>
                                        </label>

                                        <div className="input-group">
                      <span className="input-group-text bg-white">
                        <i className="bi bi-person"></i>
                      </span>

                                            <input
                                                type="text"
                                                id="fullName"
                                                name="fullName"
                                                className={`form-control ${
                                                    errors.fullName ? 'is-invalid' : ''
                                                }`}
                                                placeholder="Enter your full name"
                                                value={formData.fullName}
                                                onChange={handleChange}
                                                autoComplete="name"
                                            />

                                            {errors.fullName && (
                                                <div className="invalid-feedback">
                                                    {errors.fullName}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="mb-3">
                                        <label
                                            htmlFor="email"
                                            className="form-label fw-medium"
                                        >
                                            Email Address <span className="text-danger">*</span>
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
                                                    errors.email ? 'is-invalid' : ''
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
                                            Password <span className="text-danger">*</span>
                                        </label>

                                        <div className="input-group">
                      <span className="input-group-text bg-white">
                        <i className="bi bi-lock"></i>
                      </span>

                                            <input
                                                type={showPassword ? 'text' : 'password'}
                                                id="password"
                                                name="password"
                                                className={`form-control ${
                                                    errors.password ? 'is-invalid' : ''
                                                }`}
                                                placeholder="Create a password"
                                                value={formData.password}
                                                onChange={handleChange}
                                                autoComplete="new-password"
                                            />

                                            <button
                                                type="button"
                                                className="btn btn-outline-secondary"
                                                onClick={() =>
                                                    setShowPassword((previous) => !previous)
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

                                    {/* Confirm Password */}
                                    <div className="mb-3">
                                        <label
                                            htmlFor="confirmPassword"
                                            className="form-label fw-medium"
                                        >
                                            Confirm Password{' '}
                                            <span className="text-danger">*</span>
                                        </label>

                                        <div className="input-group">
                      <span className="input-group-text bg-white">
                        <i className="bi bi-shield-lock"></i>
                      </span>

                                            <input
                                                type={
                                                    showConfirmPassword ? 'text' : 'password'
                                                }
                                                id="confirmPassword"
                                                name="confirmPassword"
                                                className={`form-control ${
                                                    errors.confirmPassword ? 'is-invalid' : ''
                                                }`}
                                                placeholder="Confirm your password"
                                                value={formData.confirmPassword}
                                                onChange={handleChange}
                                                autoComplete="new-password"
                                            />

                                            <button
                                                type="button"
                                                className="btn btn-outline-secondary"
                                                onClick={() =>
                                                    setShowConfirmPassword(
                                                        (previous) => !previous
                                                    )
                                                }
                                                aria-label={
                                                    showConfirmPassword
                                                        ? 'Hide password'
                                                        : 'Show password'
                                                }
                                            >
                                                <i
                                                    className={`bi ${
                                                        showConfirmPassword
                                                            ? 'bi-eye-slash'
                                                            : 'bi-eye'
                                                    }`}
                                                ></i>
                                            </button>

                                            {errors.confirmPassword && (
                                                <div className="invalid-feedback">
                                                    {errors.confirmPassword}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Role */}
                                    <div className="mb-3">
                                        <label
                                            htmlFor="role"
                                            className="form-label fw-medium"
                                        >
                                            Role <span className="text-danger">*</span>
                                        </label>

                                        <div className="input-group">
                      <span className="input-group-text bg-white">
                        <i className="bi bi-person-badge"></i>
                      </span>

                                            <select
                                                id="role"
                                                name="role"
                                                className={`form-select ${
                                                    errors.role ? 'is-invalid' : ''
                                                }`}
                                                value={formData.role}
                                                onChange={handleChange}
                                            >
                                                <option value="SALESPERSON">
                                                    Salesperson
                                                </option>
                                                <option value="ADMIN">
                                                    Admin
                                                </option>
                                            </select>

                                            {errors.role && (
                                                <div className="invalid-feedback">
                                                    {errors.role}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Terms */}
                                    <div className="mb-4">
                                        <div className="form-check">
                                            <input
                                                type="checkbox"
                                                id="terms"
                                                name="terms"
                                                className={`form-check-input ${
                                                    errors.terms ? 'is-invalid' : ''
                                                }`}
                                                checked={formData.terms}
                                                onChange={handleChange}
                                            />

                                            <label
                                                htmlFor="terms"
                                                className="form-check-label small"
                                            >
                                                I agree to the Terms and Conditions.
                                            </label>

                                            {errors.terms && (
                                                <div className="invalid-feedback">
                                                    {errors.terms}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Register Button */}
                                    <button
                                        type="submit"
                                        className="btn btn-primary w-100 py-2 fw-semibold"
                                    >
                                        <i className="bi bi-person-plus me-2"></i>
                                        Register
                                    </button>
                                </form>

                                {/* Login Link */}
                                <div className="text-center mt-4">
                  <span className="text-secondary small">
                    Already have an account?{' '}
                  </span>

                                    <a
                                        href="/login"
                                        className="text-decoration-none small fw-semibold"
                                    >
                                        Login
                                    </a>
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

export default Register;