import { LoginFormProps } from '@/lib/types';
import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai';
import { VscLock } from 'react-icons/vsc';
import FormInput from '../FormItem';
import style from './style.module.scss';

const LoginForm = ({
  formData,
  formValidation,
  setEmail,
  setPassword,
  submitForm,
}: LoginFormProps) => {
  return (
    <div className={style.form}>
      <FormInput
        icon={<AiOutlineMail />}
        name="email"
        type="email"
        placeholder="Email (user@ucsd.edu)"
        validationMessage="Required"
        validationError={formValidation.email}
        value={formData.email}
        setValue={setEmail}
      />
      <FormInput
        icon={<VscLock />}
        name="password"
        type="password"
        placeholder="Password"
        validationMessage="Required"
        validationError={formValidation.password}
        value={formData.password}
        setValue={setPassword}
      />
      <Link href="/forgot-password">
        <a href="replace">
          <p className={style.forgotPassword}>Forgot your password?</p>
        </a>
      </Link>
      <button type="submit" onClick={submitForm} className={style.signIn}>
        Sign In
      </button>
      <Link href="/register">
        <a href="replace">
          <button type="button" className={style.registerButton}>
            Sign Up
          </button>
        </a>
      </Link>
    </div>
  );
};

export default LoginForm;
