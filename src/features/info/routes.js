import { FeaturePage } from './pages/FeaturePage';
import { featureConf } from "./config";
import {About} from "./pages/About";
import {DostavkaOplata} from "./pages/DostavkaOplata"

export const routes = [
  {
    key: `${featureConf}/about`,
    path: '/about',
    component: About,
    exact: true,
  },
  {
    key: `${featureConf}/dostavkaoplata`,
    path: '/dostavkaoplata',
    component: DostavkaOplata,
    exact: true,
  },
];
