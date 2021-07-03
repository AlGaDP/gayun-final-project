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
  let minPrice = props.price[0];
  let maxPrice = props.price[1];
  let minRating = props.rating[0];
  let maxRating = props.rating[1];

  const { isSale, isNew, isInStock } = props.switch;
  const classes = useStyles();
  const switchKeys = Object.keys(props.switch);



  function FormRow() {
    let dataFiltered;
    const dataPrice = props.data.filter(product => (product.price >= minPrice && product.price <= maxPrice));
    const dataRating = dataPrice.filter(product => (product.rating >= minRating && product.rating <= maxRating));
    if (isSale === false && isNew === false && isInStock === false) {
      dataFiltered = dataRating;
    } else {
      dataFiltered = dataRating.filter((product) => {
        return switchKeys.every((key) => {
          return product[key] == props.switch[key];
        });
      });
    };

    return (
      <React.Fragment>
        {dataFiltered.map((catalog) => (
          <Grid item xs={4}>
            <ProductList productTitle={catalog.title} productImage={catalog.photo} productDescription={catalog.description}
              productPrice={catalog.price} productId={catalog.id} />
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