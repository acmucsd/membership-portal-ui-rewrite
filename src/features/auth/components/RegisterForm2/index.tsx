import { RegisterFormProps } from '@/lib/types';
import Link from 'next/link';
import majors from '@/constants/majors.json';

import { AiOutlineUser, AiOutlineMail } from 'react-icons/ai';
import { VscLock } from 'react-icons/vsc';
import { HiOutlineAcademicCap } from 'react-icons/hi';
import { BsBook } from 'react-icons/bs';

import { useForm, Controller } from 'react-hook-form';

import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import FormInput2 from '../FormItem2';
import FormSelect from '../FormSelect';
import SubmitButton from '../SubmitButton';
import style from './style.module.scss';

const years = [...Array(6)].map((_, i) => i + new Date().getFullYear());

const RegisterForm2 = ({ formData, formValidation, setField, submitForm }: RegisterFormProps) => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  function onSubmit(data: Object) {
    console.log('submitting');
    console.log(data);
  }

  return (
    <>
      <FormInput2
        icon={<AiOutlineUser />}
        name="first"
        type="name"
        placeholder="First name"
        formRegister={register('first', {
          required: 'Required',
          maxLength: { value: 20, message: 'Too long' },
        })}
        errors={errors}
      />
      <FormInput2
        icon={<AiOutlineUser />}
        name="last"
        type="name"
        placeholder="Last name"
        formRegister={register('last', {
          required: 'Required',
          maxLength: { value: 20, message: 'Too long' },
        })}
        errors={errors}
      />
      <FormInput2
        icon={<AiOutlineMail />}
        name="email"
        type="email"
        placeholder="UCSD Email"
        formRegister={register('email', {
          required: 'Required',
          pattern: { value: /.+@.+\..+/, message: 'Invalid email' },
        })}
        errors={errors}
      />
      <FormInput2
        icon={<VscLock />}
        name="password"
        placeholder="Password"
        type="password"
        formRegister={register('password', {
          required: 'Required',
          minLength: { value: 9, message: 'Password must be at least 9 characters' },
          maxLength: { value: 20, message: 'Password must be at most 20 characters' },
        })}
        errors={errors}
      />
      <FormInput2
        icon={<VscLock />}
        name="confirm"
        type="password"
        placeholder="Confirm password"
        formRegister={register('confirm', {
          validate: (val: string) => val === watch('password') || 'Passwords should match',
        })}
        errors={errors}
      />
      <FormSelect
        icon={<BsBook />}
        name="major"
        placeholder="Major"
        options={majors.majors}
        control={control}
        errors={errors}
      />
      <FormSelect
        icon={<HiOutlineAcademicCap />}
        name="year"
        placeholder="Graduation Year"
        options={years}
        control={control}
        errors={errors}
      />
      <SubmitButton text="Sign Up" onClick={handleSubmit(onSubmit)} />
      <Link href="/login">
        <div className={style.signInLink}>
          <a href="replace">
            Already have an account? <b>Sign in.</b>
          </a>
        </div>
      </Link>
      <SubmitButton
        text="debug"
        onClick={() => {
          console.log(errors);
        }}
      />
    </>
  );
};

export default RegisterForm2;
