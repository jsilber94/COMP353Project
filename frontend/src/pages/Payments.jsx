import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { 
    apigetCreditCardByUserId, 
    apiDeleteCreditCard, 
    apiGetCheckingAccountsByUserId, 
    apiDeleteCheckingAccount,
    apiAddCheckingAccount,
    apiAddCreditCard
} from '../Api';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import {Row, Col, Toast, ToastBody, FormGroup, FormLabel, FormControl, Form} from 'react-bootstrap'
import Header from '../components/layout/Header';
import { ToastHeader } from 'react-bootstrap';

function CreditCard(props){
    const [cardNum, setCardNum] = useState("");
    const [year, setYear] = useState(2020);
    const [month, setMonth] = useState(10);
    const [day, setDay] = useState(14)
    const [pin, setPin] = useState();
    const [name, setName] = useState();


    const addCC = (newCC) => {
        apiAddCreditCard(newCC).then((response) =>{
            if(response.status === 200){
                props.ccFetched(false);
            }
        }).catch((error) => {
            console.log(error)
        })
    }

    function handleClick(){
        const cc = {
            credit_card_number: cardNum,
            expiry_date: `${year}-${month}-${day}`,
            pin: pin,
            name_on_card: name,
            user_id_fk: props.user_id
        }
        addCC(cc)
        props.getCC();
        props.toggleToast()
    }



    return (         
        <FormGroup>
            <Row>
                <Col>
                    <FormLabel>
                        Credit Card Number
                    </FormLabel>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormGroup controlId="cardNum">
                        <FormControl onChange={(e) => setCardNum(e.target.value)}/>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormLabel>
                        Expiry Date (yyyy-mm-dd)
                    </FormLabel>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormGroup controlId="expDate">
                        <FormControl key="yr" onChange={(e) => setYear(e.target.value)}/>
                        <FormControl key="mo" onChange={(e) => setMonth(e.target.value)}/>
                        <FormControl key="day" onChange={(e) => setDay(e.target.value)}/>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormLabel>
                        Pin
                    </FormLabel>
                </Col>
                <Col>
                    <FormLabel>
                    Name On Card
                    </FormLabel>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormGroup controlId="pin">
                        <FormControl onChange={(e) => setPin(e.target.value)}/>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup controlId="name">
                        <FormControl onChange={(e) => setName(e.target.value)}/>
                    </FormGroup>
                </Col>
            </Row>
            <Button onClick={handleClick}>
                Add Credit Card
            </Button>
    </FormGroup>
    )
}

function CheckingAccount(props){
    const [bankNum, setBankNum] = useState("")
    const [acctNum, setAcctNum] = useState("")


    const addCheckingAccount = (newChecking) =>{
        apiAddCheckingAccount(newChecking).then((response) =>{
            if(response.status === 200){
                props.checkingFetched(false);
            }
        })
    }

    const handleClick = () => {
        const checking = {
            bank_routing_number: bankNum,
            account_number: acctNum,
            user_id_fk: props.user_id
        }
        addCheckingAccount(checking)
        props.getChecking();
        props.toggleToast();
    }



    return (            
        <Form>
            <Row>
                <Col>
                    <FormLabel>
                        Bank Routing Number
                    </FormLabel>
                </Col>
                <Col>
                    <FormLabel>
                        Account Number
                    </FormLabel>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormGroup controlId="bankNumber">
                        <FormControl onChange={(e) => setBankNum(e.target.value)}>

                        </FormControl>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup controlId="acctNumber">
                        <FormControl onChange={(e) => setAcctNum(e.target.value)}>
                        </FormControl>
                    </FormGroup>
                </Col>
            </Row>
            <Button onClick={handleClick}>
                Add Checking Account
            </Button>
    </Form>
    )
}


function PaymentMethod(props){
    const [isCreditCard, setIsCreditCard] = useState(true)

    return ( 
        <Row>
            <Col xs={6}>
                <Button onClick={props.toggleShowToast}>
                Add Payment Method
                </Button>
            </Col>
            <Col >
                <Toast show={props.showToast} onClose={props.toggleShowToast} style={{ width: '700px'}} md={6}>
                    <ToastHeader>
                        Payment Method
                    </ToastHeader>
                    <ToastBody>
                        <FormGroup controlId="paymentMethod">    
                            <FormControl as="select" onChange={(e) =>{
                                if(e.target.value === "Credit Card"){
                                    setIsCreditCard(true);
                                }else{
                                    setIsCreditCard(false)
                                }
                            }}>
                                <option>Credit Card</option>
                                <option>Checking Account</option>
                            </FormControl>
                        </FormGroup>
                        { isCreditCard ? 
                            <CreditCard 
                                user_id={props.user_id} 
                                toggleToast={props.toggleToast} 
                                setCC={props.setCC}
                                ccFetched={props.ccFetched}
                                getCC={props.getCC}
                                /> : 
                            <CheckingAccount 
                                user_id={props.user_id} 
                                toggleToast={props.toggleToast}
                                setChecking={props.setChecking}
                                checkingFetched={props.checkingFetched}
                                getChecking={props.getChecking}
                             /> }
                    </ToastBody>
                </Toast>
            </Col>
    </Row>
    )
}

export default function Payments() {
    const [creditCards, setCreditCards] = useState([]);
    const [checkingAccounts, setCheckingAccounts] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [showToast, setShowToast] = useState(false)
    const [creditCardToAdd, setCreditCardToAdd] = useState("");
    const [checkingAccountToAdd, setCheckingAccountToAdd] = useState("")
    const [ccFetched, setCCFetched] = useState(false)
    const [checkingFetched, setCheckingFetched] = useState(false)

    const user_id = useSelector((state) => {
        return state.authenticationReducer.id
    })

    const getUserCreditCards = () => {
        if(!ccFetched){
        apigetCreditCardByUserId(user_id)
            .then((response) => {
                if (response.status == 200) {
                    setCreditCards(response.data);
                } else {
                    setErrorMessage('Could not get user application history.');
                }
                setCCFetched(true);
            }).catch((error) => {
                setErrorMessage('Could not get user application history.');
            });
        }
    };

    const getUserCheckingAccounts = () => {
        if(!checkingFetched){
        apiGetCheckingAccountsByUserId(user_id)
            .then((response) => {
                if (response.status == 200) {
                    setCheckingAccounts(response.data);
                } else {
                    setErrorMessage('Could not get user application history.');
                }
                setCheckingFetched(true)
            }).catch((error) => {
                setErrorMessage('Could not get user application history.');
            });
        }
    };

    const deleteCreditCard = (cc_id) => {
        apiDeleteCreditCard(cc_id)
        .then((response) => {
            if (response.status == 200) {
                console.log(`credit card ${cc_id} deleted`);
                setCCFetched(false);
                getUserCreditCards();
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
                setCheckingFetched(false);
                getUserCheckingAccounts();
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

    const toggleShowToast = () => {
        setShowToast(!showToast)
    }

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
            <PaymentMethod 
                user_id={user_id} 
                toggleToast={toggleShowToast} 
                setChecking={setCheckingAccountToAdd} 
                setCC={setCreditCardToAdd} 
                toggleShowToast={toggleShowToast} 
                showToast={showToast}
                ccFetched={setCCFetched}
                checkingFetched={setCheckingFetched}
                getCC={getUserCreditCards}
                getChecking={getUserCheckingAccounts}
            />
        </div>
    )
}
