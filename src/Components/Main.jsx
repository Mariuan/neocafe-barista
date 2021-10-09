import React, { useState } from 'react'
import './CSS/Main.css'
import notification from './media/notification.svg';
import menu from './media/menu-item.svg';
import profile from './media/profile-item.svg';
import order from './media/order-item.svg'
import Menu from './Menu';
import Orders from './Orders';
import Profile from './Profile';
import Notification from './Notification';


const Main = () => {
    const [ state, setState ] = useState('menu');
    const [ notificationState, setNotificationState ] = useState('notPicked');

    const handleState = (e) => {
        const items = document.querySelectorAll("#nav_item");
        items.forEach((item)=>{
            item.classList.remove('picked');
        });
        e.target.classList.add('picked');
        setState(e.target.classList[1]);
    }

    if (notificationState === 'picked') {
        document.getElementsByClassName('extra-sidebar')[0].style.width = '25%';
        document.getElementsByClassName('main-content')[0].style.width = '67%';
    } 
    else {
        if (document.getElementsByClassName('extra-sidebar')[0] != undefined) {
            document.getElementsByClassName('extra-sidebar')[0].style.width = '0%';
        }
        if (document.getElementsByClassName('main-content')[0] != undefined){
            document.getElementsByClassName('main-content')[0].style.width = '92%';
        }
    }

    return (
        <div className="main-page" id="main">
            <div className="sidebar">
                <div className="sidebar_notification" onClick={(e)=>{
                    if (notificationState === 'notPicked') {
                        setNotificationState('picked');
                        e.target.classList.add('picked');
                    } else {
                        setNotificationState('notPicked');
                        e.target.classList.remove('picked');
                    }
                }}>
                    <img src={notification} alt="notification-icon" className="notification-icon"/>
                    <p>Тебе</p>
                </div>
                <div className="sidebar_nav">
                    <div id="nav_item" className="nav_item menu picked" onClick={handleState}>
                        <img src={menu} alt="menu-icon" className="menu-icon"/>
                        <p>Меню</p>
                    </div>
                    <div id="nav_item" className="nav_item orders" onClick={handleState}>
                        <img src={order} alt="order-icon" className='order-icon'/>
                        <p>Заказы</p>
                    </div>
                    <div id="nav_item" className="nav_item profile" onClick={handleState}>
                        <img src={profile} alt="profile-icon" className="profile-icon"/>
                        <p>Профиль</p>
                    </div>
                </div>
            </div>
            <div className="extra-sidebar">
                {notificationState === 'picked' && 
                <Notification></Notification>}
            </div>
            <div className="main-content">
                {state === 'menu' && 
                <Menu></Menu>}
                {state === 'orders' && 
                <Orders></Orders>}
                {state === 'profile' &&
                <Profile></Profile>}
            </div>
        </div>
    )
}
export default Main
