import type { HTMLInputTypeAttribute, ReactNode } from 'react';
import TextField from '@mui/material/TextField';
import { VscRunErrors } from 'react-icons/vsc';
import style from './style.module.scss';

interface FormInputProps {
  icon: ReactNode;
  name: string;
  type: HTMLInputTypeAttribute;
  placeholder: string;
  formRegister: Object;
  errors: any;
}

const FormInput = ({ icon, name, type, placeholder, formRegister, errors }: FormInputProps) => {
  return (
    <div className={style.formItem}>
      <div className={style.formInput}>
        <div className={style.iconContainer}>{icon}</div>
        <input
          className={style.inputField}
          required
          name={name}
          type={type}
          placeholder={placeholder}
          {...formRegister}
        />
      </div>
      <p className={style.formError}>{errors[name] && errors[name].message}</p>
    </div>
  );
};

export default FormInput;
