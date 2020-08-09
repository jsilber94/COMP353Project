import { useState } from 'react';
import { apiGetAllUsers, apiUpdateCategory } from '../Api'

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


function UserTable() {
    const [users, setUsers] = useState([])
    const [isMade, setIsMade] = useState(false)

    const classes = makeStyles({
        table: {
            width: 1000,
        },
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


    return (
        <div>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">User Id</TableCell>
                            <TableCell align="center">Email</TableCell>
                            <TableCell align="center">Category</TableCell>
                            <TableCell align="center">Balance</TableCell>
                            <TableCell align="center">Account Status</TableCell>
                        </TableRow>
                    </TableHead>
                    {users.map(retrievedUser =>
                        <UserEntry
                            key={retrievedUser.user_id}
                            email={retrievedUser.email}
                            balance={retrievedUser.balance}
                            category={retrievedUser.category}
                            user_id={retrievedUser.user_id} />
                    )}
                </Table>
            </TableContainer>
        </div>
    )
}

export default UserTable;