import { PropsWithChildren } from 'react';
import style from './style.module.scss';

const PageLayout = ({ children }: PropsWithChildren) => {
  return <main className={style.layout}>{children}</main>;
};

export default PageLayout;
