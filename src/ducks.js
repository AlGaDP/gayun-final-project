import { ducks as feature } from "./features/feature/ducks";
import * as Addtocartducks from "./shared/ducks/addtocart.duck";

export const ducks = [
  // put here features' ducks
  ...feature,
  Addtocartducks

];
