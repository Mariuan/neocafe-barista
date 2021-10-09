import React, { useState } from 'react';
import OrdersIn from './OrdersIn';
import OrdersOut from './OrdersOut';    
import './CSS/orders.css';


const Orders = () => {
    const [ place, setPlace ] = useState('in');

    return (
        <div className="orders">
            <div className="orders_title">
                <h1>Заказы</h1>
                <div className="orders-place">
                    <div className="orders-place_inner in place" onClick={(e)=>{
                        e.target.nextSibling.classList.remove('place');
                        e.target.classList.add('place');
                        setPlace('in');
                    }}>
                        <h2>В заведении</h2>
                    </div>
                    <div className="orders-place_inner out" onClick={(e)=>{
                        e.target.previousSibling.classList.remove('place');
                        e.target.classList.add('place');
                        setPlace('out');
                    }}>
                        <h2>На вынос</h2>
                    </div>
                </div>
            </div>
            <div className="order-content">
                {place === 'in' && <OrdersIn></OrdersIn>}
                {place === 'out' && <OrdersOut></OrdersOut>}
            </div>
        </div>
    )
}

export default Orders
