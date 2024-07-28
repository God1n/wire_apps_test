import React from 'react';
import {render} from '@testing-library/react-native';
import VectorIcon from '../VectorIcon/VectorIcon';

describe('VectorIcon', () => {
  it('renders without crashing', () => {
    render(<VectorIcon type="Feather" name="home" />);
  });
});
