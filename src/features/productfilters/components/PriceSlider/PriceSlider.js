import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { useQuery } from 'react-query';
import { getCatalog } from '../../../ProductList/api/categoryAPI';
import ProductGrid from '../../../ProductList/components/ProductGrid/ProductGrid';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value) {
  return `${value}°C`;
}

export function PriceSlider(props) {
  const {data, error, isLoading} = useQuery("catalog", async () => {
    let {data} = await getCatalog();
    return data;
  });

  let max = data.reduce((acc, curr) => acc.price > curr.price ? acc : curr);
  let min = data.reduce((acc, curr) => acc.price <= curr.price ? acc : curr);

  const classes = useStyles();
  const [value, setValue] = React.useState([Math.round(min.price), Math.round(max.price)]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
console.log(value, 'value');

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
        Диапазон цен
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        min={Math.round(min.price)}
        max={Math.round(max.price)}
      />
      <ProductGrid price={value}/>  
    </div>
  );
}
