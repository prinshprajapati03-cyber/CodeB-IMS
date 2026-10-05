import { NavLink } from 'react-router-dom';

function Sidebar() {
    const menuItemClass = ({ isActive }) =>
        `nav-link d-flex align-items-center gap-2 px-3 py-2 rounded ${
            isActive ? 'active bg-primary text-white' : 'text-dark'
        }`;

    return (
        <aside
            className="bg-white border-end d-flex flex-column"
            style={{ width: '250px', minHeight: '100vh' }}
        >
            {/* Brand */}
            <div className="p-3 border-bottom">
                <h4 className="fw-bold mb-0">Code-B IMS</h4>
                <small className="text-secondary">
                    Internal Management System
                </small>
            </div>

            {/* Navigation */}
            <nav className="p-3 flex-grow-1">

                <NavLink to="/dashboard" className={menuItemClass}>
                    <i className="bi bi-speedometer2"></i>
                    Dashboard
                </NavLink>

                {/* Master Data */}
                <div className="mt-4 mb-2 px-3">
                    <small className="text-uppercase text-secondary fw-semibold">
                        Master Data
                    </small>
                </div>

                <NavLink to="/clients" className={menuItemClass}>
                    <i className="bi bi-people"></i>
                    Clients
                </NavLink>

                <NavLink to="/groups" className={menuItemClass}>
                    <i className="bi bi-collection"></i>
                    Groups
                </NavLink>

                <NavLink to="/chains" className={menuItemClass}>
                    <i className="bi bi-diagram-3"></i>
                    Chains
                </NavLink>

                <NavLink to="/brands" className={menuItemClass}>
                    <i className="bi bi-tags"></i>
                    Brands
                </NavLink>

                <NavLink to="/subzones" className={menuItemClass}>
                    <i className="bi bi-geo-alt"></i>
                    Subzones
                </NavLink>

                {/* Sales & Billing */}
                <div className="mt-4 mb-2 px-3">
                    <small className="text-uppercase text-secondary fw-semibold">
                        Sales & Billing
                    </small>
                </div>

                <NavLink to="/estimates" className={menuItemClass}>
                    <i className="bi bi-file-earmark-text"></i>
                    Estimates
                </NavLink>

                <NavLink to="/invoices" className={menuItemClass}>
                    <i className="bi bi-receipt"></i>
                    Invoices
                </NavLink>

                <NavLink to="/payments" className={menuItemClass}>
                    <i className="bi bi-credit-card"></i>
                    Payments
                </NavLink>

                {/* Reports */}
                <div className="mt-4 mb-2 px-3">
                    <small className="text-uppercase text-secondary fw-semibold">
                        Reports
                    </small>
                </div>

                <NavLink to="/reports" className={menuItemClass}>
                    <i className="bi bi-bar-chart"></i>
                    MIS Reports
                </NavLink>

                {/* Administration */}
                <div className="mt-4 mb-2 px-3">
                    <small className="text-uppercase text-secondary fw-semibold">
                        Administration
                    </small>
                </div>

                <NavLink to="/users" className={menuItemClass}>
                    <i className="bi bi-person-gear"></i>
                    User Management
                </NavLink>

                <NavLink to="/profile" className={menuItemClass}>
                    <i className="bi bi-person-circle"></i>
                    Profile
                </NavLink>
            </nav>

            {/* Footer */}
            <div className="p-3 border-top">
                <small className="text-secondary">
                    © 2026 Code-B IMS
                </small>
            </div>
        </aside>
    );
}

export default Sidebar;