import React from 'react';
import { useQuery } from 'react-query';
import { getCatalog } from '../../../ProductList/api/categoryAPI';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { ProductListCard } from '../ProductListCard/ProductListCard';
import Box from "@material-ui/core/Box";
import { CountVisibility } from '../CountVisibility/CountVisibility'
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Link from '@material-ui/core/Link';
import { NavLink } from 'react-router-dom';
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
  const summAmountProduct = useSelector(state => state.addtocart.amountProductList);
  const dispatch = useDispatch();

  let summTotal = 0;

  if (data === undefined) {
    return (
      <div className="page">
        <div>Loading...</div>
      </div>
    );
  } else {
    const dataListCard = data.filter(({ id }) => productListCard.includes(id));
    const newDataListCard = dataListCard.slice();

    newDataListCard.forEach(function (a) {
      return summAmountProduct.forEach(function (b) {
        if (a.id === b.id) {
          a.amount = b.coll * a.price;
          summTotal += a.amount;
        }
      })
    });

    return (
      <div className={classes.root}>
        <Box className={classes.listPage} width="auto">
          <Box className={classes.title} width="auto" >
            <Typography variant="subtitle2" gutterBottom>Название........................................................</Typography>
            {dataListCard.map((c) => (
              <div key={c.id}>
                <Typography variant="h5" display="inline"><ProductListCard title={c.title} /></Typography>
              </div>
            ))}

          </Box>
          <Box className={classes.title}>
            <Typography variant="subtitle2" gutterBottom>Цена</Typography>
            {newDataListCard.map((c) => (
              <div key={c.id}>
                <Typography variant="h5" display="inline"><ProductListCard title={c.price} /></Typography>
              </div>
            ))}
          </Box>

          <Box className={classes.title} >
            <Typography variant="subtitle2" gutterBottom>Колличество..............</Typography>
            {newDataListCard.map((c) => (
              <div key={c.id}>
                <CountVisibility productID={c.id} />
              </div>
            ))}
          </Box>

          <Box className={classes.title}>
            <Typography variant="subtitle2" gutterBottom>Сумма</Typography>
            {newDataListCard.map((c) => (
              <div key={c.id}>
                <Typography variant="h5" display="inline"><ProductListCard title={c.amount} /></Typography>
              </div>
            ))}
          </Box>

          <Box className={classes.title}>
            <Typography variant="subtitle2" gutterBottom>Удалить</Typography>
            {newDataListCard.map((c) => (
              <div key={c.id}>

                <Button
                  onClick={() => {
                    dispatch(Addtocartducks.setRemoveProductCard(c.id));
                  }}>
                  <DeleteIcon aria-label="deletedcon" />
                </Button>
              </div>
            ))}
          </Box>
        </Box>
        
        <Divider variant="middle" />
        <Typography variant="h5" display="inline">Общая сумма заказа: {summTotal}</Typography>
        <Button variant="contained" color="secondary" to="/order" exact component={NavLink}>
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
}