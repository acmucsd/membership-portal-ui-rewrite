import cookie from 'cookie';

export const noop = () => {};

export const parseCookies = (req: any) =>
  cookie.parse(req ? req.headers.cookie || '' : document.cookie);