const getProductsPerPage = (limit = 4, offset = 0, order_by) => {

  const orderByColumn = 'product_name';
  const query = `SELECT * FROM products LIMIT "${limit}" OFFSET "${offset}" ORDER BY "${orderByColumn}" "${order_by ? 'ASC' : 'DESC'}"`;

  return query;
};

const searchResult = {
  products: [
    {
      product: 'Product 1',
    },
  ],
  pagination: {
    total: 1,
    limit: 4,
    offset: 0,
  },
};
