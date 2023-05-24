import React from 'react';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';

const Icon = ({ icon, fontSize, color }) => {
  return (
    <>
      <IconContext.Provider value={{ style: { fontSize, color } }}>
        <div>{icon}</div>
      </IconContext.Provider>
    </>
  );
};

Icon.propTypes = {
  icon: PropTypes.node.isRequired,
  fontSize: PropTypes.string,
  color: PropTypes.any,
};

Icon.defaultProps = {
  fontSize: '18px',
  color: 'black',
};

export default Icon;