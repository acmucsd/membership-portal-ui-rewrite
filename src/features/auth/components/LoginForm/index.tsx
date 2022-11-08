import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai';
import { VscLock } from 'react-icons/vsc';
import FormInput from '../FormItem';
import SubmitButton from '../SubmitButton';
import style from './style.module.scss';

export interface LoginFormData {
  email: string;
  password: string;
}

export interface LoginValidationError {
  email: boolean;
  password: boolean;
}
interface LoginFormProps {
  formData: LoginFormData;
  formValidation: LoginValidationError;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  submitForm: () => void;
}

const LoginForm = ({
  formData,
  formValidation,
  setEmail,
  setPassword,
  submitForm,
}: LoginFormProps) => {
  return (
    <>
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
      <SubmitButton text="Sign In" onClick={submitForm} />
      <Link href="/register">
        <a href="replace">
          <button type="button" className={style.registerButton}>
            Sign Up
          </button>
        </a>
      </Link>
    </>
  );
};

export default LoginForm;
