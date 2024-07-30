import React, { useState, useEffect } from "react";
import productsData from "./products.json";
import Card from "./card.jsx";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    setProducts(productsData.products);
  }, []);

  useEffect(() => {
    // Establecer el producto seleccionado después de cargar los productos
    if (products.length > 0) {
      setSelectedProduct(products[0]); // Cambia el índice si quieres un producto diferente por defecto
    }
  }, [products]);

  const handleCardClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div id="products" className="container-products w-full p-6">
      <section className="flex justify-center mb-8">
        <h4 className="text-4xl font-bold">Menú</h4>
      </section>

      <section className="container-cards flex flex-wrap gap-6 justify-center">
        {products.map(product => (
          <Card
            key={product.id}
            product={product}
            onClick={() => handleCardClick(product)}
          />
        ))}
      </section>

      {selectedProduct && (
        <section className="select-product flex flex-col items-center mt-10">
          <img
            className="w-full max-w-md md:max-w-lg lg:max-w-xl mb-6 rounded-lg"
            src={selectedProduct.img}
            alt={selectedProduct.title}
          />
          <div className="text-center max-w-md">
            <h4 className="text-2xl md:text-3xl font-bold mb-2">
              {selectedProduct.title}
            </h4>
            <p className="text-base md:text-lg">{selectedProduct.description}</p>
          </div>
        </section>
      )}
    </div>
  );
};

export default Products;