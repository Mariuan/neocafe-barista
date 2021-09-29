import React from 'react'
import './CSS/productItemDrink.css';
import OptionIcon from './media/DotsThreeCircle.svg';
import Expresso from './media/expresso.svg';

const ProductItemDrink = () => {
    return (
        <div className="product-item-box">
            <div className="product-item">
                <div className="high-side">
                    <div className="product-img">
                        <img src={Expresso} alt="expresso-icon" width={120}/>
                    </div>
                    <div className="product-info">
                        <div className="product-title">
                            <h2>Экспрессо</h2>
                            <img src={OptionIcon} alt="ThreeCircleDots" style={{cursor: "pointer", margin: "15px"}} width={35}/>
                        </div>
                        <div className="empty-box"></div>
                    </div>
                </div>
                <div className="low-side">
                    <div className="product-size s-box">
                        <p>S</p>
                        <p>(250 мл)</p>
                        <p>65 с</p>
                    </div>
                    <div className="product-size m-box">
                        <p>S</p>
                        <p>(250 мл)</p>
                        <p>65 с</p>
                    </div>
                    <div className="product-size l-box">
                        <p>S</p>
                        <p>(250 мл)</p>
                        <p>65 с</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductItemDrink;
