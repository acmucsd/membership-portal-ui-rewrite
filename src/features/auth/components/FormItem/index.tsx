import type { HTMLInputTypeAttribute, ReactNode } from 'react';
import TextField from '@mui/material/TextField';
import style from './style.module.scss';

interface FormInputProps {
  icon: ReactNode;
  name: string;
  type: HTMLInputTypeAttribute;
  placeholder: string;
  validationError: string;
  value: string;
  setValue: (value: string) => void;
}

const FormInput = ({
  icon,
  name,
  type,
  placeholder,
  validationError = '',
  value,
  setValue,
}: FormInputProps) => {
  return (
    <div className={style.formItem}>
      <div className={style.formInput}>
        <div className={style.iconContainer}>{icon}</div>
        <input
          className={style.inputField}
          required
          value={value}
          onChange={e => setValue(e.target.value)}
          name={name}
          type={type}
          placeholder={placeholder}
        />
      </div>
      <p className={style.formError}>{validationError}</p>
    </div>
  );
};

export default FormInput;
