import React, { useState } from 'react'
import { validate } from './phoneValidation';
import './CSS/Login.css';

const Login = () => {
    const [ send, setSend ] = useState('not');
    const [ phoneNumber, setPhoneNumber] = useState('');
    const [ code, setCode ] = useState('');
    const handleNext = () => {
        setSend('sent');
    }


    if (send === 'not') {
        return (
            <div className="login-page">
                <div className="login-window">
                    <h1>Вход</h1>
                    <form onSubmit={handleNext}>
                       <label htmlFor="">
                            <p>Номер телефона</p>
                            <input type="tel" placeholder="+996 (000) 00 00 00" className="phone-input" onChange={(e)=>{
                                if(validate(e.target.value)){
                                    document.getElementById('button').disabled = false;
                                    document.getElementById('button').style.background = "#7A68B7";
                                    document.getElementById('button').style.color = '#FFF';
                                } else {
                                    document.getElementById('button').disabled = true;
                                    document.getElementById('button').style.background = '#4A4754';
                                    document.getElementById('button').style.color = '#C2C1C8';
                                }
                                }}/>
                        </label>
                        <br/>
                        <button id="button" disabled>Далее</button>
                    </form>
                </div>
            </div>
        )
    }
    else if ('sent') {
        return (
            <div className="login-page">
                <div className="login-window">
                    <h1>СМС код</h1>
                    <p>Код был отправлен на номер {phoneNumber}</p>
                    <p>Введите код</p>
                        <input type="tel" size={1} className="code-input" onChange={(e)=>{
                            if (e.target.value.length > 0){
                                e.target.nextSibling.focus();
                            }
                            setCode(e.target.value);
                        }}/>
                        <input type="tel" size={1} className="code-input" onChange={(e)=>{
                            if (e.target.value.length > 0){
                                e.target.nextSibling.focus();
                            }
                            setCode(code+e.target.value);
                        }}/>
                        <input type="tel" size={1} className="code-input" onChange={(e)=>{
                            if (e.target.value.length > 0){
                                e.target.nextSibling.focus();
                            }
                            setCode(code+e.target.value);
                        }}/>
                        <input type="tel" size={1} className="code-input" onChange={(e)=>{
                            if (e.target.value.length > 0) {
                                e.target.blur();
                            }
                            console.log(code);
                            const ccode = code+e.target.value;
                            console.log(ccode);
                            setCode(code+e.target.value);
                            console.log(code);
                            if (code.length === 4) {
                                document.getElementById('button').disabled = false;
                                document.getElementById('button').style.background = "#7A68B7";
                                document.getElementById('button').style.color = '#FFF';
                            }
                        }}/>
                    <button id='button'>Подтвердить</button>
                </div>
            </div>
        )
    }
}

export default Login;