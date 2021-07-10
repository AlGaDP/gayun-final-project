import React from 'react';
import { useQuery } from 'react-query';
import { getCatalog } from '../../../ProductList/api/categoryAPI';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {ProductListCard} from '../ProductListCard/ProductListCard';
import Box from "@material-ui/core/Box";
import {CountVisibility} from '../CountVisibility/CountVisibility'
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import * as Addtocartducks from '../../../../shared/ducks/addtocart.duck';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
    
     },
     listPage: {
      display: "flex",
      flexDirection: "row",
    },
     title: {
      width: '100%',
      margin: "10px"
     }
});


export function ProductCard(props) {
  const classes = useStyles();
  const { data, error, isLoading } = useQuery("catalog", async () => {
    let { data } = await getCatalog();
    return data;
  });
   const productListCard = useSelector(state => state.addtocart.idProduct);
   const dataListCard = data.filter(({ id }) => productListCard.includes(id));
   const summAmountProduct = useSelector(state => state.addtocart.amountProductList);
   const dispatch = useDispatch();
  
  //  dataListCard.forEach(function(a){
  //   return summAmountProduct.forEach(function(b){
  //     if(a.id === b.id ){
  //       a.id.amount = b.coll;
  //     console.log(b.coll, 'eeeeeeeeeeeee');
  //     }
  //   })
  // });
 
  console.log(dataListCard, 'dataListCard');
  return (
    <div className={classes.root}>
      <Box className={classes.listPage} width="auto">
      <Box className={classes.title} width="auto" >
        <Typography variant="subtitle2" gutterBottom>Название........................................................</Typography>
        { dataListCard.map((c) => (
         <div key={c.id}>
           <Typography variant="h5" display="inline"><ProductListCard title={c.title}/></Typography>
           </div>
            ))}  

         </Box>
           <Box className={classes.title}>
               <Typography variant="subtitle2" gutterBottom>Цена</Typography> 
            { dataListCard.map((c) => (
         <div key={c.id}>
           <Typography variant="h5" display="inline"><ProductListCard title={c.price}/></Typography>
          </div>
         ))}
          </Box>

          <Box className={classes.title} >
               <Typography variant="subtitle2" gutterBottom>Колличество..............</Typography> 
            { dataListCard.map((c) => (
         <div key={c.id}>
           <CountVisibility productID={c.id}/>
          </div>
         ))}
          </Box>

          <Box className={classes.title}>
               <Typography variant="subtitle2" gutterBottom>Сумма</Typography> 
               { dataListCard.map((c) => (
         <div key={c.id}>
               <Typography variant="h5" display="inline"><ProductListCard title={c.price}/></Typography>
          </div>
         ))}
          </Box>
         
           </Box>
           <Divider variant="middle" />
           <Typography variant="h5" display="inline">Общая сумма заказа: 100500</Typography>
           <Button variant="contained" color="secondary">
        Оформить заказ
      </Button>
      <Button variant="contained" color="secondary"
      onClick={() => {
         dispatch(Addtocartducks.setRemoveCard(true));
      }}>
        Очистить корзину
      </Button>
    </div>
  );
}
