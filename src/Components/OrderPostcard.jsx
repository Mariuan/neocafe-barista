import React, { useState } from 'react';
import close from './media/coolicon.svg';
import './CSS/postcard.css';

const OrderPostcard = ({status}) => {
    const [stat, setStat] = useState(status);
    if (stat === 'new') {
        return (
            <div className="order-postcard_box">
            <div className="postcard_header newOrder">
                <div className="high-side">
                    <div className="order-id"><h2>M-47</h2></div>
                    <div className="close-postcard"><img src={close} alt="close icon" className="close-icon"/></div>
                </div>
                <div className="low-side">
                    <div className="waiter-name"><h2>Алибек</h2></div>
                    <div className="order-time"><h2>13:56</h2></div>
                </div>
            </div>
            <div className="postcard_body">
                <div className="empty-box"></div>
                <div className="postcard-consist">
                    <div className="consist_header">
                        <div className="consist_name"><p>Капучино</p></div>
                        <div className="consist_quantity"><p>X1</p></div>
                    </div>
                    <ul>
                        <li>М (350 мл)</li>
                        <li>Карамельный сироп</li>
                    </ul>
                </div>
                <div className="postcard-consist">
                    <div className="consist_header">
                        <div className="consist_name"><p>Латте</p></div>
                        <div className="consist_quantity"><p>X1</p></div>
                    </div>
                    <ul>
                        <li>М (350 мл)</li>
                        <li>Карамельный сироп</li>
                    </ul>
                </div>
                <div className="postcard-consist">
                    <div className="consist_header">
                        <div className="consist_name"><p>Капучино</p></div>
                        <div className="consist_quantity"><p>X1</p></div>
                    </div>
                    <ul>
                        <li>М (350 мл)</li>
                        <li>Карамельный сироп</li>
                    </ul>
                </div>
            </div>
            <div className="postcard_footer">
                <button className="postcard-button newButton" onClick={(e)=>{
                    setStat('inProcess');
                }}>Принять</button>
            </div>
        </div>
        );
    }
    else if (stat === 'inProcess') {
        return (
            <div className="order-postcard_box">
                <div className="postcard_header inProcessOrder">
                    <div className="high-side">
                        <div className="order-id"><h2>M-47</h2></div>
                        <div className="close-postcard"><img src={close} alt="close icon" className="close-icon"/></div>
                    </div>
                    <div className="low-side">
                        <div className="waiter-name"><h2>Алибек</h2></div>
                        <div className="order-time"><h2>13:56</h2></div>
                    </div>
                </div>
                <div className="postcard_body">
                    <div className="empty-box"></div>
                    <div className="postcard-consist">
                        <div className="consist_header">
                            <div className="consist_name"><p>Капучино</p></div>
                            <div className="consist_quantity"><p>X1</p></div>
                        </div>
                        <ul>
                            <li>М (350 мл)</li>
                            <li>Карамельный сироп</li>
                        </ul>
                    </div>
                    <div className="postcard-consist">
                        <div className="consist_header">
                            <div className="consist_name"><p>Латте</p></div>
                            <div className="consist_quantity"><p>X1</p></div>
                        </div>
                        <ul>
                            <li>М (350 мл)</li>
                            <li>Карамельный сироп</li>
                        </ul>
                    </div>
                    <div className="postcard-consist">
                        <div className="consist_header">
                            <div className="consist_name"><p>Капучино</p></div>
                            <div className="consist_quantity"><p>X1</p></div>
                        </div>
                        <ul>
                            <li>М (350 мл)</li>
                            <li>Карамельный сироп</li>
                        </ul>
                    </div>
                </div>
                <div className="postcard_footer">
                    <button className="postcard-button inProcessButton" onClick={()=>{
                        setStat('ready');
                    }}>Завершить</button>
                </div>
            </div>
        )
    }
    else if (stat === 'ready') {
        return (
            <div className="order-postcard_box">
                <div className="postcard_header readyOrder">
                    <div className="high-side">
                        <div className="order-id"><h2>M-47</h2></div>
                        <div className="close-postcard"><img src={close} alt="close icon" className="close-icon"/></div>
                    </div>
                    <div className="low-side">
                        <div className="waiter-name"><h2>Алибек</h2></div>
                        <div className="order-time"><h2>13:56</h2></div>
                    </div>
                </div>
                <div className="postcard_body">
                    <div className="empty-box"></div>
                    <div className="postcard-consist">
                        <div className="consist_header">
                            <div className="consist_name"><p>Капучино</p></div>
                            <div className="consist_quantity"><p>X1</p></div>
                        </div>
                        <ul>
                            <li>М (350 мл)</li>
                            <li>Карамельный сироп</li>
                        </ul>
                    </div>
                    <div className="postcard-consist">
                        <div className="consist_header">
                            <div className="consist_name"><p>Латте</p></div>
                            <div className="consist_quantity"><p>X1</p></div>
                        </div>
                        <ul>
                            <li>М (350 мл)</li>
                            <li>Карамельный сироп</li>
                        </ul>
                    </div>
                    <div className="postcard-consist">
                        <div className="consist_header">
                            <div className="consist_name"><p>Капучино</p></div>
                            <div className="consist_quantity"><p>X1</p></div>
                        </div>
                        <ul>
                            <li>М (350 мл)</li>
                            <li>Карамельный сироп</li>
                        </ul>
                    </div>
                </div>
                <div className="postcard_footer">
                    <button className="postcard-button readyButton">Готово</button>
                </div>
            </div>
        )
    }
    else if (stat === 'cancelled') {
        return (
            <div className="order-postcard_box">
                <div className="postcard_header cancelledOrder">
                    <div className="high-side">
                        <div className="order-id"><h2>M-47</h2></div>
                        <div className="close-postcard"><img src={close} alt="close icon" className="close-icon"/></div>
                    </div>
                    <div className="low-side">
                        <div className="waiter-name"><h2>Алибек</h2></div>
                        <div className="order-time"><h2>13:56</h2></div>
                    </div>
                </div>
                <div className="postcard_body">
                    <div className="empty-box"></div>
                    <div className="postcard-consist">
                        <div className="consist_header">
                            <div className="consist_name"><p>Капучино</p></div>
                            <div className="consist_quantity"><p>X1</p></div>
                        </div>
                        <ul>
                            <li>М (350 мл)</li>
                            <li>Карамельный сироп</li>
                        </ul>
                    </div>
                    <div className="postcard-consist">
                        <div className="consist_header">
                            <div className="consist_name"><p>Латте</p></div>
                            <div className="consist_quantity"><p>X1</p></div>
                        </div>
                        <ul>
                            <li>М (350 мл)</li>
                            <li>Карамельный сироп</li>
                        </ul>
                    </div>
                    <div className="postcard-consist">
                        <div className="consist_header">
                            <div className="consist_name"><p>Капучино</p></div>
                            <div className="consist_quantity"><p>X1</p></div>
                        </div>
                        <ul>
                            <li>М (350 мл)</li>
                            <li>Карамельный сироп</li>
                        </ul>
                    </div>
                </div>
                <div className="postcard_footer">
                    <button className="postcard-button cancelledButton">Заказ отменен</button>
                </div>
            </div>
        )
    }
    else if (stat === 'done') {
        return (
            <div className="order-postcard_box">
                <div className="postcard_header doneOrder">
                    <div className="high-side">
                        <div className="order-id"><h2>M-47</h2></div>
                        <div className="close-postcard"><img src={close} alt="close icon" className="close-icon"/></div>
                    </div>
                    <div className="low-side">
                        <div className="waiter-name"><h2>Алибек</h2></div>
                        <div className="order-time"><h2>13:56</h2></div>
                    </div>
                </div>
                <div className="postcard_body">
                    <div className="empty-box"></div>
                    <div className="postcard-consist">
                        <div className="consist_header">
                            <div className="consist_name"><p>Капучино</p></div>
                            <div className="consist_quantity"><p>X1</p></div>
                        </div>
                        <ul>
                            <li>М (350 мл)</li>
                            <li>Карамельный сироп</li>
                        </ul>
                    </div>
                    <div className="postcard-consist">
                        <div className="consist_header">
                            <div className="consist_name"><p>Латте</p></div>
                            <div className="consist_quantity"><p>X1</p></div>
                        </div>
                        <ul>
                            <li>М (350 мл)</li>
                            <li>Карамельный сироп</li>
                        </ul>
                    </div>
                    <div className="postcard-consist">
                        <div className="consist_header">
                            <div className="consist_name"><p>Капучино</p></div>
                            <div className="consist_quantity"><p>X1</p></div>
                        </div>
                        <ul>
                            <li>М (350 мл)</li>
                            <li>Карамельный сироп</li>
                        </ul>
                    </div>
                </div>
                <div className="postcard_footer">
                    <button className="postcard-button doneButton">Заказы закрыт</button>
                </div>
            </div>
        )
    }
}

export default OrderPostcard
