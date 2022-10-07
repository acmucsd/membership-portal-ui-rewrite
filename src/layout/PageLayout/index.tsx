import { PropsWithChildren } from 'react';
import style from './style.module.scss';

const PageLayout = ({ children }: PropsWithChildren) => {
  return <div className={style.layout}>{children}</div>;
};

export default PageLayout;
