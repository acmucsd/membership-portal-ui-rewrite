import { RegisterFormProps } from '@/lib/types';
import Link from 'next/link';
import majors from '@/constants/majors.json';

import { AiOutlineUser, AiOutlineMail } from 'react-icons/ai';
import { VscLock } from 'react-icons/vsc';
import { HiOutlineAcademicCap } from 'react-icons/hi';
import { BsBook } from 'react-icons/bs';

import FormInput from '../FormItem';
import FormSelect from '../FormSelect';
import SubmitButton from '../SubmitButton';
import style from './style.module.scss';

const years = [...Array(6)].map((_, i) => i + new Date().getFullYear());

const RegisterForm = ({ formData, formValidation, setField, submitForm }: RegisterFormProps) => {
  return (
    <>
      <FormInput
        icon={<AiOutlineUser />}
        name="first"
        type="name"
        placeholder="First name"
        validationError={formValidation.first}
        value={formData.first}
        setValue={setField('first')}
      />
      <FormInput
        icon={<AiOutlineUser />}
        name="last"
        type="name"
        placeholder="Last name"
        validationError={formValidation.last}
        value={formData.last}
        setValue={setField('last')}
      />
      <FormInput
        icon={<AiOutlineMail />}
        name="email"
        type="email"
        placeholder="UCSD Email"
        validationError={formValidation.email}
        value={formData.email}
        setValue={setField('email')}
      />
      <FormInput
        icon={<VscLock />}
        name="password"
        placeholder="Password"
        type="password"
        validationError={formValidation.password}
        value={formData.password}
        setValue={setField('password')}
      />
      <FormInput
        icon={<VscLock />}
        name="password-confirm"
        type="password"
        placeholder="Confirm password"
        validationError={formValidation.confirm}
        value={formData.confirm}
        setValue={setField('confirm')}
      />
      <FormSelect
        icon={<BsBook />}
        name="major"
        placeholder="Major"
        validationError={formValidation.major}
        value={formData.major}
        setValue={setField('major')}
        options={majors.majors}
      />
      <FormSelect
        icon={<HiOutlineAcademicCap />}
        name="year"
        placeholder="Graduation Year"
        validationError={formValidation.year}
        value={formData.year}
        setValue={setField('year')}
        options={years}
      />
      <SubmitButton text="Sign Up" onClick={submitForm} />
      <Link href="/login">
        <div className={style.signInLink}>
          <a href="replace">
            Already have an account? <b>Sign in.</b>
          </a>
        </div>
      </Link>
    </>
  );
};

export default RegisterForm;
