import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux';
import { useQuery } from 'react-query';
import { getCatalog } from '../../ProductList/api/categoryAPI';

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
    width: '50%',
    margin: "10px"
  },
  form: {
    '& .MuiTextField-root': {
      margin: "5px",
      width: '35ch',
    },
  },
  page: {
    display: "flex",
    flexDirection: "row",
  }
});



export function Order(props) {
  let errorFio = false;

  function handleSubmit(e) {
    e.preventDefault();
   
    let orderList = {
      id: new Date().getTime(),
      fio: e.target.fio.value,
      tel: e.target.tel.value,
      adres: e.target.adres.value,
      mail: e.target.mail.value,
      notes: e.target.notes.value,
    };

    if (e.target.fio.value == ""){
     
      errorFio = true;
      console.log (errorFio, 'errorHandle');
    }
     
  console.log (orderList, 'orderList');
  };
  console.log (errorFio, 'error'); 
  const classes = useStyles();
    const { data, error, isLoading } = useQuery("catalog", async () => {
    let { data } = await getCatalog();
    return data;
  });
  
  const productListCard = useSelector(state => state.addtocart.idProduct);
  const dataListCard = data.filter(({ id }) => productListCard.includes(id));
  const newDataListCard = dataListCard.slice();
  const summAmountProduct = useSelector(state => state.addtocart.amountProductList);

  let summTotal = 0;

  newDataListCard.forEach(function (a) {
    return summAmountProduct.forEach(function (b) {
      if (a.id === b.id) {
        a.amount = b.coll * a.price;
        a.collProduct = b.coll;
        summTotal += a.amount;
      }
    })
  });
  //console.log(newDataListCard, 'newDataListCard');



  return (
    <Box className={classes.page}>
       <form className={classes.form} noValidate autoComplete="off" onSubmit={handleSubmit} >
      <div>
        <TextField
          required
          id="fio"
          label="ФИО"
          //defaultValue="Hello World"
          helperText="Введите ФИО получателя"
          variant="outlined"
          error={true}
        />
         <TextField
          required
          id="tel"
          label="Телефон"
          //defaultValue="Hello World"
          helperText="Номер телефона"
          variant="outlined"
        />
          <TextField
          required
          id="adres"
          label="Адрес доставки"
          //defaultValue="Hello World"
          helperText="Адрес доставки"
          variant="outlined"
        />
          <TextField
          id="mail"
          label="e-mail"
          //defaultValue="Default Value"
          helperText="Укажите ваш e-mail"
          variant="outlined"
        />
         <TextField
          id="notes"
          label="Примечания"
          //defaultValue="Default Value"
          helperText="Примечания к заказу"
          variant="outlined"
        />
      </div>
      <Button type="submit" variant="contained" color="primary">
      Подтвердить заказ
      </Button>
    </form>
       <Box className={classes.listPage}> 
        <Box className={classes.title} >
          <Typography variant="subtitle2" gutterBottom>Название........................................................</Typography>
          {newDataListCard.map((c) => (
            <div key={c.id}>
              <Typography display="inline">{c.title}</Typography>
            </div>
          ))}

        </Box>
        <Box className={classes.title}>
          <Typography variant="subtitle2" gutterBottom>Цена</Typography>
          {newDataListCard.map((c) => (
            <div key={c.id}>
              <Typography display="inline">{c.price}</Typography>
            </div>
          ))}
        </Box>

        <Box className={classes.title} >
          <Typography variant="subtitle2" gutterBottom>Колличество..............</Typography>
          {newDataListCard.map((c) => (
            <div key={c.id}>
              {c.collProduct} 
            </div>
          ))}
        </Box>

        <Box className={classes.title}>
          <Typography variant="subtitle2" gutterBottom>Сумма</Typography>
          {newDataListCard.map((c) => (
            <div key={c.id}>
              <Typography display="inline">{c.amount}</Typography>
            </div>
          ))}
        </Box>
      </Box>
        <Divider variant="middle" />
        <Typography variant="h6" display="inline">Общая сумма заказа: {summTotal}</Typography>
    </Box>
  );
}
