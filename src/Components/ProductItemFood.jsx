import React from 'react'
import food_kruassan from './media/food-kruassan.svg';
import Info_icon from './media/Info.svg';
import Ellipse from './media/menu-item-ellipse.svg';
import './CSS/productItemFood.css';

const ProductItemFood = () => {
    return (
        <div className="product-item-box">
            <div className="productItemFood">
                <img src={Ellipse} alt="menu-item-ellipse" className="menu-item-ellipse" width={120}/>
                <div className="high-side">
                    <div className="item_title">
                        <p>Круассан</p>
                    </div>
                    <div className="item_info-icon">
                        <img src={Info_icon} alt="info-icon"/>
                    </div>
                </div>
                <div className="low-side">
                    <div className="item_image">
                        <img src={food_kruassan} alt="Expresso-image" width={84}/>
                    </div>
                    <div className="item_price">
                        <p>140 с</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductItemFood
