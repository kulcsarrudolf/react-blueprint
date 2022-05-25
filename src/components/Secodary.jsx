import { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

const Secondary = ({ id, name }) => {
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    setIsEnabled(true);
  }, []);

  return (
    <>
      <h1>Secondary Component</h1>
      <p>{`ID: ${id}`}</p>
      <p>{`Name: ${name}`}</p>
      {isEnabled && <p>Just a test</p>}
    </>
  );
};

Secondary.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Secondary;
