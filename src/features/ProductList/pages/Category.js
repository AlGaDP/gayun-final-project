import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from 'react-query';
import {getCategory} from '../api/categoryAPI';
import CategoryList from "../components/CategoryList/CategoryList";

export function Category() {
const {data, error, isLoading} = useQuery("category", async () => {
  let {data} = await getCategory();
  return data;
});

  return (
    <div className="page">
     {isLoading ? (
       <div>Loading...</div>
     ) : error ? (
      <div>Какой-то Error {error.message}</div>
     ) : (
      <div>
       { data.map((category) => (
         <div key = {category.id}>
           <CategoryList cName = {category.name}/>
           </div>
       ))}
       </div>
     )
    }
          </div>
  );
}
