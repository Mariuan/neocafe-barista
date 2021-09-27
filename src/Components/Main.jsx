import React, { useState } from 'react'
import './CSS/Main.css'
import notification from './media/notification.svg';
import menu from './media/menu-item.svg';
import profile from './media/profile-item.svg';
import order from './media/order-item.svg'
import Menu from './Menu';


const Main = () => {
    const [ state, setState ] = useState('menu');

    const handleState = (e) => {
        const items = document.querySelectorAll("#nav_item");
        items.forEach((item)=>{
            item.classList.remove('picked');
        });
        e.target.classList.add('picked');
        setState(e.target.classList[1]);
    }
    return (
        <div className="main-page">
            <div className="sidebar">
                <div className="sidebar_notification">
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
            <div className="main-content">
                {state === 'menu' && 
                <Menu></Menu>}
            </div>
        </div>
    )
}
export default Main
