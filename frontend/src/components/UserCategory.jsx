import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { apiUpdateCategory } from '../Api';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { categoryRedux } from '../store/action/auth';

export default function UserCategory() {
    const dispatch = useDispatch();

    const user_id = useSelector((state) => {
        return state.authenticationReducer.id
    });

    const userCategory = useSelector((state) => {
        return state.authenticationReducer.
            category
    });

    const userRole = useSelector((state) => {
        return state.authenticationReducer.role
    });

    const [category, setCategory] = useState(userCategory);
    const [errorMessage, setErrorMessage] = useState('');

    const changeCategory = (new_category) => {
        apiUpdateCategory(user_id, new_category)
            .then((response) => {
                if (response.statusText == "OK") {
                    setCategory(new_category);
                    //update the category within the reducer for ease of job filtering restrictions
                    dispatch(categoryRedux(userRole, user_id, new_category));
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
            {userRole === 'user' &&
                (<Button style={{ margin: '1%' }} onClick={() => changeCategory('Basic')} disabled={category == 'Basic'}>Basic</Button>)}
            <Button style={{ margin: '1%' }} onClick={() => changeCategory('Prime')} disabled={category == 'Prime'}>Prime</Button>
            <Button style={{ margin: '1%' }} onClick={() => changeCategory('Gold')} disabled={category == 'Gold'}>Gold</Button>
        </div>
    )
}
