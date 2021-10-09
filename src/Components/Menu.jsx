import React, { useState, useEffect } from "react";
import ProductItemDrink from "./ProductItemDrink";
import "./CSS/menu.css";

const categories = [
  { id: 1, title: "Кофе" },
  { id: 2, title: "Чай" },
  { id: 3, title: "Напитки" },
  { id: 4, title: "Выпечка" },
  { id: 5, title: "Десерты" },
];

const products = [
  { id: 1, title: "Чай", price: 200, categoryId: 2 },
  { id: 2, title: "Кофе", price: 100, categoryId: 1 },
  { id: 3, title: "Мохито", price: 100, categoryId: 3 },
  { id: 4, title: "Чизкейк", price: 250, categoryId: 4 },
  { id: 5, title: "Медовик", price: 130, categoryId: 5 },
  { id: 6, title: "Круассан", price: 140, categoryId: 5 },
];

const getProductsByCategory = (categoryId) => {
  return Promise.resolve(
    products.filter((product) => product.categoryId === categoryId)
  );
};

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    getProductsByCategory(selectedCategory).then((r) => setProductsList(r));
  }, [selectedCategory]);

  return (
    <div className="menu">
      <div className="menu_title">
        <h1>Меню</h1>
      </div>
      <div className="categories">
        {categories.map(({ id, title }) => (
          <MenuCategory
            key={id}
            title={title}
            onClick={() => setSelectedCategory(id)}
            isActive={selectedCategory === id}
          />
        ))}
      </div>
      <div className="menu_content">
        {productsList.map((product) => (
          <ProductItemDrink data={product} />
        ))}
      </div>
    </div>
  );
};

const MenuCategory = ({ onClick, title, isActive }) => (
  <div
    className={`category_item ${isActive && "category_item-picked"}`}
    onClick={onClick}
  >
    <h2>{title}</h2>
  </div>
);

export default Menu;
