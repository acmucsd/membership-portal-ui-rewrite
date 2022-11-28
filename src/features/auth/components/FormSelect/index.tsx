import React, { ReactNode, useState } from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import Autocomplete from '@mui/material/Autocomplete';
import { Controller } from 'react-hook-form';
import IconButton from '@mui/material/IconButton';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import style from './style.module.scss';

interface FormSelectProps {
  icon: ReactNode;
  name: string;
  options: (string | number)[];
  placeholder: string;
  control: any;
  errors: any;
  rules: any;
}

const FormSelect = ({
  icon,
  name,
  options,
  placeholder,
  control,
  errors,
  rules,
}: FormSelectProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={style.formItem}>
      <div className={style.formInput}>
        <div className={style.iconContainer}>{icon}</div>
        <Controller
          name={name}
          control={control}
          rules={rules}
          render={({ field: { onChange } }) => (
            <StyledEngineProvider injectFirst>
              <Autocomplete
                className={style.autocomplete}
                open={open}
                renderInput={params => (
                  <div ref={params.InputProps.ref} className={style.inputDiv}>
                    <input
                      type="text"
                      {...params.inputProps}
                      className={style.inputField}
                      onClick={() => {}}
                    />
                    <IconButton
                      onClick={() => {
                        setOpen(!open);
                      }}
                      size="small"
                    >
                      <ArrowDropDownIcon className={open ? style.openIcon : ''} />
                    </IconButton>
                  </div>
                )}
                options={[placeholder, ...options]}
                getOptionLabel={option => option.toString()}
                getOptionDisabled={option => option === placeholder}
                size="small"
                onOpen={() => {
                  setOpen(true);
                }}
                onClose={() => {
                  setOpen(false);
                }}
                onChange={(_, data) => {
                  setOpen(false);
                  onChange(data);
                  return data;
                }}
                defaultValue={placeholder}
              />
            </StyledEngineProvider>
          )}
        />
      </div>
      <p className={style.formError}>{errors[name] && errors[name].message}</p>
    </div>
  );
};

export default FormSelect;
