import { useState } from 'react';
import { Link } from 'react-router-dom';

function VerifyEmail() {
    const [email] = useState('demo@codeb.com');
    const [message, setMessage] = useState('');

    const handleResend = () => {
        setMessage('Verification email has been resent. Please check your inbox.');
    };

    return (
        <div className="min-vh-100 bg-light d-flex align-items-center justify-content-center py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-10 col-md-7 col-lg-5 col-xl-4">
                        <div className="card border-0 shadow-sm">
                            <div className="card-body p-4 p-md-5 text-center">

                                {/* Icon */}
                                <div
                                    className="bg-primary text-white rounded-3 d-inline-flex align-items-center justify-content-center mb-4"
                                    style={{ width: '64px', height: '64px' }}
                                >
                                    <i className="bi bi-envelope-check fs-3"></i>
                                </div>

                                {/* Heading */}
                                <h1 className="h3 fw-bold mb-2">
                                    Verify Your Email
                                </h1>

                                <p className="text-secondary mb-4">
                                    We've sent a verification link to the email address below.
                                </p>

                                {/* Email */}
                                <div className="bg-light border rounded-3 p-3 mb-4">
                                    <i className="bi bi-envelope me-2"></i>
                                    <span className="fw-medium">{email}</span>
                                </div>

                                {/* Success message */}
                                {message && (
                                    <div
                                        className="alert alert-success small text-start"
                                        role="alert"
                                    >
                                        <i className="bi bi-check-circle me-2"></i>
                                        {message}
                                    </div>
                                )}

                                {/* Resend */}
                                <button
                                    type="button"
                                    className="btn btn-primary w-100 py-2 fw-semibold mb-3"
                                    onClick={handleResend}
                                >
                                    <i className="bi bi-send me-2"></i>
                                    Resend Verification Email
                                </button>

                                {/* Back to Login */}
                                <Link
                                    to="/login"
                                    className="btn btn-outline-secondary w-100 py-2"
                                >
                                    <i className="bi bi-arrow-left me-2"></i>
                                    Back to Login
                                </Link>

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

export default VerifyEmail;