import { ducks as feature } from "./features/feature/ducks";
import * as Addtocartducks from "./shared/ducks/addtocart.duck";
import * as Categoryduck from "./features/ProductList/ducks/categorySaga.duck";

export const ducks = [
  // put here features' ducks
  ...feature,
  Addtocartducks,
  Categoryduck,
];
