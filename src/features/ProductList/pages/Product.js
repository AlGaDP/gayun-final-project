import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from 'react-query';
import { getProduct } from '../api/categoryAPI';
import { useParams } from 'react-router';
import { getCatalog } from '../api/categoryAPI';
import {ProductPage} from '../components/ProductPage';
import { useSelector } from 'react-redux';

export function Product(props) {
  const params = useParams();
  const {data, error, isLoading} = useQuery("catalog", async () => {
    let {data} = await getCatalog();
    return data;
  });
  let product = data.find(catalog => catalog.id == params.id);
  const countProduct = useSelector(state => state.addtocart.amountProduct);
  console.log(countProduct, 'countProduct');
  return (
    <div className="page">
    
    {/* { data.map((catalog) => (
         <div>
           {catalog.title}
           </div>
       ))} */}

<ProductPage product={product}/>
      {/* {product.title}
      {product.description} */}
       </div>
     /* {isLoading ? (
       <div>Loading...</div>
     ) : error ? (
      <div>Какой-то Error {error.message}</div>
     ) : (
      <div>
       { data.map((catalog) => (
         <div key = {catalog.id}>
           <CategoryList cName = {catalog.name}/>
           </div>
       ))}
       </div>
     )
    } */
    // </div>
  );
}

Product.propTypes = {};
