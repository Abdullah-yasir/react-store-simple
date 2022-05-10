function fillOrKill(env) {
    if (!process.env[env]) {
        throw new Error(`Environment variable ${env} is not defined`);
    }
    return process.env[env]
}

const baseUrl = fillOrKill('REACT_APP_BASE_URI');

const apiUrls = {
    baseUrl,
    login: '/auth/login',
    register: '/auth/register',
    search: '/product/search',
    // categories: '/product/types',
    categories: '/products/categories',
    products: '/products'
}

// prepend base url to all api urls
Object.keys(apiUrls).forEach(key => {
    apiUrls[key] = `${baseUrl}${apiUrls[key]}`
})

export const api = apiUrls 