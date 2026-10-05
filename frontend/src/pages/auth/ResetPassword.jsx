import { useState } from 'react';
import { Link } from 'react-router-dom';

function ResetPassword() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [formData, setFormData] = useState({
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));

        setErrors((previous) => ({
            ...previous,
            [name]: '',
        }));

        setSuccessMessage('');
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.password) {
            newErrors.password = 'New password is required.';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters.';
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'Please confirm your password.';
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match.';
        }

        return newErrors;
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const validationErrors = validateForm();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        // Mock password reset for Part 1.
        setSuccessMessage(
            'Password reset successful. You can now login with your new password.'
        );

        setFormData({
            password: '',
            confirmPassword: '',
        });
    };

    return (
        <div className="min-vh-100 bg-light d-flex align-items-center justify-content-center py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-10 col-md-7 col-lg-5 col-xl-4">
                        <div className="card border-0 shadow-sm">
                            <div className="card-body p-4 p-md-5">

                                {/* Header */}
                                <div className="text-center mb-4">
                                    <div
                                        className="bg-primary text-white rounded-3 d-inline-flex align-items-center justify-content-center mb-3"
                                        style={{ width: '52px', height: '52px' }}
                                    >
                                        <i className="bi bi-shield-lock fs-4"></i>
                                    </div>

                                    <h1 className="h3 fw-bold mb-1">
                                        Reset Password
                                    </h1>

                                    <p className="text-secondary mb-0">
                                        Create a new password for your account.
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

                                <form onSubmit={handleSubmit} noValidate>

                                    {/* New Password */}
                                    <div className="mb-3">
                                        <label
                                            htmlFor="password"
                                            className="form-label fw-medium"
                                        >
                                            New Password <span className="text-danger">*</span>
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
                                                placeholder="Enter new password"
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
                                                    showPassword ? 'Hide password' : 'Show password'
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
                                    <div className="mb-4">
                                        <label
                                            htmlFor="confirmPassword"
                                            className="form-label fw-medium"
                                        >
                                            Confirm New Password{' '}
                                            <span className="text-danger">*</span>
                                        </label>

                                        <div className="input-group">
                      <span className="input-group-text bg-white">
                        <i className="bi bi-shield-lock"></i>
                      </span>

                                            <input
                                                type={showConfirmPassword ? 'text' : 'password'}
                                                id="confirmPassword"
                                                name="confirmPassword"
                                                className={`form-control ${
                                                    errors.confirmPassword ? 'is-invalid' : ''
                                                }`}
                                                placeholder="Confirm new password"
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

                                    {/* Reset Button */}
                                    <button
                                        type="submit"
                                        className="btn btn-primary w-100 py-2 fw-semibold"
                                    >
                                        <i className="bi bi-check2-circle me-2"></i>
                                        Reset Password
                                    </button>
                                </form>

                                {/* Back to Login */}
                                <div className="text-center mt-4">
                                    <Link
                                        to="/login"
                                        className="text-decoration-none small fw-semibold"
                                    >
                                        <i className="bi bi-arrow-left me-1"></i>
                                        Back to Login
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

export default ResetPassword;