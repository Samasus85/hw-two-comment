import { useState } from 'react';
import './Input.css';


const Input = () => {

    const [user, setUserName] = useState();
    const [mail, setMail] = useState();
    const [phone, setPhone] = useState();

    const inputChangeHandler = (e) => {
        const currentInput = e.target.name;
        if (currentInput === 'user') {
            setUserName(e.target.value)
        } else if (currentInput === 'mail') {
            setMail(e.target.value)
        } else if (currentInput === 'phone') {
            setPhone(e.target.value)
        }
    }

    const buttonHandler = (e) => {
        e.preventDefault()
        console.log(user)
        console.log(mail)
        console.log(phone)
    }
    return <form className='Form' onSubmit={buttonHandler}>
        <label>User</label>
        <input name='user' type='text' onChange={inputChangeHandler} />
        <label>email</label>
        <input name='mail' type='email' onChange={inputChangeHandler} />
        <label>telephone</label>
        <input name='phone' type='tel' onChange={inputChangeHandler} />
        <button type='submit' >add</button>
    </form>
}

export default Input;