import style from './style.module.scss';

interface SubmitButtonProps {
  text: string;
  onClick: () => void;
}

const SubmitButton = ({ text, onClick }: SubmitButtonProps) => {
  return (
    <button type="submit" onClick={onClick} className={style.submit}>
      {text}
    </button>
  );
};

export default SubmitButton;
