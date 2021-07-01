import { featureConf } from "./config";
import { Category} from './pages/Category';
import { Catalog } from './pages/Catalog';
import { Product } from "./pages/Product";

export const routes = [
  {
    key: `${featureConf}/category`,
    path: '/category',
    component: Category,
    exact: true,
  },
  {
    key: `${featureConf}/catalog`,
    path: '/catalog',
    component: Catalog,
    exact: true,
  },
  {
    key: `${featureConf}/product`,
    path: '/catalog/:id',
    component: Product,
    exact: true,
  },
];
