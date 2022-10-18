/* eslint-disable no-unused-vars */
export interface LoginFormData {
  email: string;
  password: string;
}

export interface LoginValidationError {
  email: boolean;
  password: boolean;
}

export interface LoginFormProps {
  formData: LoginFormData;
  formValidation: LoginValidationError;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  submitForm: () => any;
}
