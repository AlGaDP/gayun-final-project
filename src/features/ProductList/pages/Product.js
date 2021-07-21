import React from 'react';
import { useQuery } from 'react-query';
import { getProduct } from '../api/categoryAPI';
import { useParams } from 'react-router';
import { getCatalog } from '../api/categoryAPI';
import { ProductPage } from '../components/ProductPage';
import { useSelector } from 'react-redux';

export function Product(props) {
  const params = useParams();
  const { data, error, isLoading } = useQuery("catalog", async () => {
    let { data } = await getCatalog();
    return data;
  });
  const countProduct = useSelector(state => state.addtocart.amountProduct);

  if (data === undefined) {
    return (
      <div className="page">
        <div>Loading...</div>
      </div>
    );
  } else {
    let product = data.find(catalog => catalog.id == params.id);
     return (
      <div className="page">
        <ProductPage product={product} />
      </div>
    );
  }
}