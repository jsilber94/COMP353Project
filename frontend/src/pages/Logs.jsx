import React from 'react';
import { useState } from 'react';
import Header from '../components/layout/Header'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { apiGetLogs } from '../Api'

function Logs(props) {
    const [logs, setLogs] = useState([])
    const [isMade, setIsMade] = useState(false)

    const classes = makeStyles({
        table: {
            width: 1000,
        },
    });

    const retrieveLogs = () => {
        apiGetLogs()
            .then((response) => {
                if (response.status === 200) {
                    setLogs(response.data)
                }
            }).catch((error) => {
                console.log(error);
            })
    }

    if (!isMade) {
        retrieveLogs();
        setIsMade(true);
    }

    function LogEntry(props) {
        return (
            <TableBody>
                {
                    (<TableRow key={props.log_id}>
                        <TableCell align="left" scope="props"> {props.log_id}</TableCell>
                        <TableCell align="left">{props.table_name}</TableCell>
                        <TableCell align="center">{props.query}</TableCell>

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
                            <TableCell align="left">Log Id</TableCell>
                            <TableCell align="left">Table Name</TableCell>
                            <TableCell align="center">Query</TableCell>

                        </TableRow>
                    </TableHead>
                    {logs.map(retrievedLog =>
                        <LogEntry
                            key={retrievedLog.log_id}
                            log_id={retrievedLog.log_id}
                            table_name={retrievedLog.table_name}
                            query={retrievedLog.query}
                        />
                    )}
                </Table>
            </TableContainer>
        </div>
    );
}

export default Logs;
