import React from 'react';
import { useState } from 'react';
import Header from '../components/layout/Header'
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { apiGetUsersForEmployerReport, apiGetAllEmployers } from '../Api'

function ReportUser(props) {
    const [users, setUsers] = useState([])
    const [options, setOptions] = useState([])

    const [isMade, setIsMade] = useState(false)

    const classes = makeStyles({
        table: {
            width: 1000,
        },
    });

    const retrieveUsers = (event) => {
        apiGetUsersForEmployerReport(event.target.value)
            .then((response) => {
                if (response.status === 200) {
                    // response.data.push({
                    //     email: 'email@gg.com',
                    //     fname: 'Jesse',
                    //     lname: 'Sil',
                    //     balance: 100,
                    //     owing_since: never
                    // })
                    setUsers(response.data)
                }
            }).catch((error) => {
                console.log(error);
            })
    }

    const retrieveOptions = () => {
        apiGetAllEmployers()
            .then((response) => {
                if (response.status === 200) {
                    setOptions(response.data)
                }
            }).catch((error) => {
                console.log(error);
            })
    }

    if (!isMade) {
        retrieveOptions()
        // retrieveUsers();
        setIsMade(true);
    }

    function EmployerOptions(props) {
        return (<option value={props.employer_id}>{props.employer_id}</option>)
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
            <Select native value={100} onChange={retrieveUsers} inputProps={{ name: 'Employer Id' }}>
                {options.map(retrievedEmployer =>
                    <EmployerOptions
                        key={retrievedEmployer.Employer_id}
                        employer_id={retrievedEmployer.Employer_id} />
                )}
            </Select>
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

export default ReportUser;
