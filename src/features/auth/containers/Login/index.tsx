import LoginForm from '@/features/auth/components/LoginForm';
import config from '@/lib/config';
import { LoginFormData, LoginValidationError } from '@/lib/types';
import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router';
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
  const [validationError, setValidationError] =
    useState<LoginValidationError>(defaultValidationError);
  const [_, setCookie] = useCookies(['user']);
  const router = useRouter();

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
    const validEmail = formData.email !== '';
    const validPassword = formData.password !== '';

    const updateValidationError = {
      email: !validEmail,
      password: !validPassword,
    };

    setValidationError(updateValidationError);

    return validEmail && validPassword;
  };

  const submitLoginForm = () => {
    if (!validateForm()) return;

    // TODO: Move to API section
    axios
      .post(`${config.apiBase}/auth/login`, formData)
      .then(res => {
        const { token } = res.data;

        axios
          .get(`${config.apiBase}/user`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then(response => {
            const { user } = response.data;

            setCookie('user', JSON.stringify({ ...user, auth: token }), {
              path: '/',
              maxAge: 60 * 60 * 24 * 7, // One week
              sameSite: true,
            });

            router.push('/');
          })
          .then(err => console.error(err));
      })
      .catch(err => {
        toast.error(err.response.data.error.message);
      });
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
          formValidation={validationError}
          setEmail={setEmail}
          setPassword={setPassword}
          submitForm={submitLoginForm}
        />
      </div>
    </div>
  );
};

export default Login;
