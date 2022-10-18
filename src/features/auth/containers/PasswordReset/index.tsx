import config from '@/lib/config';
import { toastWithSubtitle } from '@/lib/utils';
import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';
import PasswordResetForm from '../../components/PasswordResetForm';
import style from './style.module.scss';

const PasswordReset = () => {
  const [email, setEmail] = useState('');
  const [validationError, setValidationError] = useState(false);

  const validateForm = () => {
    const validEmail = email !== '';

    setValidationError(!validEmail);

    return validEmail;
  };
  const submitForm = () => {
    if (!validateForm()) return;

    axios
      .get(`${config.apiBase}/auth/passwordReset/${email}`)
      .then(res => {
        toast(
          toastWithSubtitle('Success! Check your email shortly', `Email has been sent to ${email}`)
        );
      })
      .catch(err =>
        toast(
          toastWithSubtitle(
            'Error sending email!',
            'Please check your email input or try again later. '
          )
        )
      );
  };

  return (
    <div className={style.content}>
      <div className={style.formWrapper}>
        <h1 className={style.title}>Reset Password</h1>
        <PasswordResetForm
          email={email}
          setEmail={value => setEmail(value)}
          validationError={validationError}
          onSubmit={submitForm}
        />
      </div>
    </div>
  );
};

export default PasswordReset;
