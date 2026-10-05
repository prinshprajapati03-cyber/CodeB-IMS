const API_URL = 'http://localhost:8080/api/users';

export const registerUser = async (userData) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });

    const data = await response.text();

    if (!response.ok) {
        throw new Error(data || 'Registration failed.');
    }

    return data;
};