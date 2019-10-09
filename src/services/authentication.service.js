import { BehaviorSubject } from 'rxjs';
import { authHeader } from '../helpers/auth-header';
import * as config from '../config';
import { handleResponse } from '../helpers/handle-response';


export const authenticationService = {
    login,
    logout,
    get currentUserValue() { return localStorage.getItem('currentUser') }
};

function login(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    };

    return fetch(`${config.default['HOST']}/auth/sign_in`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user.data));
            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };
    return fetch(`${config.default['HOST']}/auth/sign_out`, requestOptions)
        .then(res => {
            localStorage.removeItem('currentUser');
            localStorage.removeItem('access-token');
            localStorage.removeItem('client');
            localStorage.removeItem('uid');
            localStorage.removeItem('expiry');
            localStorage.removeItem('token-type');
        });


}
