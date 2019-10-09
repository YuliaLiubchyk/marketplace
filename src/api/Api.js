import axios from 'axios';

const urls = {
    login: '/api/auth/login',
    regiter: '/api/auth/register',
    getViewer: '/api/account/user'
};

export const Auth = {

    _token: null,

    init() {
        try {
            const token = JSON.parse(window.localStorage.getItem('token'));
            this._token = token;
            this._storeInAxios(token);
        } catch (err) {
            console.error(err);
        }
    },

    login(body) {
        return axios.post(urls.login, body);
    },

    register(body) {
        return axios.post(urls.regiter, body);
    },

    logout() {
        this._token = null;
        this._storeInAxios(null);
        try {
            window.localStorage.removeItem('token');
        } catch (err) {
            console.error(err);
        }
    },

    setToken(token) {
        this._token = token;
        this._storeToken();
        this._storeInAxios(token);
    },

    _storeToken() {
        try {
            window.localStorage.setItem('token', JSON.stringify(this._token));
        } catch (err) {
            console.error(err);
        }
    },

    _storeInAxios(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },

    get isLoggedIn() {
        return this._token != null;
    }
}

export const Viewer = {
    get() {
        return axios.get(urls.getViewer);
    }
}

export const init = () => {
    Auth.init();
}