import { useEffect, useState } from 'react';

type InputArrayProps = {
  values: string[];
  onValueChange: (changedValues: string[]) => void;
};

/**
 * The component recieves a array of data and an onValueChange that recieves the same array with the updated values.
 */
const InputArray: React.FC<InputArrayProps> = ({ values, onValueChange }: InputArrayProps) => {
  const [internValues, setInternValues] = useState<string[]>(['']);

  useEffect(() => {
    setInternValues([...values, '']);
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'yellowgreen',
      }}
    >
      {internValues.map((v, idx) => (
        <div key={`key-${idx}`} style={{ margin: '1rem', width: 'calc(100% - 4rem)' }}>
          <input
            style={{ margin: '0', padding: '0.5rem', fontWeight: 'bold', width: '100%' }}
            type="text "
            value={v}
            onChange={(event) => {
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
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default InputArray;
