import jacket from './jacket1.jpg'
import hoodie from './hoodie1.avif'
import tshirt from './tshirt3.jpg'
import tshirt2 from './tshirt4.jpg'
import denim_jacket from './denim_jacket.jpg'
import os_tshirt from './os_tshirt.avif'
import os_tshirt2 from './os_tshirt2.avif'
import kid1 from './kid_1.jpg'
import kid2 from './kid_2.jpg'
import kid3 from './kid_3.jpg'
import kid4 from './kid_4.jpg'

export const clothes = [
    {
        id: "1",
        name: "Bomber Jacket",
        price: "499",
        old_price: "699",
        stock: 250,
        gender:'male',
        category: 'jacket',
        sizes: ["s", "m", "l", "xl"],
        image_url: jacket,
        rating: "4/5",
        brand: "levi's",
        description: 'A sleek bomber jacket with a relaxed fit',
        is_new: false,
        arrival_date:"2024-12-21"
    },
    {
        id: "2",
        name: "Hoodie",
        price: "499",
        old_price: "699",
        stock: 50,
        gender:'male',
        category: 'shirt',
        sizes: ["s", "m", "l", "xl"],
        image_url: hoodie,
        rating: "3.5/5",
        brand: "Soul Store",
        description: 'warm hoodie for cold weather and comfort fit',
        is_new: false,
        arrival_date:"2025-03-21"
    },
    {
        id: "3",
        name: "T-Shirt",
        price: "499",
        old_price: "699",
        stock: 4,
        gender:'male',
        category: 'tshirt',
        sizes: ["s", "m", "l", "xl"],
        image_url: tshirt,
        rating: "4.5",
        brand: "H&M",
        description: 'Bold graphic tee with vibrant print, made from breathable cotton.',
        is_new: false,
        arrival_date:"2025-01-21"
    },
    {
        id: "4",
        name: "Tshirt Trendy",
        price: "499",
        old_price: "699",
        stock: 250,
        gender:'female',
        category: 'tshirt',
        sizes: ["s", "m", "l", "xl"],
        image_url: tshirt2,
        rating: "5/5",
        brand: "Zara",
        description: 'Oversized tee with a modern fit, perfect for streetwear looks.',
        is_new: true,
        arrival_date:"2024-03-20"
    },
    {
        id: "5",
        name: "Classic Denim Jacket",
        price: "499.99",
        old_price: "699.99",
        image_url: denim_jacket,
        rating: "4.0",
        category: "Jacket",
        description: "A timeless denim jacket with a relaxed fit, perfect for casual outings.",
        stock: 25,
        gender:'male',
        brand: "Levi's",
        sizes: ["S", "M", "L", "XL"],
        is_new: true,
        arrival_date: "2025-03-15"
    },
    {
        id:"6",
        name:"OverSized T-Shirt for women",
        price:"599.99",
        old_price:"999.99",
        image_url:os_tshirt,
        rating:"4.5",
        category:"Oversized tshirt",
        description:"relaxed fit oversized tshirt, made with cotton",
        stock:100,
        gender:'female',
        brand:"H&M",
        sizes:['S','M','L','XL'],
        is_new:true,
        arrival_date:"2025-05-21"
    },
    {
        id:"7",
        name:"OverSized Fit for women",
        price:"599.99",
        old_price:"999.99",
        image_url:os_tshirt2,
        rating:"4.5",
        category:"Oversized tshirt",
        description:"relaxed fit oversized tshirt, made with cotton",
        stock:100,
        gender:'female',
        brand:"H&M",
        sizes:['S','M','L','XL'],
        is_new:true,
        arrival_date:"2025-05-21"
    },
    {
        id:"8",
        name:"outfit for kid",
        price:"399.99",
        old_price:"599.99",
        image_url:kid1,
        rating:"3.5",
        category:"kid clothing",
        description:"relaxed fit",
        stock:100,
        gender:"kid",
        brand:"zara",
        sizes:['S','M','L','XL'],
        is_new:false,
        arrival_date:"2025-02-20"
    },
    {
        id:"9",
        name:"outfit for kid",
        price:"399.99",
        old_price:"599.99",
        image_url:kid2,
        rating:"3.5",
        category:"kid clothing",
        description:"relaxed fit",
        stock:100,
        gender:"kid",
        brand:"zara",
        sizes:['S','M','L','XL'],
        is_new:false,
        arrival_date:"2025-02-20"
    },
    {
        id:"10",
        name:"outfit for kid",
        price:"399.99",
        old_price:"599.99",
        image_url:kid3,
        rating:"3.5",
        category:"kid clothing",
        description:"relaxed fit",
        stock:100,
        gender:"kid",
        brand:"zara",
        sizes:['S','M','L','XL'],
        is_new:false,
        arrival_date:"2025-02-20"
    },
    {
        id:"11",
        name:"outfit for kid",
        price:"399.99",
        old_price:"599.99",
        image_url:kid4,
        rating:"3.5",
        category:"kid clothing",
        description:"relaxed fit",
        stock:100,
        gender:"kid",
        brand:"zara",
        sizes:['S','M','L','XL'],
        is_new:false,
        arrival_date:"2025-02-20"
    },
    {
        id:"12",
        name:"outfit for kid",
        price:"399.99",
        old_price:"599.99",
        image_url:kid4,
        rating:"3.5",
        category:"kid clothing",
        description:"relaxed fit",
        stock:100,
        gender:"kid",
        brand:"zara",
        sizes:['S','M','L','XL'],
        is_new:false,
        arrival_date:"2025-02-20"
    },

]

export const reviews = [
    {id:1,name:"joel",review:"this product is good", date:"14 august"},
    {id:2,name:"billy",review:"this product is good", date:"14 august"}
]

export default clothes;