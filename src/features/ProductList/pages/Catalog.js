import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from 'react-query';
import {getCatalog} from '../api/categoryAPI';
import ProductList from "../components/ProductList/ProductList";
import { Container } from '@material-ui/core';
import ProductGrid from "../components/ProductGrid/ProductGrid";
import Grid from '@material-ui/core/Grid';
import FilterBox from '../../productfilters/components/FilterBox/FilterBox';
import {PriceSlider} from '../../../features/productfilters/components/PriceSlider/PriceSlider';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';


import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
    slider: {
      width: 300,
    },
  }));

export function Catalog() {
const classes = useStyles();
const {data, error, isLoading} = useQuery("catalog", async () => {
  let {data} = await getCatalog();
  return data;
});

  let max = data.reduce((acc, curr) => acc.price > curr.price ? acc : curr);
  let min = data.reduce((acc, curr) => acc.price <= curr.price ? acc : curr);
  
  const [value, setValue] = React.useState([Math.round(min.price), Math.round(max.price)]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

return (
    <div className="page">
     {isLoading ? (
       <div>Loading...</div>
     ) : error ? (
      <div>Какой-то Error {error.message}</div>
     ) : (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={3}>
              < div className={classes.slider}>
              <Typography id="range-slider" gutterBottom>
        Диапазон цен
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        //getAriaValueText={valuetext}
        min={Math.round(min.price)}
        max={Math.round(max.price)}
      />
              </div>
           </Grid>
           <Grid item xs={9}>
          <ProductGrid price={value} data={data}/>
       </Grid>
      </Grid>
     )
    }
          </div>
  );
}
