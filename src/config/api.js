const baseUrl = process.env.REACT_APP_BASE_URL || 'http://localhost:8000'

export const api = {
    baseUrl,
    login: `${baseUrl}/auth/login`,
    register: `${baseUrl}/auth/register`,
    search: `${baseUrl}/product/search`,
    categories: `${baseUrl}/product/types`,
}