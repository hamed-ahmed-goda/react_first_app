import React from "react";
import "./Products.css";
import ProdQuatity from "../ProdQuantity/ProdQuantity";

const ProductCard = (props) => {
const { img, name, price, description, category }  = props.product
    return (
        <>
            <div className="card">
                <div className="img-wrapper">
                    <img src={img} alt="product-image" loading="lazy" />
                </div>
                <div className="content">
                    <p className="title">{name}</p>
                    <p className="desc">{description}</p>
                    <div className="details">
                        <div className="price">
                        <span>EGP</span>
                        <span>{price}</span>
                        </div>
                        <p>{category}</p>
                    </div>
                    <ProdQuatity/>
                </div>
            </div>
        </>
    );
};

export default ProductCard;