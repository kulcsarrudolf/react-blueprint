type MainProps = {
  id: string;
  name: string;
};

const Main: React.FC<MainProps> = ({ id, name }: MainProps) => (
  <>
    <h1>Main Component</h1>
    <p>{`ID: ${id}`}</p>
    <p>{`Name: ${name}`}</p>
  </>
);

export default Main;
