import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from 'react-query';
import {getCatalog} from '../api/categoryAPI';
import ProductList from "../components/ProductList/ProductList";
import { Container } from '@material-ui/core';
import ProductGrid from "../components/ProductGrid/ProductGrid";
import Filters from "../components/Filters/Filters";



export function Catalog() {
const {data, error, isLoading} = useQuery("catalog", async () => {
  let {data} = await getCatalog();
  return data;
});

return (
    <div className="page">
     {isLoading ? (
       <div>Loading...</div>
     ) : error ? (
      <div>Какой-то Error {error.message}</div>
     ) : (
      <Container>
           <Filters/>
          <ProductGrid/>
       </Container>
     )
    }
          </div>
  );
}
