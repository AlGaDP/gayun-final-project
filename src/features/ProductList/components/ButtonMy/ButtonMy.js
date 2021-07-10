import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

export default function ButtonMy(props) {
  const classes = useStyles();

  return (
   <div className={classes.root}>
      {/* <Button>Default</Button> */}
      < Button color="primary">Подробнее</Button>
      {/* <Button color="secondary">Secondary</Button>
      <Button disabled>Disabled</Button>
      <Button href="#text-buttons" color="primary">
        Link
      </Button> */}
    </div>
  );
}