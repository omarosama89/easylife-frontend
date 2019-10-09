import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { authenticationService } from '../services/authentication.service';

class LogoutPage extends React.Component {
    constructor(props) {
        super(props);

        // redirect to home if already logged in
        if (!authenticationService.currentUserValue) {
            this.props.history.push('/login');
        } else {
            authenticationService.logout().then(() => { this.props.history.push('/login'); })
        }
    }

    render() {
        return (
            <></>
        )
    }
}

export default LogoutPage; 