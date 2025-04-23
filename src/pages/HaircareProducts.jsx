// src/pages/HaircareProducts.js
import React from 'react';
import './HaircareProducts.css';

const products = [
  {
    name: "Biotin Shampoo",
    description: "Strengthens hair and promotes growth.",
    price: "$12.99",
    image: "/images/biotin-shampoo.jpg",
    link: "https://www.buywow.in/products/rosemary-with-biotin-shampoo-for-hair-growth-250-ml"
  },
  {
    name: "Argan Oil Conditioner",
    description: "Deeply moisturizes and repairs damaged hair.",
    price: "$14.99",
    image: "/images/argan-conditioner.jpg",
    link: "https://www.amazon.in/Khadi-Natural-Moroccan-Conditioner-310ML-Powered/dp/B09VKZK2QQ/ref=sr_1_6?dib=eyJ2IjoiMSJ9.PAlY_gpF8O6GA9YsKCuTCT62K9kWoT19jWDVyQJYl9adzzJ8LWlwKZ7R_ruVEuQWxQkrnL4WDHoUBvVQ92zqQtnUPQ54iWnDzV_GBhn6NUkHyfoQxGmsazOh6mk_CEzuDpTubAcVunflfeNoJnb3jt1GUrkmBzXpdg_E1eOLvrWIVBSCSDNQEPQ8h5Z6DBGNPDzHEzEsPF0Ogc9Pnd3Q_zJmutd-l6BclQ7eEAfJ0GUilyfwqf8_P2tUUCk5PK5jRZqRsVeYpE4X7pJpXYWMyhxpTN_Iu9EDcVG15AldB1M.5RVxmq0S3Z-jFOYNiDcSxQ570JsOWq8a9MO3zFYSC6I&dib_tag=se&keywords=argan+oil+moroccan&qid=1745404475&s=beauty&sr=1-6"
  },
  
];

const HaircareProducts = () => {
  return (
    <div className="products-container">
      <h1>🧴 Recommended Haircare Products</h1>
      <p>Enhance your hair growth journey with these top-rated products:</p>
      <div className="product-list">
        {products.map((item, index) => (
          <div className="product-card" key={index}>
            <div className="image-wrapper">
              <img src={item.image} alt={item.name} />
            </div>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p><strong>{item.price}</strong></p>
            <a href={item.link} target="_blank" rel="noopener noreferrer">Buy Now</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HaircareProducts;
