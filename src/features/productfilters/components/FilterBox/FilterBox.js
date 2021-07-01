import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";
import {PriceSlider} from '../PriceSlider';




const useStyles = makeStyles((theme) => ({
  filter: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: theme.spacing(30),
    border: '3px solid black',
    position: 'relative'   },
}));

export default function FilterBox() {
  const classes = useStyles();

  return (
    <PriceSlider/>
    
  );
}