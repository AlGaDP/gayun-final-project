import { featureConf } from "./config";
import { ProductCard} from '../../features/order/components/ProductCard/ProductCard';
import {Order} from './pages/Order';


export const routes = [
  {
    key: `${featureConf}/card`,
    path: '/card',
    component: ProductCard,
    exact: true,
  },

  {
    key: `${featureConf}/order`,
    path: '/order',
    component: Order,
    exact: true,
  },
];