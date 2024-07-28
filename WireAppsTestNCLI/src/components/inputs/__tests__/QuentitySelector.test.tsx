import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import QuentitySelector from '../QuentitySelector';
import {mockCartItems} from '../../../constants/mockValues';

describe('QuentitySelector', () => {
  it('renders the item quentity', () => {
    const {getByText} = render(<QuentitySelector item={mockCartItems[1]} />);
    expect(getByText(mockCartItems[1].quantity.toString())).toBeTruthy();
  });
});
