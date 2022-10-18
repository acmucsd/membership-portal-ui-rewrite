import LoginForm from '@/features/auth/components/LoginForm';
import { LoginFormData, LoginValidationError } from '@/lib/types';
import { useState } from 'react';
import style from './style.module.scss';

const defaultFormValues: LoginFormData = {
  email: '',
  password: '',
};

const defaultValidationError: LoginValidationError = {
  email: false,
  password: false,
};

const Login = () => {
  const [formData, setFormData] = useState<LoginFormData>(defaultFormValues);
  const [formValidation, setFormValidation] =
    useState<LoginValidationError>(defaultValidationError);

  const setEmail = (value: string) => {
    setFormData(data => ({
      ...data,
      email: value,
    }));
  };

  const setPassword = (value: string) => {
    setFormData(data => ({
      ...data,
      password: value,
    }));
  };

  const validateForm = () => {
    const validationError = {
      email: formData.email === '',
      password: formData.password === '',
    };

    setFormValidation(validationError);
  };

  const submitLoginForm = () => {
    validateForm();
  };

  return (
    <div className={style.content}>
      <div className={style.formWrapper}>
        <h2 className={style.title}>
          Welcome
          <br />
          to ACM!
        </h2>
        <LoginForm
          formData={formData}
          formValidation={formValidation}
          setEmail={setEmail}
          setPassword={setPassword}
          submitForm={submitLoginForm}
        />
      </div>
    </div>
  );
};

export default Login;
