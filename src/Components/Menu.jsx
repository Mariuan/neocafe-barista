import React, { useState } from 'react';
import ProductItemDrink from './ProductItemDrink';
import ProductItemFood from './ProductItemFood';
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
            <div className="menu_title">
                <h1>Меню</h1>
            </div>
            <div className="categories">
                <div className="category_item coffee picked" onClick={handleCategoryState}><h2>Кофе</h2></div>
                <div className="category_item tea" onClick={handleCategoryState}><h2>Чай</h2></div>
                <div className="category_item drinks" onClick={handleCategoryState}><h2>Напитки</h2></div>
                <div className="category_item bake" onClick={handleCategoryState}><h2>Выпечка</h2></div>
                <div className="category_item dessert" onClick={handleCategoryState}><h2>Десерты</h2></div>
            </div>
            { category === 'coffee' && 
            <>
                <div className="category-type_items cofee">
                    <ProductItemDrink></ProductItemDrink>
                    <ProductItemDrink></ProductItemDrink>
                    <ProductItemDrink></ProductItemDrink>
                    <ProductItemDrink></ProductItemDrink>
                    <ProductItemDrink></ProductItemDrink>
                    <ProductItemDrink></ProductItemDrink>
                    <ProductItemDrink></ProductItemDrink>
                    <ProductItemDrink></ProductItemDrink>
                    <ProductItemDrink></ProductItemDrink>
                </div>
            </>}
            {category === 'tea' &&
            <>
                <div className="category-type_items tea">
                    <ProductItemDrink></ProductItemDrink>
                </div>
            </>}

            {category === 'drinks' &&
            <>
                <div className="category-type_items drinks">
                    <ProductItemDrink></ProductItemDrink>
                    <ProductItemDrink></ProductItemDrink>
                    <ProductItemDrink></ProductItemDrink>
                </div>
            </>}

            {category === 'bake' &&
            <>
                <div className="category-type_items bake">
                    <ProductItemFood></ProductItemFood>
                    <ProductItemFood></ProductItemFood>
                    <ProductItemFood></ProductItemFood>
                </div>
            </>}

            {category === 'dessert' &&
            <>
                <div className="category-type_items dessert">
                    <ProductItemFood></ProductItemFood>
                    <ProductItemFood></ProductItemFood>
                </div>
            </>}
        </div>
    )
}

export default Menu
