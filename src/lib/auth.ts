const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

export async function login(email: string, password: string) {
    const response = await fetch(`${API_URL}/login`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({ email, password }),
    });
    const data = await response.json();

    if (!response.ok) {
        throw data;
    }

    return data
}