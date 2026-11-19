import React, { useState, useContext } from "react";
import cssstyle from "./AllProducts.module.css";
import { useNavigate } from "react-router-dom";
import products from "../../Data/Products";
import { AppContext } from "../../Context/AppContext";
export default function AllProducts() {
    const { addToCart, setShowCart } = useContext(AppContext);
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [sort, setSort] = useState("default");
    const categories = ["All", "Floral", "Woody", "Oriental", "Fresh"];
    const filteredProducts = products
        .filter((product) => {
            const matchesSearch =
                product.name.toLowerCase().includes(search.toLowerCase());

            const matchesCategory =
                category === "All" || product.category === category;

            return matchesSearch && matchesCategory;
        })
        .sort((a, b) => {
            if (sort === "low") return a.price - b.price;
            if (sort === "high") return b.price - a.price;
            if (sort === "name") return a.name.localeCompare(b.name);
            return 0;
        });

    return (
        <div className={cssstyle.allProducts}>
            <section className={cssstyle.pageHeader}>
                <div className="container text-center">
                    <p className={cssstyle.eyebrow}>OUR COLLECTION</p>
                    <h1>All Fragrances</h1>
                    <p className={cssstyle.headerDescription + " mx-auto"}>
                        Discover your signature scent from our curated
                        collection of unique fragrances.
                    </p>
                </div>
            </section>

            <section className={cssstyle.productsSection}>
                <div className="container">
                    <div className={cssstyle.toolbar}>
                        <div className={cssstyle.searchBox}>
                            <i className="bi bi-search"></i>
                            <input
                                type="text"
                                placeholder="Search fragrances..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>

                        <div className={cssstyle.filterRow}>
                            <span className={cssstyle.filterLabel}>
                                FILTER BY:
                            </span>

                            <div className={cssstyle.filterButtons}>
                                {categories.map((item) => (
                                    <button
                                        key={item}
                                        className={
                                            category === item
                                                ? cssstyle.activeFilter
                                                : ""
                                        }
                                        onClick={() => setCategory(item)}
                                    >
                                        {item}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                    <p className={cssstyle.resultsCount}>
                        SHOWING {filteredProducts.length} PRODUCTS
                    </p>
                    <div className="row g-4">
                        {filteredProducts.map((product) => (
                            <div
                                className="col-6 col-md-4 col-lg-3"
                                key={product.id}
                            >
                                <div className={cssstyle.productCard}>
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className={cssstyle.productImage}
                                    />

                                    <div className={cssstyle.productInfo}>
                                        <div className={cssstyle.productTop}>
                                            <span className={cssstyle.category}>
                                                {product.category}
                                            </span>

                                            <span className={cssstyle.price}>
                                                ${product.price}
                                            </span>
                                        </div>

                                        <h2>{product.name}</h2>

                                        <p className={cssstyle.description}>
                                            {product.description}
                                        </p>

                                        <div className={cssstyle.productActions}>
                                            <button
                                                className={cssstyle.detailsButton}
                                                onClick={() =>
                                                    navigate(`/products/${product.id}`)
                                                }
                                            >
                                                VIEW DETAILS
                                            </button>

                                            <button
                                                className={cssstyle.cartButton}
                                                onClick={() => {
                                                    addToCart(product);
                                                    setShowCart(true);
                                                }}
                                            >
                                                <i className="bi bi-bag"></i> ADD
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {filteredProducts.length === 0 && (
                            <div className="col-12 text-center py-5">
                                <h3>No fragrances found</h3>
                                <p>Try another search or category.</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}
