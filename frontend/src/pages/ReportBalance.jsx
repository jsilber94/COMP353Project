import React from 'react';
import { useState } from 'react';
import Header from '../components/layout/Header'
import User from '../components/Users'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { apiGetOutstandingBalanceReport } from '../Api'
function ReportBalance(props) {
    const [users, setUsers] = useState([])
    const [isMade, setIsMade] = useState(false)


    const classes = makeStyles({
        table: {
            width: 1000,
        },
    });
    const retrieveUsers = () => {
        apiGetOutstandingBalanceReport()
            .then((response) => {
                if (response.status === 200) {
                    setUsers(response.data)
                }
            }).catch((error) => {
                console.log(error);
            })
    }

    if (!isMade) {
        retrieveUsers();
        setIsMade(true);
    }


    function UserEntry(props) {
        return (
            <TableBody>
                {
                    (<TableRow key={props.email}>
                        <TableCell align="center" scope="props"> {props.email}</TableCell>
                        <TableCell align="center">{props.fname}</TableCell>
                        <TableCell align="center">{props.lname}</TableCell>
                        <TableCell align="center">{props.balance}</TableCell>
                        <TableCell align="center">{props.owing_since}</TableCell>
                    </TableRow>)
                }
            </TableBody>
        );
    }

    return (
        <div>
            <Header></Header>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Email</TableCell>
                            <TableCell align="center">First name</TableCell>
                            <TableCell align="center">Last name</TableCell>
                            <TableCell align="center">Balance</TableCell>
                            <TableCell align="center">Owing Since</TableCell>
                        </TableRow>
                    </TableHead>
                    {users.map(retrievedUser =>
                        <UserEntry
                            key={retrievedUser.email}
                            email={retrievedUser.email}
                            fname={retrievedUser.fname}
                            lname={retrievedUser.lname}
                            balance={retrievedUser['balance']}
                            owing_since={retrievedUser['owing since']} />
                    )}
                </Table>
            </TableContainer>
        </div >
    )
}

export default ReportBalance;
