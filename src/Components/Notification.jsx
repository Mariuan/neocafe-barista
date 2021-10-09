import React from 'react'
import './CSS/notification.css';
import close_icon from './media/coolicon.svg';
import NotificationItem from './NotificationItem';

const Notification = () => {
    const handleNotificationDelete = (e) => {   
        if (e.target.firstChild != undefined) {
            if (e.target.firstChild.style.transition != 'all .2s linear') {
                e.target.firstChild.style.transition = 'all .2s linear';
            } 
            if (e.target.firstChild.style.left == '') {
                e.target.firstChild.style.left = '15px';
            }
            if (e.target.firstChild.style.left == '15px'){
                e.target.firstChild.style.left = '-60px';
                e.target.children[1].style.left = '82%';
                e.target.parentNode.style.background = '#FF9C68';
            }
            else {
                e.target.firstChild.style.left = '15px';
                e.target.children[1].style.left = '100%';
                e.target.parentNode.style.background = 'none';
            }
        }
    }
    return (
        <div className="notification-side">
            <div className="close-icon_box">
                <img src={close_icon} alt="close-icon" width={20} onClick={(e)=>{
                    e.target.parentNode.parentNode.parentNode.previousSibling.firstChild.click();
                }}/>
            </div>
            <div className="notification_title">
                <h1>Уведомление</h1>
            </div>
            <div className="notification_list">
                <div onClick={handleNotificationDelete}>
                    <NotificationItem></NotificationItem>
                </div>
                <div onClick={handleNotificationDelete}>
                    <NotificationItem></NotificationItem>
                </div>
            </div>
        </div>
    )
}

export default Notification