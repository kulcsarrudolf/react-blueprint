import { useEffect, useState } from 'react';
import { InputArray } from './components';

function App() {
  const [notes, setNotes] = useState<string[]>(['Test 1', 'Test 2']);

  useEffect(() => {
    // TODO: init notes
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
