import { authenticationService } from '../services/authentication.service';

export function authHeader() {
    // return authorization header with jwt token
    const currentUser = authenticationService.currentUserValue;
    if (currentUser) {
        return {
            "access-token": localStorage.getItem('access-token'),
            "client": localStorage.getItem('client'),
            "uid": localStorage.getItem('uid'),
            "expiry": localStorage.getItem('expiry'),
            "token-type": localStorage.getItem('token-type'),
            "Content-Type": "application/json"
        };
    } else {
        return {};
    }
}