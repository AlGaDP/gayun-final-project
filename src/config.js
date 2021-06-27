export const ROUTER_TYPE_BROWSER = 'browser';
export const ROUTER_TYPE_HASH = 'hash';

export const isProd = process.env.NODE_ENV === 'production';

export const appConf = {
  name: 'appName', // todo change this
  isProd,
  router: {
    type: isProd ? ROUTER_TYPE_BROWSER : ROUTER_TYPE_HASH,
  },
  api: {
    baseURL: "https://60d6c6a9307c300017a5f4af.mockapi.io", // todo change this
  },
};
