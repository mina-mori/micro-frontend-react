import React, { useEffect, useState } from 'react';
import styles from './ProductDetails.module.css';
import ProductService from '../../services/Product.service';
import { useParams } from 'react-router-dom';
interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

const ProductDetails: React.FC = () => {
  const { id } = useParams();
  const { getProduct } = ProductService();
  const [product, setProduct] = useState<Product>();
  useEffect(() => {
    const fetchData = async () => {
      const p = await getProduct(id ?? '');
      setProduct(p);
    };
    fetchData();
  }, []);
  return (
    <div className={styles.productDetails}>
      <h1 className={styles.h1}>{product?.name}</h1>
      <img className={styles.img} src={product?.image} alt={product?.name} />
      <p className={styles.p}>{product?.description}</p>
      <p className={styles.p}>Price: ${product?.price}</p>
    </div>
  );
};

export default ProductDetails;
