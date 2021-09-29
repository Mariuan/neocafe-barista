import React, { useState } from 'react'
import OrderPostcard from './OrderPostcard';
import './CSS/orders.css';

const OrdersIn = () => {
    const [ orderStatus, setOrderStatus ] = useState('all');
    const handleStatus = (e) => {
        const items = document.querySelectorAll('.order-status');
        items.forEach((item)=> {
            item.classList.remove('picked');
        });
        e.target.classList.add('picked');
        setOrderStatus(e.target.classList[1]);
    }
    return (
        <div className="ordersIn">
            <div className="orders-status-line">
                <div className="order-status all picked" onClick={handleStatus}>
                    <div className="status-circle white" style={{background: '#fff'}}></div>
                    <p>Все</p>
                </div>
                <div className="order-status new" onClick={handleStatus}>
                    <div className="status-circle red" style={{background: '#ff0000'}}></div>
                    <p>Новый</p>
                </div>
                <div className="order-status inProcess" onClick={handleStatus}>
                    <div className="status-circle yellow" style={{background: '#fff500'}}></div>
                    <p>В процессе</p>
                </div>
                <div className="order-status ready" onClick={handleStatus}>
                    <div className="status-circle green" style={{background: '#90ed20'}}></div>
                    <p>Готово</p>
                </div>
                <div className="order-status cancelled" onClick={handleStatus}>
                    <div className="status-circle grey" style={{background: '#262626'}}></div>
                    <p>Отменено</p>
                </div>
                <div className="order-status done" onClick={handleStatus}>
                    <div className="status-circle orange" style={{background: '#ff9900'}}></div>
                    <p>Завершенно</p>
                </div>
            </div>
            <div className="order-postcards">
                <OrderPostcard status="new"></OrderPostcard>
                <OrderPostcard status="new"></OrderPostcard>
                <OrderPostcard status="inProcess"></OrderPostcard>
                <OrderPostcard status="ready"></OrderPostcard>
                <OrderPostcard status="ready"></OrderPostcard>
                <OrderPostcard status="cancelled"></OrderPostcard>
                <OrderPostcard status="done"></OrderPostcard>
            </div>
        </div>
    )
}

export default OrdersIn
