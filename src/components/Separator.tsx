import React from 'react';
import { View } from 'react-native';
import { HEIGHT, WIDTH } from '../constants/Dimensions';

const Separator = ({ height, width, ...extraProps }) => (
    <View style={{ height, width, ...extraProps }} />
);

Separator.defaultProps = {
    height: HEIGHT * 0,
    width: WIDTH * 0,
};

export default Separator;