import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ProductList from '../ProductList/ProductList';

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

export default function ProductGrid(props) {
  let min = props.price[0];
  let max = props.price[1];
 
  const classes = useStyles();
  
  function FormRow() {
    
    const dataPrice = props.data.filter(product => (product.price > min && product.price < max));
   
    return (
      <React.Fragment>
        {dataPrice.map((catalog) => (
          <Grid item xs={4}>
            <ProductList productTitle = {catalog.title} productImage = {catalog.photo} productDescription = {catalog.description}
           productPrice = {catalog.price} productId = {catalog.id} />
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