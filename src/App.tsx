import { useEffect, useState } from 'react';
import InputArray from './components/Main';

function App() {
  const [notes, setNotes] = useState<string[]>(['Test 1', 'Test 2']);

  useEffect(() => {
    console.log(notes);
  }, [notes]);

  return (
    <InputArray
      values={notes}
      onValueChange={(changedValues) => {
        setNotes(changedValues);
      }}
    />
  );
}

export default App;
