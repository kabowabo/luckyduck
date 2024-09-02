import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const ProductPage = () => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [cart, setCart] = useState([]);
  
  const location = useLocation();
  const product = location.state?.product;

  if (!product) {
    return <div>No product details available</div>;
  }

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    if (selectedSize) {
      const newItem = { ...product, size: selectedSize };
      setCart([...cart, newItem]);
      alert(`Added ${product.name} (Size: ${selectedSize}) to cart`);
    } else {
      alert('Please select a size');
    }
  };

  const sizes = ['s', 'm', 'l', 'xl', 'xxl'];

  return (
    <div className="product-page">
      <div className="product-carousel">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <ol className="carousel-indicators">
            {product.images.map((_, index) => (
              <li key={index} data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index} className={index === 0 ? 'active' : ''}></li>
            ))}
          </ol>
          <div className="carousel-inner">
            {product.images.map((imgSrc, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                <img className="d-block w-100" src={imgSrc} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true">&lt;</span>
            <span className="visually-hidden">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true">&gt;</span>
            <span className="visually-hidden">Next</span>
          </a>
        </div>
      </div>

      <div className="product-description">
        <div className="pr-title">
          <h1>{product.description}</h1>
          <div className="product-status"><p>Sold Out</p></div>
        </div>
        <div className="box">
          <div className="price"><p>${product.price}</p></div>
          <div className="size">
            {sizes.map((size) => (
              <a 
                key={size} 
                className={`onesie ${selectedSize === size ? 'selected' : ''}`} 
                onClick={() => handleSizeClick(size)}
                href="javascript:void(0)"
              >
                {size}
              </a>
            ))}
          </div>
          <a className="atc" href="javascript:void(0)" onClick={handleAddToCart}>Add to Cart</a>
        </div>
        <div className="about">
          <p>About</p>
          <p>{product.about}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
