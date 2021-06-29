import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ProductList from '../ProductList/ProductList';
import {getCatalog} from '../../api/categoryAPI';
import { useQuery } from 'react-query';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function ProductGrid() {
  const classes = useStyles();
    const {data, error, isLoading} = useQuery("catalog", async () => {
    let {data} = await getCatalog();
    return data;
  });

  function FormRow() {
      return (
      <React.Fragment>
        {data.map((catalog) => (
          <Grid item xs={4}>
          {/* <Paper className={classes.paper}> */}
          <ProductList productTitle = {catalog.title} productImage = {catalog.photo} productDescription = {catalog.description}
           productPrice = {catalog.price} productId = {catalog.id} />
          {/* </Paper> */}
        </Grid>
       ))}
        
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
    </Grid>
    </div>
  );
}