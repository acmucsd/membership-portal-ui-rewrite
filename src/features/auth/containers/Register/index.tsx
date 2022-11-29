import axios, { AxiosError } from 'axios';
import config from '@/lib/config';
import RegisterForm, { RegisterFormData } from '@/features/auth/components/RegisterForm';
import { toast } from 'react-toastify';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router';
import { toastWithSubtitle } from '@/lib/utils';
import style from './style.module.scss';

const Register = () => {
  const [_, setCookie] = useCookies(['user']);
  const router = useRouter();

  const submitLoginForm = async (formData: RegisterFormData) => {
    // TODO: Move to API section
    const registerData = {
      user: {
        email: formData.email,
        firstName: formData.first,
        lastName: formData.last,
        password: formData.password,
        graduationYear: formData.year,
        major: formData.major,
      },
    };

    try {
      await axios.post(`${config.apiBase}/auth/registration`, registerData);
    } catch (err) {
      if (err instanceof AxiosError) toast(toastWithSubtitle('Unable to register!', err.message));
      else toast(toastWithSubtitle('Unable to register!', ''));
      return;
    }

    toast(toastWithSubtitle('Registered sucessfully!', ''));

    try {
      const { token } = (await axios.post(`${config.apiBase}/auth/login`, formData)).data;
      const { user } = (
        await axios.get(`${config.apiBase}/user`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
      ).data;
      setCookie('user', JSON.stringify({ ...user, auth: token }), {
        path: '/',
        maxAge: 60 * 60 * 24 * 7, // One week
        sameSite: true,
      });
      router.push('/');
    } catch (err) {
      if (err instanceof AxiosError) toast(toastWithSubtitle('Unable to login!', err.message));
      else toast(toastWithSubtitle('Unable to login!', ''));
      return;
    }

    toast(toastWithSubtitle('Logged in sucessfully!', ''));
  };

  return (
    <div className={style.content}>
      <div className={style.formWrapper}>
        <h2 className={style.title}>
          Welcome
          <br />
          to ACM!
        </h2>
        <RegisterForm submitForm={submitLoginForm} />
      </div>
    </div>
  );
};

export default Register;
