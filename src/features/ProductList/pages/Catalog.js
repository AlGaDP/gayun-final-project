import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from 'react-query';
import { getCatalog } from '../api/categoryAPI';
import ProductGrid from "../components/ProductGrid/ProductGrid";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Switch from '@material-ui/core/Switch';
import Checkbox from '@material-ui/core/Checkbox';
import * as Addtocartducks from '../../../shared/ducks/addtocart.duck';
import { useDispatch, useSelector } from 'react-redux';
import * as DataDuck from '../ducks/categorySaga.duck';
import { useEffect } from 'react';
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
  
  // const classes = useStyles();
  // const { data, error, isLoading } = useQuery("catalog", async () => {
  //   let { data } = await getCatalog();
  //   return data;
  // });
  useEffect(() => {
    dispatch(DataDuck.load());
  }, []); 
  
  const classes = useStyles();
  const dispatch = useDispatch();
  let dataSaga = useSelector(DataDuck.selectData);
  let errorSaga = useSelector(DataDuck.selectError);
  let isLoadingSaga = useSelector(DataDuck.selectIsLoading);
 
 
  
  let min;
  let max;
  let minarr = [];
  let maxarr = [];

  if (isLoadingSaga) {
    min = 0;
    max = 1000;
  } else {
    maxarr = dataSaga.reduce((acc, curr) => acc.price > curr.price ? acc : curr);
    minarr = dataSaga.reduce((acc, curr) => acc.price <= curr.price ? acc : curr);
    min = minarr.price;
    max = maxarr.price;
  };

  console.log(dataSaga, 'dataSaga');

  const [valuePrice, setValuePrice] = React.useState([Math.round(min), Math.round(max)]);
  const [valueRating, setValueRating] = React.useState([1, 5]);
  const [stateSwitch, setStateSwitch] = React.useState({
    isSale: false,
    isNew: false,
    isInStock: false,
  });

let categoryList = [];
let categoryListFull = [];

if (isLoadingSaga) {

} else {
  dataSaga.forEach((c) => {
  categoryListFull.push(c.categories);
   });
};

categoryList = Array.from(new Set(categoryListFull)); 

   const handleChangePrice = (event, newValue) => {
    setValuePrice(newValue);
  };
  const handleChangeRating = (event, newValue) => {
    setValueRating(newValue);
  };
  const handleChangeSwitch = (event) => {
    setStateSwitch({ ...stateSwitch, [event.target.name]: event.target.checked });
  };
const handleChangeCategory = (event) => {
      if (event.target.checked){
      dispatch(Addtocartducks.addCategoryList(event.target.name));
    } else {
      dispatch(Addtocartducks.removeCategoryList(event.target.name));
    };
  
  };


  return (
    <div className="page">
      {isLoadingSaga ? (
        <div>Loading...</div>
      ) : errorSaga ? (
        <div>Какой-то Error {errorSaga.message}</div>
      ) : (
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={3}>
            < div className={classes.slider}>
              <Typography id="range-slider" gutterBottom>
                Диапазон цен
              </Typography>
              <Slider
                value={valuePrice}
                onChange={handleChangePrice}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                //getAriaValueText={valuetext}
                min={Math.round(min)}
                max={Math.round(max)}
              />
            </div>

            < div className={classes.slider}>
              <Typography id="range-slider" gutterBottom>
                По рейтингу
              </Typography>
              <Slider
                value={valueRating}
                onChange={handleChangeRating}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                //getAriaValueText={valuetext}
                min={1}
                max={5}
              />
            </div>
            < div className={classes.slider}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Дополнительные опции</FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={<Switch checked={stateSwitch.sale} onChange={handleChangeSwitch} name="isSale" />}
                    label="Акции"
                  />
                  <FormControlLabel
                    control={<Switch checked={stateSwitch.new} onChange={handleChangeSwitch} name="isNew" />}
                    label="Новинки"
                  />
                  <FormControlLabel
                    control={<Switch checked={stateSwitch.instock} onChange={handleChangeSwitch} name="isInStock" />}
                    label="Только в наличии"
                  />
                </FormGroup>
                {/* <FormHelperText>Be careful</FormHelperText> */}
              </FormControl>
              </div>

              <div className={classes.category}>
               <Typography id="range-slider" gutterBottom>
                Категории
              </Typography>
              {categoryList.map((c) => (
            <div key = {c}>
             <Checkbox
             name={c}
             onChange={handleChangeCategory}
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
           {c}
           </div>
         ))} 
         </div>
          </Grid>
          
          <Grid item xs={9}>
            <ProductGrid price={valuePrice} rating={valueRating} switch={stateSwitch} data={dataSaga} />
          </Grid>
        </Grid>
      )
      }
    </div>
  );
}
