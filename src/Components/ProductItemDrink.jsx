import React, { useState } from "react";
import "./CSS/productItemDrink.css";
import Info_icon from "./media/Info.svg";
import Kapuchino from "./media/kapuchino.svg";
import Ellipse from "./media/menu-item-ellipse.svg";
import MenuModalWindow from "./MenuModalWindow";

const ProductItemDrink = ({ data }) => {
  const { id, title, price } = data;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="product-item-box">
      {isModalOpen && (
        <MenuModalWindow productId={id} closeModal={closeModal} />
      )}
      <div className="product-item" onClick={openModal}>
        <img
          src={Ellipse}
          alt="menu-item-ellipse"
          className="menu-item-ellipse"
          width={120}
        />
        <div className="high-side">
          <div className="item_title">
            <p>{title}</p>
          </div>
          <div className="item_info-icon">
            <img src={Info_icon} alt="info-icon" className="item_info-icon-checkng"/>
          </div>
        </div>
        <div className="low-side">
        <div className="item_image">
            <img src={Kapuchino} alt="kapuchino" className="item_image" width={70}/>
          </div>
          <div className="item_price">
            <p>{price} с</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProductItemDrink;
