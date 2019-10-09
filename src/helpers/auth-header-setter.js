import { authenticationService } from '../services/authentication.service';

export function authHeaderSetter(headers) {
    // return authorization header with jwt token
    localStorage.setItem('access-token', headers.get('access-token'));
    localStorage.setItem('client', headers.get('client'));
    localStorage.setItem('uid', headers.get('uid'));
    localStorage.setItem('expiry', headers.get('expiry'));
    localStorage.setItem('token-type', headers.get('token-type'));
    const currentUser = authenticationService.currentUserValue;
    if (currentUser && currentUser.token) {
        return { Authorization: `Bearer ${currentUser.token}` };
    } else {
        return {};
    }
}