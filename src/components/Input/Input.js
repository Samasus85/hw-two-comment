import { useState } from 'react';
import './Input.css';


const Input = () => {

    const [userName, setUserName] = useState();
    const [mail, setMail] = useState();
    const [phone, setPhone] = useState();

    const userNameHandler = (e) => {
        setUserName(e.target.value)
    }
    const mailailHandler = (e) => {
        setMail(e.target.value)
    }
    const phoneHandler = (e) => {
        setPhone(e.target.value)
    }

    const buttonHandler = (e) => {
        e.preventDefault()
        console.log(userName, mail, phone)
    }
    return <form className='Form' onSubmit={buttonHandler}>
        <label>User</label>
        <input name='user' type='text' onChange={userNameHandler} />
        <label>email</label>
        <input name='mail' type='email' onChange={mailailHandler} />
        <label>telephone</label>
        <input name='phone' type='tel' onChange={phoneHandler} />
        <button type='submit' >add</button>
    </form>
}

export default Input;