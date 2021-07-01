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

export default function ProductGrid(props) {
  let min = props.price[0];
  let max = props.price[1];
  console.log (min, 'min');
    console.log (props, 'props');
  const classes = useStyles();
    const {data, error, isLoading} = useQuery("catalog", async () => {
    let {data} = await getCatalog();
    
    return data;
  });

  function FormRow() {
    const dataPrice = data.filter(product => (product.price > min && product.price < max));
   // console.log (min, 'min');
    //console.log (max, 'max');
    console.log (dataPrice, 'dataPrice');

      return (
      <React.Fragment>
        {dataPrice.map((catalog) => (
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