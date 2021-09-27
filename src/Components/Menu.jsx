import React, { useState } from 'react';
import ProductItem from './ProductItem';
import './CSS/menu.css'

const Menu = () => {
    const [ category, setCategory ] = useState('coffee');

    const handleCategoryState = (e) => {
        const items = document.querySelectorAll('.category_item');
        items.forEach((item)=>{
            item.classList.remove('picked');
        })
        e.target.classList.add('picked');
        setCategory(e.target.classList[1]);
    }

    return (
        <div className="menu">
            <div className="categories">
                <div className="category_item coffee picked" onClick={handleCategoryState}><h2>Кофе</h2></div>
                <div className="category_item tea" onClick={handleCategoryState}><h2>Чай</h2></div>
                <div className="category_item drinks" onClick={handleCategoryState}><h2>Напитки</h2></div>
                <div className="category_item bake" onClick={handleCategoryState}><h2>Выпечка</h2></div>
                <div className="category_item dessert" onClick={handleCategoryState}><h2>Десерты</h2></div>
            </div>
            <div className="category-type_items">
                <ProductItem></ProductItem>
                <ProductItem></ProductItem>
                <ProductItem></ProductItem>
                <ProductItem></ProductItem>
                <ProductItem></ProductItem>
                <ProductItem></ProductItem>
            </div>
        </div>
    )
}

export default Menu
