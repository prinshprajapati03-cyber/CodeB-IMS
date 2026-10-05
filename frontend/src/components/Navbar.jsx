import { useNavigate } from 'react-router-dom';
import { getCurrentUser, logout } from '../services/authService';

function Navbar() {
    const navigate = useNavigate();
    const user = getCurrentUser();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <nav className="navbar bg-white border-bottom px-4 py-3">
            <div className="container-fluid p-0">

                <div>
                    <h5 className="mb-0 fw-semibold">Dashboard</h5>
                </div>

                <div className="d-flex align-items-center gap-3">

                    {/* Notifications */}
                    <button
                        type="button"
                        className="btn btn-light position-relative"
                        aria-label="Notifications"
                    >
                        <i className="bi bi-bell"></i>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            3
                        </span>
                    </button>

                    {/* Profile */}
                    <div className="dropdown">
                        <button
                            className="btn btn-light d-flex align-items-center gap-2"
                            type="button"
                            data-bs-toggle="dropdown"
                        >
                            <i className="bi bi-person-circle fs-5"></i>

                            <span className="d-none d-md-inline">
                                {user?.fullName || 'Demo User'}
                            </span>

                            <i className="bi bi-chevron-down small"></i>
                        </button>

                        <ul className="dropdown-menu dropdown-menu-end">

                            <li>
                                <button
                                    className="dropdown-item"
                                    onClick={() => navigate('/profile')}
                                >
                                    <i className="bi bi-person me-2"></i>
                                    My Profile
                                </button>
                            </li>

                            <li>
                                <hr className="dropdown-divider" />
                            </li>

                            <li>
                                <button
                                    className="dropdown-item text-danger"
                                    onClick={handleLogout}
                                >
                                    <i className="bi bi-box-arrow-right me-2"></i>
                                    Logout
                                </button>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;