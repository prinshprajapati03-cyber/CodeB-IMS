function Dashboard() {
    const stats = [
        {
            title: 'Total Clients',
            value: 120,
            icon: 'bi-people',
        },
        {
            title: 'Total Estimates',
            value: 45,
            icon: 'bi-file-earmark-text',
        },
        {
            title: 'Total Invoices',
            value: 78,
            icon: 'bi-receipt',
        },
        {
            title: 'Pending Payments',
            value: 12,
            icon: 'bi-credit-card',
        },
    ];

    const activities = [
        {
            title: 'New client added',
            description: 'A new client was added to the system.',
            time: '10 minutes ago',
        },
        {
            title: 'Invoice created',
            description: 'A new invoice was created.',
            time: '30 minutes ago',
        },
        {
            title: 'Payment received',
            description: 'A payment was recorded successfully.',
            time: '1 hour ago',
        },
        {
            title: 'Estimate created',
            description: 'A new estimate was created.',
            time: '2 hours ago',
        },
    ];

    return (
        <div>

            {/* Page Header */}
            <div className="mb-4">
                <h1 className="h3 fw-bold mb-1">
                    Welcome to Code-B IMS
                </h1>

                <p className="text-secondary mb-0">
                    Here's an overview of your system.
                </p>
            </div>

            {/* Statistics */}
            <div className="row g-4 mb-4">
                {stats.map((stat) => (
                    <div
                        className="col-12 col-sm-6 col-xl-3"
                        key={stat.title}
                    >
                        <div className="card border-0 shadow-sm h-100">
                            <div className="card-body p-4">

                                <div className="d-flex justify-content-between align-items-start">

                                    <div>
                                        <p className="text-secondary mb-2">
                                            {stat.title}
                                        </p>

                                        <h2 className="fw-bold mb-0">
                                            {stat.value}
                                        </h2>
                                    </div>

                                    <div className="bg-primary bg-opacity-10 text-primary rounded-3 p-3">
                                        <i className={`bi ${stat.icon} fs-4`}></i>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Recent Activities */}
            <div className="card border-0 shadow-sm">
                <div className="card-body p-4">

                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h2 className="h5 fw-semibold mb-0">
                            Recent Activities
                        </h2>

                        <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                        >
                            View All
                        </button>
                    </div>

                    <div className="list-group list-group-flush">

                        {activities.map((activity, index) => (
                            <div
                                className={`list-group-item px-0 py-3 ${
                                    index === activities.length - 1
                                        ? 'border-bottom-0'
                                        : ''
                                }`}
                                key={activity.title}
                            >
                                <div className="d-flex justify-content-between gap-3">

                                    <div className="d-flex gap-3">

                                        <div className="bg-light rounded-circle p-2">
                                            <i className="bi bi-activity"></i>
                                        </div>

                                        <div>
                                            <h3 className="h6 mb-1">
                                                {activity.title}
                                            </h3>

                                            <p className="text-secondary small mb-0">
                                                {activity.description}
                                            </p>
                                        </div>

                                    </div>

                                    <small className="text-secondary text-nowrap">
                                        {activity.time}
                                    </small>

                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>

        </div>
    );
}

export default Dashboard;