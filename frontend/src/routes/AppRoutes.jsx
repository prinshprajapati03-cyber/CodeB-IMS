import { Routes, Route, Navigate } from 'react-router-dom';

import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import VerifyEmail from '../pages/auth/VerifyEmail';
import ForgotPassword from '../pages/auth/ForgotPassword';
import ResetPassword from '../pages/auth/ResetPassword';
import ProtectedRoute from '../components/ProtectedRoute';
import MainLayout from '../layouts/MainLayout';
import Dashboard from '../pages/dashboard/Dashboard';
function AppRoutes() {
    return (
        <Routes>

            {/* Default */}
            <Route
                path="/"
                element={<Navigate to="/login" replace />}
            />

            {/* Authentication */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/verify-email" element={<VerifyEmail />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />

            {/* Protected Dashboard */}
            <Route
                path="/dashboard"
                element={
                    <ProtectedRoute>
                        <MainLayout>
                            <Dashboard />
                        </MainLayout>
                    </ProtectedRoute>
                }
            />

            {/* Protected Profile */}
            <Route
                path="/profile"
                element={
                    <ProtectedRoute>
                        <MainLayout>
                            <h1 className="h3 fw-bold mb-4">
                                Profile
                            </h1>
                        </MainLayout>
                    </ProtectedRoute>
                }
            />

            {/* 404 */}
            <Route
                path="*"
                element={<h1>404 - Page Not Found</h1>}
            />

        </Routes>
    );
}

export default AppRoutes;