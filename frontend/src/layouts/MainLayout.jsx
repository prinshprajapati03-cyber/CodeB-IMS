import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

function MainLayout({ children }) {
    return (
        <div className="d-flex bg-light min-vh-100">

            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-grow-1">

                <Navbar />

                <main className="p-4">
                    {children}
                </main>

            </div>
        </div>
    );
}

export default MainLayout;