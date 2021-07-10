import { featureConf } from "./config";
import { ProductCard} from '../../features/order/components/ProductCard/ProductCard';


export const routes = [
  {
    key: `${featureConf}/card`,
    path: '/card',
    component: ProductCard,
    exact: true,
  },
];