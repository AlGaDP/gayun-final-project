import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {ProductCard} from '../components/ProductCard/ProductCard';
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
  pageProduct: {

  },
});


export function Card() {
  const classes = useStyles();
  const productListCard = useSelector(state => state.addtocart.idProduct);
  
  return (
    <div className={classes.root}>
      <Typography variant="h5" gutterBottom>Ваши товары</Typography> 
    <div className={classes.pageProduct}>
       
         {/* <Typography>Название Цена Кол-во Сумма</Typography>  */}
     
       <ProductCard productListCard={productListCard}/>
    </div>

    </div>
  );
}
