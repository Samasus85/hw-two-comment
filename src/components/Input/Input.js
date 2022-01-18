import { useState } from 'react';
import './Input.css';

const Input = () => {
    const [userForm, setUserForm] = useState({
        user: '',
        email: '',
        phone: ''
    })

    const userChangeHandler = (e) => {
        setUserForm((prevState) => {
            // console.log(prevState)
            return {
                ...prevState,
                user: e.target.value,
            }
        });

    };

    const mailChangeHandler = (e) => {
        setUserForm((prevState) => {
            return {
                ...prevState,
                email: e.target.value,
            }
        });

    };
    const phoneChangeHandler = (e) => {
        setUserForm((prevState) => {

            return {
                ...prevState,
                phone: e.target.value,
            }
        });

    };


    const buttonHandler = (e) => {
        e.preventDefault()
        console.log(userForm)

    }
    return (
        <form onSubmit={buttonHandler}>
            <label>User</label>
            <input type='text' onChange={userChangeHandler} />
            <label>email</label>
            <input type='email' onChange={mailChangeHandler} />
            <label>telephone</label>
            <input type='tel' onChange={phoneChangeHandler} />
            <button type='submit' >add</button>
        </form>
    )
}

export default Input;