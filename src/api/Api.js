
export const Auth = {

    _token: null,

    init() {
        try {
            const token = window.localStorage.getItem('token');
            this._token = token;
        } catch (err) {
            console.error(err);
        }
    },

    login() {
        this._token = 'token';
        this._storeToken();
    },

    logout() {
        this._token = null;
        try {
            window.localStorage.removeItem('token');
        } catch (err) {
            console.error(err);
        }

    },

    _storeToken() {
        try {
            window.localStorage.setItem('token', JSON.stringify(this._token));
        } catch (err) {
            console.error(err);
        }
    },

    get isLoggedIn() {
        return false;
        // return this._token == null;
    }
}

export function init() {
    Auth.init();
}