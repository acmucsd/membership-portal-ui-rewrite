import axios from 'axios';
import config from '@/lib/config';
import RegisterForm from '@/features/auth/components/RegisterForm';
import { RegisterFormData, RegisterValidationError } from '@/lib/types';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router';
import { toastWithSubtitle } from '@/lib/utils';
import * as Yup from 'yup';
import style from './style.module.scss';

const defaultFormValues: RegisterFormData = {
  first: '',
  last: '',
  email: '',
  password: '',
  confirm: '',
  major: '',
  year: '',
};

const defaultValidationError: RegisterValidationError = {
  first: '',
  last: '',
  email: '',
  password: '',
  confirm: '',
  major: '',
  year: '',
};

const Register = () => {
  const [formData, setFormData] = useState<RegisterFormData>(defaultFormValues);
  const [validationError, setValidationError] =
    useState<RegisterValidationError>(defaultValidationError);
  const [_, setCookie] = useCookies(['user']);
  const router = useRouter();

  const setField = (field: string) => {
    return (value: string | number) => {
      setFormData(data => ({
        ...data,
        [field]: value,
      }));
    };
  };

  const RegisterSchema = Yup.object({
    first: Yup.string().max(20, 'Too long').required('Required'),
    last: Yup.string().max(20, 'Too long').required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
      .min(9, 'Password must be at least 9 characters')
      .max(20, 'Password must be at most 20 characters')
      .required('Required'),
    confirm: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('Required'),
    major: Yup.string().min(2, 'Too Short').max(50, 'Too Long').required('Required'),
  });

  // const validateForm = () => {
  //   setValidationError({
  //     first: formData.first === '',
  //     last: formData.last === '',
  //     email: formData.email === '',
  //     password: formData.password === '',
  //     confirm: formData.confirm !== formData.password,
  //     major: formData.major === '',
  //     year: formData.year === '',
  //   });

  // return Object.values(validationError).every(err => !err);
  // };

  const submitLoginForm = async () => {
    try {
      await RegisterSchema.validate(formData, { abortEarly: false });
    } catch (errs) {
      const newValidationError = { ...defaultValidationError };
      console.log(errs);
      errs.inner.forEach(err => {
        console.log(err);
        newValidationError[err.path] = err.message;
      });
      setValidationError(newValidationError);
      return;
    }
    // console.log(errors);
    // if (!validateForm()) return;

    const data = {
      user: {
        email: formData.email,
        firstName: formData.first,
        lastName: formData.last,
        password: formData.password,
        graduationYear: Number(formData.year),
        major: formData.major,
      },
    };

    const loginData = {
      email: data.user.email,
      password: data.user.password,
    };

    // TODO: Move to API section
    let res;
    try {
      await axios.post(`${config.apiBase}/auth/registration`, data);
    } catch (err) {
      console.log(err);
      return;
    }

    let token;
    try {
      token = (await axios.post(`${config.apiBase}/auth/login`, loginData)).data.token;
    } catch (err) {
      console.log('could not login');
      return;
    }

    try {
      res = await axios.get(`${config.apiBase}/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (err) {
      console.log('could not get token');
      return;
    }

    const { user } = res.data;
    setCookie('user', JSON.stringify({ ...user, auth: token }), {
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // One week
      sameSite: true,
    });

    router.push('/');
  };

  return (
    <div className={style.content}>
      <div className={style.formWrapper}>
        <h2 className={style.title}>
          Welcome
          <br />
          to ACM!
        </h2>
        <RegisterForm
          formData={formData}
          formValidation={validationError}
          setField={setField}
          submitForm={submitLoginForm}
        />
      </div>
    </div>
  );
};

export default Register;
