import { featureConf } from "./config";
import { Category} from './pages/Category';
import { Catalog } from './pages/Catalog';

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
];
