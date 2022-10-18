import { AiOutlineMail } from 'react-icons/ai';
import FormInput from '../FormItem';
import SubmitButton from '../SubmitButton';

interface PasswordResetProps {
  email: string;
  setEmail: (value: string) => void;
  validationError: boolean;
  onSubmit: () => void;
}

const PasswordResetForm = ({ email, setEmail, validationError, onSubmit }: PasswordResetProps) => {
  return (
    <>
      <FormInput
        icon={<AiOutlineMail />}
        name="email"
        type="email"
        placeholder="Email (user@ucsd.edu)"
        validationMessage="Required"
        validationError={validationError}
        value={email}
        setValue={setEmail}
      />
      <SubmitButton text="Submit" onClick={onSubmit} />
    </>
  );
};

export default PasswordResetForm;
