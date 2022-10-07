import Link from 'next/link';
import { ReactNode } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { VscLock } from 'react-icons/vsc';
import style from './style.module.scss';

interface LoginFormProps {
  icon: ReactNode;
  name: string;
  type: string;
  placeholder: string;
}

const LoginFormInput = ({ icon, ...inputProps }: LoginFormProps) => {
  return (
    <div className={style.formItem}>
      <div className={style.formInput}>
        <div className={style.iconContainer}>{icon}</div>
        <input className={style.inputField} required {...inputProps} />
      </div>
      <p className={style.formError}>Required</p>
    </div>
  );
};

const LoginForm = () => {
  return (
    <div className={style.content}>
      <div className={style.formWrapper}>
        <h2 className={style.title}>
          Welcome
          <br />
          to ACM!
        </h2>
        <form method="post" className={style.form}>
          <LoginFormInput
            icon={<AiOutlineMail />}
            name="email"
            type="email"
            placeholder="Email (user@ucsd.edu)"
          />
          <LoginFormInput
            icon={<VscLock />}
            name="password"
            type="password"
            placeholder="Password"
          />
          <Link href="/forgot-password">
            <a href="replace">
              <p className={style.forgotPassword}>Forgot your password?</p>
            </a>
          </Link>
          <button type="submit" className={style.signIn}>
            Sign In
          </button>
          <Link href="/register">
            <a href="replace">
              <button type="button" className={style.registerButton}>
                Sign Up
              </button>
            </a>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
