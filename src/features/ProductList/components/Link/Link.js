import React from 'react';
import PropTypes from 'prop-types';
import Link from '@material-ui/core/Link';
import { useHistory } from 'react-router';

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
    <button>Подробнее</button>
  </Link>
  );
}
