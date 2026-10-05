import { useState } from 'react';
import { Link } from 'react-router-dom';

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        setError('');
        setSuccessMessage('');

        if (!email.trim()) {
            setError('Email is required.');
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        // Mock password reset for Part 1.
        setSuccessMessage(
            'If an account exists with this email, a password reset link has been sent.'
        );
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
                                        <i className="bi bi-key fs-4"></i>
                                    </div>

                                    <h1 className="h3 fw-bold mb-1">
                                        Forgot Password?
                                    </h1>

                                    <p className="text-secondary mb-0">
                                        Enter your email address to reset your password.
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

                                {/* Form */}
                                <form onSubmit={handleSubmit} noValidate>
                                    <div className="mb-4">
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
                                                    error ? 'is-invalid' : ''
                                                }`}
                                                placeholder="Enter your email"
                                                value={email}
                                                onChange={(event) => {
                                                    setEmail(event.target.value);
                                                    setError('');
                                                    setSuccessMessage('');
                                                }}
                                                autoComplete="email"
                                            />

                                            {error && (
                                                <div className="invalid-feedback">
                                                    {error}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-primary w-100 py-2 fw-semibold"
                                    >
                                        <i className="bi bi-send me-2"></i>
                                        Send Reset Link
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

export default ForgotPassword;