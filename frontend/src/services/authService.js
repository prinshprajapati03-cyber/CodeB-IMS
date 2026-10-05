const API_URL = 'http://localhost:8080/api/users';

export const login = async (email, password, rememberMe = false) => {
    const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password,
        }),
    });

    const data = await response.text();

    if (!response.ok) {
        return {
            success: false,
            message: data || 'Invalid email or password.',
        };
    }

    const user = JSON.parse(data);

    localStorage.setItem('mockAuth', 'true');

    if (rememberMe) {
        localStorage.setItem('user', JSON.stringify(user));
        sessionStorage.removeItem('user');
    } else {
        sessionStorage.setItem('user', JSON.stringify(user));
        localStorage.removeItem('user');
    }

    return {
        success: true,
        user,
    };
};

export const logout = () => {
    localStorage.removeItem('mockAuth');
    localStorage.removeItem('user');
    sessionStorage.removeItem('user');
};

export const isAuthenticated = () => {
    return localStorage.getItem('mockAuth') === 'true';
};

export const getCurrentUser = () => {
    const localUser = localStorage.getItem('user');
    const sessionUser = sessionStorage.getItem('user');

    if (localUser) return JSON.parse(localUser);
    if (sessionUser) return JSON.parse(sessionUser);

    return null;
};