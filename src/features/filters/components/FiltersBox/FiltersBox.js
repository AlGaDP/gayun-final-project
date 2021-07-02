import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ProductList from '../ProductList/ProductList';
import {getCatalog} from '../../api/categoryAPI';
import { useQuery } from 'react-query';
import Box from "@material-ui/core/Box";



const useStyles = makeStyles((theme) => ({
  filter: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: theme.spacing(30),
    border: '3px solid black',
    position: 'relative'   },
}));

export function FiltersBox() {
  const classes = useStyles();

  return (
    <Box className={classes.filter}>
     <h3>Здесь должен быть блок с фильтрами. </h3>
     <h3>Но я пока не разобрался с Grid'ми в material-ui, чтобы сделать в две колонки</h3>
    </Box>
  );
}