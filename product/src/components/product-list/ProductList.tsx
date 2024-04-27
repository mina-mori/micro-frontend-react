import React, { useEffect, useState } from 'react';
import styles from './ProductList.module.css';
import ProductService from '../../services/Product.service';
interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

const ProductList: React.FC = () => {
  const { getProducts } = ProductService();
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const products = await getProducts();
      setProducts(products);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h3>Product List</h3>
      <ul className={styles.ul}>
        {products.map((product) => (
          <li className={styles.li} key={product.id}>
            <img src={product.image} alt={product.name} />
            <b>{product.name}</b>
            <p className={styles.p}>{product.description}</p>
            <hr />
            <p>
              <b>Price:</b> ${product.price}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
