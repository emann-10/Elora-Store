import fleurDeLune from "../assets/fleur-de-lune.webp";
import santalParchment from "../assets/santal-parchment.webp";
import noirCocoon from "../assets/noir-cocoon.webp";
import solDor from "../assets/sol-dor.webp";
import perfume1 from "../assets/perfume1.webp";
import roseAbsolute from "../assets/rose-absolute.webp";

const products = [
    {
        id: 1,
        name: "Fleur de Lune",
        price: 195,
        category: "Floral",
        description: "A luminous floral composition of jasmine.",
        detailsDescription:"A luminous floral fragrance that captures the delicate beauty of a moonlit garden. Elegant jasmine blends with soft floral nuances to create a graceful and enchanting scent, perfect for those who love timeless femininity.",
        image: fleurDeLune,
    },
    {
        id: 2,
        name: "Santal Parchment",
        price: 220,
        category: "Woody",
        description: "Warm sandalwood layered with cardamom.",
        detailsDescription:"A warm and sophisticated composition where creamy sandalwood meets the gentle spice of cardamom. Smooth, comforting, and effortlessly elegant, this fragrance leaves behind a refined impression of understated luxury.",
        image: santalParchment,
    },
    {
        id: 3,
        name: "Noir Cocoon",
        price: 240,
        category: "Oriental",
        description: "An oriental blend of tobacco and amber.",
        detailsDescription:"Deep and captivating, Noir Cocoon wraps the senses in the rich warmth of tobacco and amber. Its mysterious character creates an intimate and luxurious presence, perfect for those drawn to bold and distinctive fragrances.",
        image: noirCocoon,
    },
    {
        id: 4,
        name: "Sol d'Or",
        price: 185,
        category: "Fresh",
        description: "A fresh coastal blend of bergamot.",
        detailsDescription:"Inspired by the warmth of golden sunshine and the freshness of a coastal breeze, Sol d'Or opens with the vibrant character of bergamot. Bright, refreshing, and effortlessly uplifting, it brings a touch of sunshine to every moment.",
        image: solDor,
    },
    {
        id: 5,
        name: "Midnight Bloom",
        price: 210,
        category: "Floral",
        description: "A delicate fragrance with a floral heart.",
        detailsDescription:"A delicate floral fragrance inspired by the beauty of flowers after dark. Soft and graceful, Midnight Bloom reveals a romantic character that feels both modern and timeless, leaving a subtle yet memorable impression.",
        image: perfume1,
    },
    {
        id: 6,
        name: "Rose Absolute",
        price: 230,
        category: "Floral",
        description: "An elegant rose fragrance with soft notes.",
        detailsDescription:"An elegant celebration of the timeless beauty of rose. Rich floral character meets a soft and delicate finish, creating a sophisticated fragrance that feels romantic, graceful, and beautifully feminine.",
        image: roseAbsolute,
    },
];
export default products;
