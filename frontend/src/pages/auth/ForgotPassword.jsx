import React, { useState } from 'react';
import { Button, FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import { isEmail } from '../../utilities/isEmail';
import { apiForgotPassword } from '../../Api';

// eslint-disable-next-line react/prop-types
export default function ForgotPassword() {
    const [email, setEmail] = useState({ value: '', isValid: true });
    const [response, setResponse] = useState('');

    const emailOnChange = (input) => {
        if (isEmail(input)) {
            setEmail({ value: input, isValid: true })
        } else {
            setEmail({ value: input, isValid: false })
        }
    }

    const sendEmail = () => {
        if (isEmail(email.value)) {
            apiForgotPassword(email.value).then((resp) => {
                console.log(resp);
                setResponse(resp.data.message);
            }).catch(error => {
                setResponse('No such email!');
            })
        }
    }

    return (
        <div>
            <div className="ForgotPassword">
                {!email.isValid ? 'Invalid email!' : ''}
                <FormGroup controlId="email">
                    <FormLabel>Email</FormLabel>
                    <FormControl
                        autoFocus
                        type="email"
                        value={email.value}
                        onChange={(e) => emailOnChange(e.target.value)}
                    />
                </FormGroup>
                <Button onClick={sendEmail}>Send Reset Password Email!</Button>
            </div>
            <div>
                {response}
            </div>
        </div>

    );
}
