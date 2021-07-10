import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Box from "@material-ui/core/Box";
import { LinkProduct } from '../Link';
import IconAddToCard from '../IconAddToCard/IconAddToCard';
import Link from '@material-ui/core/Link';
import { useDispatch } from 'react-redux';
import * as Addtocartducks from '../../../../shared/ducks/addtocart.duck';
import { useSelector } from 'react-redux';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function ProductList(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const dispatch = useDispatch();
  const countProduct = useSelector(state => state.addtocart.amountProduct);
  const productList = useSelector(state => state.addtocart.idProduct);

  let productTitle = props.productTitle;
  let productImage = props.productImage;
  let productDescription = props.productDescription;
  let productPrice = props.productPrice;
  let productId = props.productId;
  const iconList = new Set(productList);
  let iconCard = false;



  //const iconCard = productList.has(2);
  //console.log(productList, 'productList');
  //console.log(iconCard, 'iconCard');
  if (iconList.length != 0) {
    iconCard = iconList.has(productId);
  };
  return (
    <Card className={classes.root} >
      <CardHeader
        // avatar={
        //   <Avatar aria-label="recipe" className={classes.avatar}>
        //     R
        //   </Avatar>
        // }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={productTitle}
      />
      <CardMedia
        className={classes.media}
        image={productImage}
      // title="Product Image Title"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {productDescription}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
               <LinkProduct productId={productId} />
        <Box>
          Цена: {productPrice}
        </Box>
        {iconCard ? (
          <Link
            component="button"
            variant="body2"
          >
            <IconAddToCard aria-label="addtocard" visual={iconCard} />
          </Link>
        ) : (
          <Link
            component="button"
            variant="body2"
            onClick={() => {
              dispatch(Addtocartducks.setAmountProduct(countProduct));
              dispatch(Addtocartducks.addProductToCard(productId));
              dispatch(Addtocartducks.setAmountProductList(productId, 1));
            }}
          >
            <IconAddToCard aria-label="addtocard" visual={iconCard} />
          </Link>
        )

        }

      </CardActions>
    </Card>
  );
}

