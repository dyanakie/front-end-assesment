import React from 'react';
import PropTypes from 'prop-types';

export const Main = ({children}) => (<div>{children}</div>);

Main.propTypes = {
    children: PropTypes.node.isRequired,
};

