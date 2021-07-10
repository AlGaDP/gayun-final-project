import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AlarmIcon from '@material-ui/icons/Alarm';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

export default function IconAddToCard(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
      <IconButton aria-label="delete" disabled color="primary">
        <DeleteIcon />
      </IconButton>
      <IconButton color="secondary" aria-label="add an alarm">
        <AlarmIcon />
      </IconButton> */}
      {props.visual ? (
      <IconButton color="primary" aria-label="add to shopping cart" disabled >
        <AddShoppingCartIcon />
      </IconButton>) : (
         <IconButton color="primary" aria-label="add to shopping cart">
         <AddShoppingCartIcon />
       </IconButton>
      )}
    </div>
  );
}
