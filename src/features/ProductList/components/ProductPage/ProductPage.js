import React from 'react';
import PropTypes from 'prop-types';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import { Badges } from '../Badges/Badges';
import { RatingList } from '../RatingList/RatingList';
import { useDispatch } from 'react-redux';
import * as Addtocartducks from '../../../../shared/ducks/addtocart.duck';
import { useSelector } from 'react-redux';


import './ProductPage.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

export function ProductPage(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const countProduct = useSelector(state => state.addtocart.amountProduct);
  const productList = useSelector(state => state.addtocart.idProduct);

  let productId = props.product.id;
  const iconList = new Set(productList);
  let iconCard = false;

  if (iconList.length != 0) {
    iconCard = iconList.has(productId);
  };

  return (
    <div className="container">

      <div className="left-column">
        <CardMedia
          className={classes.media}
          image={props.product.photo}
          title="Product Image Title"
        />
      </div>

      <div className="right-column">
        <div className="product-description">
          <span>{props.product.categories}</span>
          <h1>{props.product.title}</h1>
          <p>{props.product.description}</p>
        </div>

        <div className="badges">
          {props.product.isNew ? (
            <div>
              <Badges message={"Новинка"} />
            </div>
          ) : (
            <div>
            </div>
          )}

          {props.product.isSale ? (
            <div>
              <Badges message={"Распродажа"} />
            </div>
          ) : (
            <div>
            </div>
          )}

          <div>
            <RatingList rating={props.product.rating} />
          </div>
        </div>

        <div className="product-price">
          <span>{props.product.price}</span>
          {iconCard ? (
            <a class="cart-btn-off">В корзине</a>
          ) : (
            <a href="#/catalog" class="cart-btn"
              onClick={() => {
                dispatch(Addtocartducks.setAmountProduct(countProduct));
                dispatch(Addtocartducks.addProductToCard(productId));
                dispatch(Addtocartducks.setAmountProductList(productId, 1));

              }}>Добавить в корзину</a>
          )
          }

        </div>
      </div>

    </div>
  );
}
