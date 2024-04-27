const ProductService = () => {
  const allProducts = [
    {
      id: '1',
      name: 'Product 1',
      price: 100,
      description: 'This is a description of product 1',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: '2',
      name: 'Product 2',
      price: 200,
      description: 'This is a description of product 2',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: '3',
      name: 'Product 3',
      price: 300,
      description: 'This is a description of product 3',
      image: 'https://via.placeholder.com/150',
    },
  ];
  const getProducts = async () => {
    return await allProducts;
  };
  const getProduct = async (id: string) => {
    return await allProducts.find((p) => p.id == id);
  };
  return { getProducts, getProduct };
};
export default ProductService;
