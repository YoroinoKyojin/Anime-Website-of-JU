import React from "react";
import { useNavigate } from "react-router-dom";
import "./CategoryCard.css";

const CategoryCard = ({ image, title, path }) => {
  const navigate = useNavigate();

  return (
    <div className="category-card" onClick={() => navigate(path)}>
      <img src={image} alt={title} className="category-image" />
      <div className="category-overlay">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default CategoryCard;
