import { routes as info } from "./features/info/routes";
import { routes as category } from "./features/ProductList/routes";

export const routes = [
  // put here features' routes
  ...info,
  ... category,
];
