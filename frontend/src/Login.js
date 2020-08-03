import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //validate by fetching the account data and checking if the username and password are legit
    function authenticate() {
        //redirect if account is valid
        return true;
    }

    return (
        <div className="Login">

            <FormGroup controlId="email">
                <FormLabel>Email</FormLabel>
                <FormControl
                    autoFocus
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </FormGroup>

            <FormGroup controlId="password">
                <FormLabel>Password</FormLabel>
                <FormControl
                    value={password}
                    type="password"
                    onChange={e => setPassword(e.target.value)}
                />
            </FormGroup>

            <Button onClick={authenticate()} type="Submit">Login</Button>

        </div>
    )
}

