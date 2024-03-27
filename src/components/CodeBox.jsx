import React from 'react';

import {useComputedColorScheme, Code} from '@mantine/core';
import PropTypes from 'prop-types';

const CodeBox = ({children, ...props}) => {
	const isDarkTheme = useComputedColorScheme() === 'dark';
	const customStyle = isDarkTheme ? {backgroundColor: '#222'} : {};
	return <Code style={customStyle} {...props}>{children}</Code>;
};

CodeBox.propTypes = {
	children: PropTypes.node
};

export default CodeBox;
