import { routes as info } from "./features/info/routes";
import { routes as category } from "./features/ProductList/routes";
import { routes as order } from "./features/order/routes";

export const routes = [
  // put here features' routes
  ...info,
  ... category,
  ...order
];
