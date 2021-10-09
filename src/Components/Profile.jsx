import React, { useState, useEffect } from 'react';
import Calendar from './Calendar';
import './CSS/profile.css';

const Profile = () => {
    const [ profileState, setProfileState ] = useState('personalData');
    let name = 'Рахим';
    let lastName = 'Замиров';
    let birthday = '20.06.2002';
    let phoneNumber = '+99699129104';
    const [ editName, setEditName] = useState(name);
    const [ editLastName, setEditLastName ] = useState(lastName);
    const [ editBirthday, setEditBirthday] = useState(birthday);
    const [ editPhoneNumber, setEditPhoneNumber] = useState(phoneNumber);

    const [ buttonState, setButtonState ] = useState('saved');

    useEffect(()=>{
        if (name != editName || lastName != editLastName || birthday != editBirthday || phoneNumber != editPhoneNumber) {
            setButtonState('edit');
        }
    }, [editName, editLastName, editBirthday, editPhoneNumber])

    

    const days = [];
    for (let i = 1; i < 35; i++){
        if (i > 31) {
            days.push(i-31);
        }
        else {
            days.push(i)
        }
    }
    return (
        <div className='profile-page'>
            <div className="profile_title">
                <div className="profile_title-main">
                    <h1>Профиль</h1>
                </div>
                <div className="profile-state_switch">
                    <div className="profile-state profile_personal-data place" onClick={(e)=>{
                        e.target.nextSibling.classList.remove('place');
                        e.target.classList.add('place');
                        setProfileState('personalData');
                    }}>Лчиные данные</div>
                    <div className="profile-state profile_schedule" onClick={(e)=>{
                        e.target.previousSibling.classList.remove('place');
                        e.target.classList.add('place');
                        setProfileState('schedule');
                    }}>График работы</div>
                </div>
            </div>
            <div className="profile-content">
                { profileState === 'personalData' &&
                <>
                    <div className="profile-info-side">
                        <div className="profile-info-box">
                            <label >Имя</label>
                            <br/>
                            <input type="text" className="profile-info-input" value={editName} onChange={(e)=>{
                                setEditName(e.target.value);
                            }}/>
                            <br/>
                            <label htmlFor="">Фамилия</label>
                            <br/>
                            <input type="text" className="profile-info-input" value={editLastName} onChange={(e)=>{
                                setEditLastName(e.target.value);
                            }}/>
                            <br/>
                            <label htmlFor="">Дата рождения</label>
                            <br/>
                            <input type="text" className="profile-info-input" value={editBirthday} onChange={(e)=>{
                                setEditBirthday(e.target.value);
                            }}/>
                            <br/>
                            <label htmlFor="">Номер телефона</label>
                            <br/>
                            <input type="text" className="profile-info-input" value={editPhoneNumber} onChange={(e)=>{
                                setEditPhoneNumber(e.target.value);
                            }}/>
                            {buttonState === 'edit' &&
                            <div className="profile_save-button-box">
                                <button type="button" className="profile_save-button" onClick={(e)=>{
                                    name = editName;
                                    lastName = editLastName;
                                    birthday = editBirthday;
                                    phoneNumber = editPhoneNumber;
                                    setEditName(name);
                                    setEditLastName(lastName);
                                    setEditBirthday(birthday);
                                    setEditPhoneNumber(phoneNumber);
                                    setButtonState('saved');
                                    console.log('Saved');
                                }}>Сохранить</button>
                            </div>}
                        </div>
                    </div>
                </>}
                { profileState === 'schedule' &&
                <>
                    <div className="profile-schedule-side">
                        <div className="profile-schedule-box">
                            <div className="profile-schedule-graph-calendar">
                                <Calendar></Calendar>
                            </div>
                            <div className="profile-schedule-time-managment">
                                <p className="time-managment-title">График работы</p>
                                <div className="time-managmant-decription">
                                    <div className="schedule-line day-line">
                                        <div className="time-color-circle day"></div>
                                        <p>Дневная смена с 09:00 до 16:00</p>
                                    </div>
                                    <div className="schedule-line night-line">
                                        <div className="time-color-circle night"></div>
                                        <p>Дневная смена с 09:00 до 16:00</p>
                                    </div>
                                    <div className="schedule-line weekend-line">
                                        <div className="time-color-circle weekendCircle"></div>
                                        <p>Дневная смена с 09:00 до 16:00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>}
                
            </div>
        </div>
    )
}

export default Profile