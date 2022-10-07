import Image from 'next/image';
import Link from 'next/link';

import ACMLogo from '@/assets/graphics/logo.png';
import style from './style.module.scss';

const Navbar = () => {
  return (
    <div className={style.container}>
      <div className={style.navbar}>
        <Link href="/" passHref>
          <a href="replace" className={style.navLeft}>
            <Image
              src={ACMLogo.src}
              width={48}
              height={48}
              alt="ACM Navbar Logo"
              className={style.logo}
            />
            <span className={style.title}>Membership Portal</span>
          </a>
        </Link>
      </div>
      <div className={style.wainbow} />
    </div>
  );
};

export default Navbar;
