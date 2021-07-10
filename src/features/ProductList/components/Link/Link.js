import React from 'react';
import Link from '@material-ui/core/Link';
import { useHistory } from 'react-router';
import ButtonMy from '../ButtonMy/ButtonMy';



export function LinkProduct(props) {
  const productPage = useHistory();
  return (
    <Link
    component="button"
    variant="body2"
    onClick={() => {
      productPage.push("/catalog/"+props.productId);
    }}
  >
<ButtonMy color="primary" size="large"/>
    {/* <button>Подробнее</button> */}
  </Link>
  );
}
