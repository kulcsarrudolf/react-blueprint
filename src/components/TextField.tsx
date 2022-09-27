import { Input } from './TextField.styles';

type TextFieldProps = {
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const TextField = ({ value, onChange }: TextFieldProps) => (
  <Input type="text" onChange={onChange} value={value} />
);

export default TextField;
