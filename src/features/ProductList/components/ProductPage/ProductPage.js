import React from 'react';
import PropTypes from 'prop-types';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import { Badges } from '../Badges/Badges';
import { RatingList } from '../RatingList/RatingList';

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
          <Badges message={"Новинка"}/>
          </div>
        ):(
          <div>         
          </div>
        )}

        {props.product.isSale ? (
          <div>
          <Badges message={"Распродажа"}/>
          </div>
        ):(
          <div>
          </div>
        )}

          <div>
            <RatingList rating={props.product.rating}/>
          </div>
        </div>

        <div className="product-price">
          <span>{props.product.price}</span>
          <a href="#" class="cart-btn">Add to cart</a>
        </div>
      </div>

    </div>
  );
}
