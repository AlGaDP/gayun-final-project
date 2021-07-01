import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from 'react-query';
import {getCatalog} from '../api/categoryAPI';
import ProductList from "../components/ProductList/ProductList";
import { Container } from '@material-ui/core';
import ProductGrid from "../components/ProductGrid/ProductGrid";
import Grid from '@material-ui/core/Grid';
import FilterBox from '../../productfilters/components/FilterBox/FilterBox';


import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }));

export function Catalog() {
const classes = useStyles();
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
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={3}>
           <FilterBox/>
           </Grid>
           <Grid item xs={9}>
          {/* <ProductGrid/> */}
       </Grid>
      </Grid>
     )
    }
          </div>
  );
}
