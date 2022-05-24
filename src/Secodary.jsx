import PropTypes from 'prop-types';

const Secondary = ({ id, name }) => {
  return (
    <>
      <h1>Secondary Component</h1>
      <p>{id}</p>
      <p>{name}</p>
    </>
  );
};

Secondary.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Secondary;
