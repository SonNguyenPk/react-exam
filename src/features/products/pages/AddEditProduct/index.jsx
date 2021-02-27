<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AddEditForm from '../../components/AddEditForm';
import { Box } from '@material-ui/core';
import { useRouteMatch } from 'react-router-dom';
import productsApi from 'src/api/productApi';
=======
import { Box } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import productsApi from 'src/api/productApi';
import AddEditForm from '../../components/AddEditForm';
>>>>>>> origin/feature/products-addform

AddEditProduct.propTypes = {};

function AddEditProduct(props) {
  const match = useRouteMatch();
  const { params } = match;
  console.log({ params });
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    (async () => {
      if (!params.productId) {
        setSelectedProduct({
          name: '',
          shortDescription: '',
          salePrice: 0,
          originalPrice: 0,
          promotionPercent: 0,
          images: [],
        });
        return;
      }
      try {
        const product = await productsApi.getById(params.productId);
        setSelectedProduct(product);
        console.log({ selectedProduct });
      } catch (error) {
        console.log('Fail to load product');
      }
    })();
  }, [params]);

  const handleSubmit = async (formValue) => {
    console.log(formValue);
  };
  return (
    <Box>
      <h2>Add new Product</h2>
      {selectedProduct && (
        <AddEditForm initialValues={selectedProduct} onSubmit={handleSubmit} />
      )}
    </Box>
  );
}

export default AddEditProduct;