import { useEffect, useState } from 'react';
import { InputArrayContainer, InputArrayElement } from './InputArray.style';
import { TextField } from './TextField';

type InputArrayProps = {
  values: string[];
  onValueChange: (changedValues: string[]) => void;
};

/**
 * The component recieves a array of data and an onValueChange that recieves the same array with the updated values.
 */
const InputArray = ({ values, onValueChange }: InputArrayProps) => {
  const [internValues, setInternValues] = useState<string[]>(['']);

  useEffect(() => {
    setInternValues([...values, '']);
  }, []);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>, idx: number) => {
    const currentValue: string = event.target.value;
    const valuesMirror: string[] = [...internValues];

    valuesMirror[idx] = currentValue;

    const valuesMirrorLastElement: string = valuesMirror.at(-1) || '';

    if (valuesMirrorLastElement?.length > 0) {
      valuesMirror.push('');
    }

    if (idx + 1 < valuesMirror.length && currentValue.length === 0) {
      valuesMirror.splice(idx, 1);
    }

    setInternValues(valuesMirror);
    onValueChange(valuesMirror.slice(0, valuesMirror.length - 1));
  };

  return (
    <InputArrayContainer>
      {internValues.map((value: string, idx: number) => (
        <InputArrayElement key={`key-${idx}`}>
          <TextField
            value={value}
            onChange={(event) => {
              onChange(event, idx);
            }}
          />
        </InputArrayElement>
      ))}
    </InputArrayContainer>
  );
};

export default InputArray;
