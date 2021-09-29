import React from 'react'
import food_kruassan from './media/food-kruassan.svg';
import DotsThreeCircle from './media/DotsThreeCircle.svg';
import './CSS/productItemFood.css';

const ProductItemFood = () => {
    return (
        <div className="productItemBox">
            <div className="productItemFood">
                <div className="high-side">
                    <div className="product-item_name">
                        <h2>Круассан</h2>
                    </div>
                    <div className="product-item_option">
                        <img src={DotsThreeCircle} alt="ThreeDotsCircle" className="threeDots"/>
                    </div>
                </div>
                <div className="low-side">
                    <div className="product-item_prise">
                        <h2>140 с</h2>
                    </div>
                    <div className="product-item_img">
                        <img src={food_kruassan} alt="kruassan-img"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductItemFood
