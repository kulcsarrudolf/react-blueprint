import { useEffect, useState } from 'react';

type MainProps = {
  id: string;
  name: string;
};

const Main: React.FC<MainProps> = ({ id, name }: MainProps) => {
  const [isEnabled, setIsEnabled] = useState<boolean>(false);

  useEffect(() => {
    setIsEnabled(true);
  }, []);

  return (
    <>
      <h1>Main Component</h1>
      <p>{`ID: ${id}`}</p>
      <p>{`Name: ${name}`}</p>
      {isEnabled && <p>Just a test</p>}
    </>
  );
};

export default Main;
