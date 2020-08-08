import React, { useState } from 'react';
import { Button, Card, FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { apiChangePassword } from '../../Api';
import Header from '../../components/layout/Header';

// eslint-disable-next-line react/prop-types
export default function ChangePassword() {
    const [oldPassword, setOldPassword] = useState('');
    const [password, setPassword] = useState('');
    const [response, setResponse] = useState('');

    const id = useSelector((state) => {
        return state.authenticationReducer.id
    });


    const sendChangePassword = () => {
        apiChangePassword(oldPassword, password, id).then((resp) => {
            setResponse(resp.data.data);
        }).catch((error) => {
            setResponse('old password and new password doesn\'t match!');
        })
    }

    return (
        <div>
            <Header />
            <Card style={{ width: '50%', padding: '10%', margin: 'auto', marginTop: '2%' }}>
                <div className="ChangePassword">
                    <FormGroup controlId="oldPassword">
                        <FormLabel>Old Password</FormLabel>
                        <FormControl
                            autoFocus
                            type="password"
                            value={oldPassword}
                            onChange={(e) => setOldPassword(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup controlId="password">
                        <FormLabel>New Password</FormLabel>
                        <FormControl
                            autoFocus
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </FormGroup>
                    <Button onClick={sendChangePassword}>Change password</Button>
                </div>
                <div>
                    {response}
                </div>
            </Card>
        </div>

    );
}
