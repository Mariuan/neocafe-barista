import React, { useEffect, useState } from "react";
import Close from "./media/coolicon.svg";
import "./CSS/modal.css";

const products = [
  { id: 1, title: "Капучино", price: 200, categoryId: 2 },
  { id: 2, title: "Кофе", price: 100, categoryId: 1 },
  { id: 3, title: "Напитки", price: 150, categoryId: 3 },
  { id: 4, title: "Десерты", price: 250, categoryId: 4 },
  { id: 6, title: "Выпечка", price: 1230, categoryId: 5 },
  { id: 5, title: "Выпечка", price: 310, categoryId: 5 },
];

const getProductById = (id) => {
  return Promise.resolve(products.find((product) => product.id === id));
};

const MenuModalWindow = ({ productId, closeModal }) => {
  const [productData, setProductData] = useState();
  const [quantity, setQuantity ] = useState(1);
  useEffect(() => {
    getProductById(productId).then((r) => setProductData(r));
  }, [productId]);

  return (
    <div className="modalWindow_back">
      <div className="modalWindow_front">
        <div className="modalWindow_header">
          <img src={Close} alt="close-icon" onClick={closeModal}/>
        </div>
        {productData ? (
          <div>
            <div className="modalWindow_title">
              <p>{productData.title} {productData.price} с</p>
            </div>
            <form>
              <p className="modalWindow_form-title">Дополнительно</p>
              <div className="input-box">
                <input type="checkbox" name="Шоколадный сироп"/>
                <p className="modalWindow_input-name">Шоколадный сироп</p>
                <p className="modalWindow_input-price">+15c</p>
              </div>
              <div className="input-box">
                <input type="checkbox" name="Карамельный сироп" />
                <p className="modalWindow_input-name">карамельный сироп</p>
                <p className="modalWindow_input-price">+15c</p>
              </div>
              <div className="input-box">
                <input type="checkbox" name="Карамельный сироп" />
                <p className="modalWindow_input-name">карамельный сироп</p>
                <p className="modalWindow_input-price">+15c</p>
              </div>
              <div className="modalWindow_finalBox">
                <p className="final_title">Итого:</p>
                <p className="final_price">125 c</p>
              </div>
              <div className="modalWindow_submitButtons">
              <div className="modalWindow_finalQuantity">
                  <button className="quantity-state-control-button minus" onClick={(e)=>{
                    e.preventDefault();
                    setQuantity(quantity-1);
                    }}>-</button>
                  <div className="quantity-state">
                    <p className="quantity-title">{quantity}</p>
                  </div>
                  
                  <button className="quantity-state-control-button plus" onClick={(e)=>{
                    e.preventDefault();
                    setQuantity(quantity+1);
                    }}>+</button>
                </div>
                <button type="submit" className="modalWindow_add-button">Добавить</button>
              </div>
            </form>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default MenuModalWindow;
