import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../../Data/Products";
import { AppContext } from "../../Context/AppContext";
import cssstyle from "./ProductDetails.module.css";

export default function ProductDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart, setShowCart } = useContext(AppContext);
    const product = products.find(
        (item) => item.id === Number(id)
    );
    const [quantity, setQuantity] = useState(1);
    if (!product) {
        return (
            <div className="container text-center py-5">
                <h2>Product Not Found</h2>
                <button onClick={() => navigate("/products")}>
                    Back to Products
                </button>
            </div>
        );
    }
    const handleAddToCart = () => {
        for (let i = 0; i < quantity; i++) {
            addToCart(product);
        }
        setShowCart(true);
    };
    return (
        <section className={cssstyle.productDetails}>
            <div className="container">
                <button
                    className={cssstyle.backButton}
                    onClick={() => navigate("/products")}
                >
                    ← BACK TO COLLECTION
                </button>
                <div className="row align-items-center g-2">
                    <div className="col-12 col-md-6">
                        <div className={cssstyle.imageWrapper}>
                            <img src={product.image} alt={product.name} />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className={cssstyle.productInfo}>
                            <p className={cssstyle.category}>
                                {product.category} FRAGRANCE
                            </p>
                            <h1>{product.name}</h1>
                            <p className={cssstyle.price}>
                                ${product.price}
                            </p>
                            <p className={cssstyle.description}>
                                {product.detailsDescription}
                            </p>
                            <div className={cssstyle.divider}></div>
                            <div className={cssstyle.quantitySection}>
                                <span>QUANTITY</span>
                                <div className={cssstyle.quantityControls}>
                                    <button
                                        onClick={() =>
                                            setQuantity((q) => Math.max(1, q - 1))
                                        }
                                    >
                                        -
                                    </button>
                                    <span>{quantity}</span>
                                    <button
                                        onClick={() => setQuantity((q) => q + 1)}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                            <button
                                className={cssstyle.addToCart}
                                onClick={handleAddToCart}
                            >
                                ADD TO BAG — ${(product.price * quantity).toFixed(2)}
                            </button>
                            <p className={cssstyle.note}>
                                A signature scent, thoughtfully crafted for you.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
