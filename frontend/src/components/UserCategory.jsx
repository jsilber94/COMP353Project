import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { apiUpdateCategory } from '../Api';
import { useSelector } from 'react-redux';

export default function UserCategory() {

    const id = useSelector((state) => {
        return state.authenticationReducer.id
    });

    const userCategory = useSelector((state) => {
        return state.authenticationReducer.
            category
    });

    const [category, setCategory] = useState(userCategory);
    const [errorMessage, setErrorMessage] = useState('');

    const changeCategory = (new_category) => {
        apiUpdateCategory(id, new_category)
            .then((response) => {
                if (response.statusText == "OK") {
                    setCategory(new_category);
                } else {
                    setErrorMessage(response.data.message);
                }
            }).catch((error) => {
                setErrorMessage(error.message);
                console.log(errorMessage);
            });
    };
    
    return (
        <div>
            <Button style={{ margin: '1%' }} onClick={() => changeCategory('Basic')} disabled={category == 'Basic'}>Basic</Button>
            <Button style={{ margin: '1%' }} onClick={() => changeCategory('Prime')} disabled={category == 'Prime'}>Prime</Button>
            <Button style={{ margin: '1%' }} onClick={() => changeCategory('Gold')} disabled={category == 'Gold'}>Gold</Button>
        </div>
    )
}
