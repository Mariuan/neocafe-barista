import React, { useState, useEffect } from 'react'
import { phoneValidate, birthdayValidate } from './validation';
import { Redirect } from 'react-router-dom';
import './CSS/Login.css';

const Login = () => {
    const [ send, setSend ] = useState('not');
    const [ phoneNumber, setPhoneNumber] = useState('');
    const [ code1, setCode1 ] = useState('');
    const [ code2, setCode2 ] = useState('');
    const [ code3, setCode3 ] = useState('');
    const [ code4, setCode4 ] = useState('');
    const [ correcCode, setCorrectCode ] = useState(true);

    const [ timer, setTimer ] = useState(30);

    const [ name, setName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ birthday, setBirthday] = useState('');
    

    const sendSMS = async (requestPhone) => {
        const response = await fetch('https://neocafe6.herokuapp.com/sendSms', {
            method: 'POST',
            body: {
                phone: requestPhone
            }
        });
        // const responseJson = await response.json();
        console.log(response);
        return response;
    }

    const handleNext = (e) => {
        setSend('sent');
    }
    const handleConfirm = (e) => {
        e.preventDefault();
        const check_code = code1 + code2 + code3 + code4;
        if (check_code === '1111') {
            setSend('sign-up');
        }
        else {
            setCorrectCode(false);
        }
        
    }
    const handleSignUp = (e) => {
        e.preventDefault();
        window.location.href = "/main";
    }
    useEffect(()=>{
        const check_code = code1 + code2 + code3 + code4;
        if (document.getElementById('confirm-button') != null && document.getElementById('resend-button') != null){
            if (check_code.length === 4) {
                document.getElementById('confirm-button').disabled = false;
                document.getElementById('confirm-button').classList.add('active');
                document.getElementById('resend-button').classList.add('resend-active');
            } else {
                document.getElementById('confirm-button').disabled = true;
                document.getElementById('resend-button').classList.remove('resend-active');
            }
        }
    },[code1, code2, code3, code4]);
    
    useEffect(()=>{
        if (document.getElementById('signup-button') != null) {
            if (name.length > 0) {
                if (lastName.length > 0) {
                    if (birthdayValidate(birthday)) {
                        document.getElementById('signup-button').classList.add('active');
                        document.getElementById('signup-button').disabled = false;
                    } else {
                        document.getElementById('signup-button').classList.remove('active');
                        document.getElementById('signup-button').disabled = true;
                    }
                }
            }
        }
    }, [name, lastName, birthday]);

    if (send === 'not') {
        return (
            <div className="login-page">
                <div className="login-window">
                    <h1>Вход</h1>
                    <form onSubmit={handleNext}>
                       <label htmlFor="">
                            <p>Номер телефона</p>
                            <input type="tel" placeholder="+996 (000) 00 00 00" className="phone-input" onChange={(e)=>{
                                if(phoneValidate(e.target.value)){
                                    document.getElementById('next-button').disabled = false;
                                    document.getElementById('next-button').classList.add("active");
                                } else {
                                    document.getElementById('next-button').disabled = true;
                                    document.getElementById('next-button').classList.remove("active");
                                }
                                setPhoneNumber(e.target.value);
                                }}/>
                        </label>
                        <br/>
                        <button id="next-button" disabled className="button next">Далее</button>
                    </form>
                </div>
            </div>
        )
    }
    else if (send == 'sent') {
        if (timer > 0) {
            setTimeout(()=>{setTimer(timer-1)}, 1000);
        } else if (timer === 0) {
            document.getElementById('resend-button').disabled = false;
        }

        return (
            <div className="login-page">
                <div className="login-window">
                    <h1 className="confirm-title">СМС код</h1>
                    <p className="confirm-subtitle">Код был отправлен на номер {phoneNumber}</p>
                    <form onSubmit={handleConfirm}>
                            { correcCode &&
                            <>
                            <p className="input-title">Введите код</p>
                            <div className="input-field">
                                <input type="tel" className="code-input" onChange={(e)=>{
                                    if (e.target.value.length == 1) {
                                        setCode1(e.target.value);
                                        e.target.nextSibling.focus();
                                    } else if (e.target.value.length === 0) {
                                        setCode1(e.target.value);
                                    } else {
                                        e.target.nextSibling.value = e.target.value[1];
                                        setCode2(e.target.value[1]);
                                        e.target.nextSibling.nextSibling.focus();
                                        e.target.value = e.target.value[0];
                                    }
                                }}/>
                                <input type="tel" id="code-input" className="code-input" onChange={(e)=>{
                                    if (e.target.value.length === 1) {
                                        setCode2(e.target.value);
                                        e.target.nextSibling.focus();
                                    } else if (e.target.value.length === 0) {
                                        setCode2(e.target.value);
                                    } else {
                                        e.target.nextSibling.value = e.target.value[1];
                                        setCode3(e.target.value[1]);
                                        e.target.nextSibling.nextSibling.focus();
                                        e.target.value = e.target.value[0];
                                    }
                                }} onFocus={(e)=>{
                                    e.target.addEventListener('keydown', (event)=>{
                                        if (e.target.value.length == 0) {
                                            if (event.code == 'Backspace') {
                                                e.target.previousSibling.focus();
                                                event.preventDefault();
                                            }
                                            
                                        }
                                    })
                                }}/>
                                <input type="tel" id="code-input" className="code-input" onChange={(e)=>{
                                    if (e.target.value.length === 1) {
                                        setCode3(e.target.value);
                                        e.target.nextSibling.focus();
                                    } else if (e.target.value.length === 0) {
                                        setCode3(e.target.value);
                                    } else {
                                        e.target.nextSibling.value = e.target.value[1];
                                        setCode4(e.target.value[1]);
                                        e.target.blur();
                                        e.target.value = e.target.value[0];
                                    }
                                }} onFocus={(e)=>{
                                    e.target.addEventListener('keydown', (event)=>{
                                        if (e.target.value.length == 0) {
                                            if (event.code == 'Backspace') {
                                                e.target.previousSibling.focus();
                                                event.preventDefault();
                                            }
                                            
                                        }
                                    })
                                }}/>
                                <input type="tel" id="code-input" className="code-input" maxLength={1} onChange={(e)=>{
                                    if (e.target.value.length === 1) {
                                        setCode4(e.target.value);
                                        e.target.blur();
                                    } else if (e.target.value.length === 0) {
                                        setCode4(e.target.value);
                                    }
                                }} onFocus={(e)=>{
                                    e.target.addEventListener('keydown', (event)=>{
                                        if (e.target.value.length == 0) {
                                            if (event.code == 'Backspace') {
                                                e.target.previousSibling.focus();
                                                event.preventDefault();
                                            }
                                            
                                        }
                                    })
                                }}/>
                                </div>
                            </>}
                            { !correcCode &&
                            <>
                            <label style={{color: '#D70000'}} m>Неверный код*</label>
                            <div className="input-field">
                                <input type="tel" className="code-input" style={{border: '1px solid #D70000'}} onChange={(e)=>{
                                    if (e.target.value.length == 1) {
                                        setCode1(e.target.value);
                                        e.target.nextSibling.focus();
                                    } else if (e.target.value.length === 0) {
                                        setCode1(e.target.value);
                                    } else {
                                        e.target.nextSibling.value = e.target.value[1];
                                        setCode2(e.target.value[1]);
                                        e.target.nextSibling.nextSibling.focus();
                                        e.target.value = e.target.value[0];
                                    }
                                }}/>
                                <input type="tel" id="code-input" className="code-input" style={{border: '1px solid #D70000'}} onChange={(e)=>{
                                    if (e.target.value.length === 1) {
                                        setCode2(e.target.value);
                                        e.target.nextSibling.focus();
                                    } else if (e.target.value.length === 0) {
                                        setCode2(e.target.value);
                                    } else {
                                        e.target.nextSibling.value = e.target.value[1];
                                        setCode3(e.target.value[1]);
                                        e.target.nextSibling.nextSibling.focus();
                                        e.target.value = e.target.value[0];
                                    }
                                }} onFocus={(e)=>{
                                    e.target.addEventListener('keydown', (event)=>{
                                        if (e.target.value.length == 0) {
                                            if (event.code == 'Backspace') {
                                                e.target.previousSibling.focus();
                                                event.preventDefault();
                                            }
                                            
                                        }
                                    })
                                }}/>
                                <input type="tel" id="code-input" className="code-input" style={{border: '1px solid #D70000'}} onChange={(e)=>{
                                    if (e.target.value.length === 1) {
                                        setCode3(e.target.value);
                                        e.target.nextSibling.focus();
                                    } else if (e.target.value.length === 0) {
                                        setCode3(e.target.value);
                                    } else {
                                        e.target.nextSibling.value = e.target.value[1];
                                        setCode4(e.target.value[1]);
                                        e.target.blur();
                                        e.target.value = e.target.value[0];
                                    }
                                }} onFocus={(e)=>{
                                    e.target.addEventListener('keydown', (event)=>{
                                        if (e.target.value.length == 0) {
                                            if (event.code == 'Backspace') {
                                                e.target.previousSibling.focus();
                                                event.preventDefault();
                                            }
                                            
                                        }
                                    })
                                }}/>
                                <input type="tel" id="code-input" className="code-input" style={{border: '1px solid #D70000'}} maxLength={1} onChange={(e)=>{
                                    if (e.target.value.length === 1) {
                                        setCode4(e.target.value);
                                        e.target.blur();
                                    } else if (e.target.value.length === 0) {
                                        setCode4(e.target.value);
                                    }
                                }} onFocus={(e)=>{
                                    e.target.addEventListener('keydown', (event)=>{
                                        if (e.target.value.length == 0) {
                                            if (event.code == 'Backspace') {
                                                e.target.previousSibling.focus();
                                                event.preventDefault();
                                            }
                                            
                                        }
                                    })
                                }}/>
                            </div>
                            </>}
                        <button type="submit" id="confirm-button" disabled className="button confirm">Подтверидить</button>
                        <button type="button" id="resend-button" disabled className="button resend">Отправить повторно ({timer} сек)</button>
                    </form>
                    
                </div>
            </div>
        )
    } else if (send == 'sign-up') {
        return (
            <div className="login-page">
                <div className="login-window">
                    <h1 className="signup-title">Регистрация</h1>
                    <form className="signup-form" onSubmit={handleSignUp}>
                        <label htmlFor="">Имя*</label>
                        <br />
                        <input type="text" placeholder="Как вас зовут?" className="signup-input" onChange={(e)=>{
                            setName(e.target.value);
                        }}/>
                        <br />
                        <label htmlFor="">Фамилия*</label>
                        <br />
                        <input type="text" placeholder="Как ваше фамилия?" className="signup-input" onChange={(e)=>{
                            setLastName(e.target.value);
                        }}/>
                        <br />
                        <label htmlFor="">Дата рождения*</label>
                        <br />
                        <input type="text" placeholder="Когда вы родились?" className="signup-input" onChange={(e)=>{
                            setBirthday(e.target.value);
                        }}/>
                        <br />
                        <button type="submit" id="signup-button" className="button signup-button" disabled>Далее</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;