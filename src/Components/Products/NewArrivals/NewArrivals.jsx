import React from "react";
import cssstyle from "./NewArrivals.module.css";
import { NavLink } from "react-router-dom";
import fleurDeLune from "../../../assets/fleur-de-lune.webp";
import santalParchment from "../../../assets/santal-parchment.webp";
import solDor from "../../../assets/sol-dor.webp";

export default function NewArrivals() {
    const collections = [
        {
            id: 1,
            name: "FLORAL NOTES",
            notes: "JASMINE, ROSE & BLOSSOM",
            image: fleurDeLune,
        },
        {
            id: 2,
            name: "WOODY ACCORDS",
            notes: "SANDALWOOD, CEDAR & OUD",
            image: santalParchment,
        },
        {
            id: 3,
            name: "FRESH BLENDS",
            notes: "BERGAMOT, CITRUS & SEA SALT",
            image: solDor,
        },
    ];
    return (
        <section className={cssstyle.collections}>
            <div className="container">
                <div className={cssstyle.sectionHeader}>
                    <p>THE WORLD OF ÉLORA</p>
                    <h2>DISCOVER YOUR SIGNATURE SCENT</h2>
                    <span>
                        Explore fragrances crafted to express your individuality.
                    </span>
                </div>
                <div className="row g-4">
                    {collections.map((item) => (
                        <div
                            className="col-12 col-md-6 col-lg-4"
                            key={item.id}
                        >
                            <NavLink
                                to="/products"
                                className={cssstyle.collectionCard}
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                />
                                <div className={cssstyle.overlay}></div>
                                <div className={cssstyle.cardContent}>
                                    <p>{item.notes}</p>
                                    <h3>{item.name}</h3>
                                    <span>
                                        EXPLORE COLLECTION →
                                    </span>
                                </div>
                            </NavLink>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
