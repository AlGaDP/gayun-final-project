import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function CategoryList(props) {
  let cName = props.cName;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="secondary mailbox folders">
          <ListItemLink href="#simple-list">
          <ListItemText primary={cName} />
        </ListItemLink>
      </List>
    </div>
  );
}
