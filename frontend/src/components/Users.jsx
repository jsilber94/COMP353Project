import { useState } from 'react';
import { apiGetAllUsers, apiUpdateCategory, apiUpdateUser } from '../Api'

import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux';
import { DropdownButton, Dropdown } from 'react-bootstrap';


function UserTable() {
    const [users, setUsers] = useState([])
    const [isMade, setIsMade] = useState(false)

    const classes = makeStyles({
        table: {
            width: 1000,
        },
    });

    const role = useSelector((state) => {
        return state.authenticationReducer.role
    });

    const retrieveUsers = () => {
        apiGetAllUsers()
            .then((response) => {
                if (response.status === 200) {
                    setUsers(response.data)
                }
            }).catch((error) => {
                console.log(error);
            })
    };


    if (!isMade) {
        retrieveUsers();
        setIsMade(true);
    }



    function UserEntry(props) {
        console.log(props)
        const id = useSelector((state) => {
            return state.authenticationReducer.id
        });

        const updateCategory = () => {
            console.log(props)
            let category = props.category

            if (category == null || category == "null")
                category = 'Basic'
            else category = null

            apiUpdateCategory(props.user_id, category)
                .then((response) => {
                    if (response.status === 200) {
                        setUsers(response.data)
                    }
                }).catch((error) => {
                    console.log(error);
                })
        };

        return (
            <TableBody>
                {
                    props.user_id !== id && (<TableRow key={props.user_id}>
                        <TableCell component="th" scope="props"> {props.user_id}</TableCell>
                        <TableCell align="center">{props.email}</TableCell>
                        <TableCell align="center">{props.category ? props.category : 'N/A'}</TableCell>
                        <TableCell align="center">${props.balance}</TableCell>
                        <TableCell align="center">
                            <Button variant="contained" onClick={updateCategory}>
                                {props.category && props.category !== 'null' ? "Deactivate" : "Activate"}</Button>
                        </TableCell>
                    </TableRow>)
                }
            </TableBody>
        );
    }

    function EmployerUserEntry(props) {
        const [category, setCategory] = useState(props.user.category ? props.user.category : 'N/A');
        const [response, setResponse] = useState('')

        const id = useSelector((state) => {
            return state.authenticationReducer.id
        });

        const save = () => {
            let tempUser = props.user;
            tempUser.category = category;
            console.log(tempUser);
            apiUpdateUser(props.user.user_id, tempUser).then((response) => {
                if (response.status === 200) {
                    setResponse('Success');
                } else (
                    setResponse('Fail.')
                )
            }).catch((error) => {
                console.log(error)
            })
        }

        return (
            <TableBody>
                {
                    props.user.user_id !== id && props.user.role === 'user' && (<TableRow key={props.user.user_id}>
                        <TableCell component="th" scope="props"> {props.user.fname}</TableCell>
                        <TableCell component="th" scope="props"> {props.user.lname}</TableCell>
                        <TableCell align="center">{props.user.email}</TableCell>
                        <TableCell align="center">
                            <DropdownButton id="dropdown-menu-align-right" title={category}
                                className="justify-content-end">
                                <Dropdown.Item onClick={() => setCategory('Basic')}>Basic</Dropdown.Item>
                                <Dropdown.Item onClick={() => setCategory('Prime')}>Prime</Dropdown.Item>
                                <Dropdown.Item onClick={() => setCategory('Gold')}>Gold</Dropdown.Item>
                            </DropdownButton>
                        </TableCell>
                        <TableCell align="center">${props.user.balance}</TableCell>
                        <TableCell align="center">
                            <Button variant="contained" onClick={save}>Save User</Button>
                        </TableCell>
                    </TableRow>)
                }
            </TableBody>
        );
    }


    return (
        <div>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    {role === 'admin' ?
                        (<TableHead>
                            <TableRow>
                                <TableCell>User Id</TableCell>
                                <TableCell align="center">Email</TableCell>
                                <TableCell align="center">Category</TableCell>
                                <TableCell align="center">Balance</TableCell>
                                <TableCell align="center">Account Status</TableCell>
                            </TableRow>
                        </TableHead>) :
                        (<TableHead>
                            <TableRow>
                                <TableCell>First Name</TableCell>
                                <TableCell align="center">Last Name</TableCell>
                                <TableCell align="center">Email</TableCell>
                                <TableCell align="center">Category</TableCell>
                                <TableCell align="center">Balance</TableCell>
                            </TableRow>
                        </TableHead>)}

                    {role === 'admin' ?
                        users.map(retrievedUser =>
                            <UserEntry
                                key={retrievedUser.user_id}
                                email={retrievedUser.email}
                                balance={retrievedUser.balance}
                                category={retrievedUser.category}
                                user_id={retrievedUser.user_id} />
                        )
                        : users.map(retrievedUser => <EmployerUserEntry user={retrievedUser} />)}
                </Table>
            </TableContainer>
        </div>
    )
}

export default UserTable;