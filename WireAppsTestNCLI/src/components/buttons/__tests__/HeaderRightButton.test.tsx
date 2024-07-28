import React from 'react';
import {render} from '@testing-library/react-native';
import HeaderRightButton from '../HeaderRightButton';

describe('HeaderRightButton', () => {
  it('renders without crashing', () => {
    render(<HeaderRightButton />);
  });
});
