import React from 'react';
import './CSS/notification.css';
import Trash from './media/Trash.svg';

const NotificationItem = () => {
    return (
        <>
        <div className="notification-item_background">
            <div className="notification-item_box">
                <div className="item-title-line">
                    <p className="item_name">Стол №4</p>
                    <p className="item_time">19:02</p>
                </div>
                <div className="item-consist">
                    <p className="item-consist-name">Капучино </p>
                    <p className="item-consist-quantity">x1,</p>
                    <p className="item-consist-name">Тирамиссу </p>
                    <p className="item-consist-quantity">x2,</p>
                    <p className="item-consist-name">Апельсинов..</p>
                </div>
            </div>
            <div className="delete-button-icon" onClick={(e)=>{
                e.target.parentNode.parentNode.parentNode.remove();
            }}>
                <img src={Trash} alt="trash-icon"/>
            </div>
        </div>

        </>
    )
}

export default NotificationItem
