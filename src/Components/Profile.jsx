import React, { useState } from 'react';
import './CSS/profile.css';

const Profile = () => {
    const [ profileState, setProfileState ] = useState('saved');
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
                <h1>Профиль</h1>
            </div>
            <div className="profile-content">
                { profileState === 'saved' &&
                    <>
                        <div className="profile-info-side">
                            <div className="profile-info-box">
                                <label >Имя</label>
                                <br/>
                                <input type="text" className="profile-info-input" value="Рахим" disabled/>
                                <br/>
                                <label htmlFor="">Фамилия</label>
                                <br/>
                                <input type="text" className="profile-info-input" value="Замиров" disabled/>
                                <br/>
                                <label htmlFor="">Дата рождения</label>
                                <br/>
                                <input type="text" className="profile-info-input" value="23.06.1998" disabled/>
                                <br/>
                                <label htmlFor="">Номер телефона</label>
                                <br/>
                                <input type="text" className="profile-info-input" value="+996709464228" disabled/>
                            </div>
                            <div className="profile-info-edit-button">
                                <button className="profile-edit-button">Редактировать</button>
                            </div>
                        </div>
                        <div className="profile-schedule-side">
                            <div className="profile-schedule-box">
                                <div className="profile-schedule-graph-calendar">
                                    {console.log(days)}
                                    {days.forEach((day)=>{
                                        console.log(day);
                                        <p>Hello</p>
                                    })}
                                </div>
                                <div className="profile-schedule-time-managment">

                                </div>
                            </div>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default Profile
