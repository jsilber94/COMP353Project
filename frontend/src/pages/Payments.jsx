import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { apigetCreditCardByUserId, apiDeleteCreditCard, apiGetCheckingAccountsByUserId, apiDeleteCheckingAccount } from '../Api';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Header from '../components/layout/Header';



export default function Payments() {
    const [creditCards, setCreditCards] = useState([]);
    const [checkingAccounts, setCheckingAccounts] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const user_id = useSelector((state) => {
        return state.authenticationReducer.id
    })

    const getUserCreditCards = () => {
        apigetCreditCardByUserId(user_id)
            .then((response) => {
                if (response.status == 200) {
                    setCreditCards(response.data);
                } else {
                    setErrorMessage('Could not get user application history.');
                }
            }).catch((error) => {
                setErrorMessage('Could not get user application history.');
            });
    };

    const getUserCheckingAccounts = () => {
        apiGetCheckingAccountsByUserId(user_id)
            .then((response) => {
                if (response.status == 200) {
                    setCheckingAccounts(response.data);
                } else {
                    setErrorMessage('Could not get user application history.');
                }
            }).catch((error) => {
                setErrorMessage('Could not get user application history.');
            });
    };

    const deleteCreditCard = (cc_id) => {
        apiDeleteCreditCard(cc_id)
        .then((response) => {
            if (response.status == 200) {
                console.log(`credit card ${cc_id} deleted`);
            } else {
                setErrorMessage('Could not get user application history.');
            }
        }).catch((error) => {
            setErrorMessage('Could not get user application history.');
        });
    }

    const deleteCheckingAccount = (acc_id) => {
        apiDeleteCheckingAccount(acc_id)
        .then((response) => {
            if (response.status == 200) {
                console.log(`checking account ${acc_id} deleted`);
            } else {
                setErrorMessage('Could not get user application history.');
            }
        }).catch((error) => {
            setErrorMessage('Could not get user application history.');
        });
    }

    const creditCardRows = () => {
        let cc_rows = [];

        if (creditCards.length) {
            creditCards.map(cc => {
                cc_rows.push(
                <tr>
                    <td>{cc.credit_card_number}</td>
                    <td>{cc.expiry_date}</td>
                    <td>{cc.pin}</td>
                    <td>{cc.name_on_card}</td>
                    <td>{cc.default_option == 1 ? "yes" : "no"}</td>
                    <td><Button variant="danger" onClick={() => deleteCreditCard(cc.creditCard_id)}>Delete</Button></td>
                </tr>
                )
            })
        }

        return cc_rows;
    };

    const checkingAccountRows = () => {
        let acc_rows = [];

        if (checkingAccounts.length) {
            checkingAccounts.map(acc => {
                acc_rows.push(
                <tr>
                    <td>{acc.bank_routing_number}</td>
                    <td>{acc.account_number}</td>
                    <td>{acc.default_option == 1 ? "yes" : "no"}</td>
                    <td><Button variant="danger" onClick={() => deleteCheckingAccount(acc.CheckingAccount_id)}>Delete</Button></td>
                </tr>
                )
            })
        }

        return acc_rows;
    };


    //runs on every render
    useEffect(() => {
        getUserCreditCards();
        getUserCheckingAccounts();
    })

    return (
        <div>
            <Header />
            <h1>Credit Cards</h1>
            <Table>
                <thead>
                    <tr>
                        <th>card number</th>
                        <th>expiry date</th>
                        <th>pin</th>
                        <th>name on card</th>
                        <th>default option</th>
                    </tr>
                </thead>
                <tbody>
                    {creditCardRows()}
                </tbody>
            </Table>
            <h1>Checking Accounts</h1>
            <Table>
            <thead>
                    <tr>
                        <th>bank routing number</th>
                        <th>account number</th>
                        <th>default option</th>
                    </tr>
                </thead>
                <tbody>
                    {checkingAccountRows()}
                </tbody>
            </Table>
            {errorMessage}
        </div>
    )
}
