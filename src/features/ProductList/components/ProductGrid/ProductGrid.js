import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ProductList from '../ProductList/ProductList';
import { useSelector } from 'react-redux';

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
  const categoryList = useSelector(state => state.addtocart.categoryFilter);

  function FormRow() {
    let dataFiltered;
    const dataPrice = props.data.filter(product => (product.price >= minPrice && product.price <= maxPrice));
    const dataRating = dataPrice.filter(product => (product.rating >= minRating && product.rating <= maxRating));

    const filterSwitch = () => {
      if (isSale === false && isNew === false && isInStock === false) {
        return dataRating;
      } else {
        return dataRating.filter((product) => {
          let result = true;

          if (props.switch.isNew) {
            result = result && product.isNew;
          }

          if (props.switch.isSale) {
            result = result && product.isSale;
          }

          if (props.switch.isInStock) {
            result = result && product.isInStock;
          }

          return result;
        });
      };
    }


    let dataCategory = filterSwitch().filter(function (el) {
      return categoryList.filter(function (category) {
        return el.categories == category;
      }).length != 0
    });

    if (dataCategory.length == 0) {
      dataCategory = filterSwitch()
    };

    return (
      <React.Fragment>
        {dataCategory.map((catalog) => (
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