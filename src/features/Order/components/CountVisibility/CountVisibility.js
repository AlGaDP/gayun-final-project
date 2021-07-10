import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Typography from '@material-ui/core/Typography';
import { useDispatch } from 'react-redux';
import * as Addtocartducks from '../../../../shared/ducks/addtocart.duck';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      marginBottom: theme.spacing(1),
    },
    '& .MuiBadge-root': {
      marginRight: theme.spacing(4),
    },
    countStyle: {
      marginRight: theme.spacing(1),
    }
  },
}));

export function CountVisibility(props) {
  const classes = useStyles();
  const [count, setCount] = React.useState(1);
  const [invisible, setInvisible] = React.useState(false);

  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };

  const dispatch = useDispatch();
  
  //console.log(props.productID);
  return (
    <div className={classes.root}>
      <div>
                 <Button
                 className={classes.countStyle}
            variant="outlined"
            aria-label="reduce"
            onClick={() => {
              setCount(Math.max(count - 1, 0));
               dispatch(Addtocartducks.setAmountProductListUpdate(props.productID, count - 1));
            }}
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <Typography variant="h5" display="inline">{count}</Typography>
          <Button
            variant="outlined"
            aria-label="increase"
            onClick={() => {
              setCount(count + 1);
              dispatch(Addtocartducks.setAmountProductListUpdate(props.productID, count + 1));
            }}
          >
            <AddIcon fontSize="small" />
          </Button>
      </div>
   </div>
  );
}