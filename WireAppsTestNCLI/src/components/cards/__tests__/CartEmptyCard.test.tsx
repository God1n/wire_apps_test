import React from 'react';
import {render} from '@testing-library/react-native';
import CartEmptyCard from '../CartEmptyCard';

describe('CartEmptyCard', () => {
  it('renders without crashing', () => {
    render(<CartEmptyCard />);
  });
});
