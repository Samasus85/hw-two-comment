import { useState } from 'react';
import './Input.css';


const Input = () => {
    const [userForm, setUserForm] = useState({
        user: '',
        email: '',
        phone: ''
    })

    const formChangeHandler = (e) => {
        const currentInput = e.target.name
        setUserForm({
            ...userForm,
            [currentInput]: e.target.value,
        });
    };




    const buttonHandler = (e) => {
        e.preventDefault()
        console.log(userForm)

    }
    return <form className='Form' onSubmit={buttonHandler}>
        <label>User</label>
        <input name='user' type='text' onChange={formChangeHandler} />
        <label>email</label>
        <input name='mail' type='email' onChange={formChangeHandler} />
        <label>telephone</label>
        <input name='phone' type='tel' onChange={formChangeHandler} />
        <button type='submit' >add</button>
    </form>
}

export default Input;