import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import CartItemCard from '../CartItemCard';
import {mockCartItems} from '../../../constants/mockValues';

describe('CartItemCard', () => {
  it('renders the item name', () => {
    const {getByText} = render(
      <CartItemCard item={mockCartItems[0]} onPressInfo={() => {}} />,
    );
    expect(getByText(mockCartItems[0].name)).toBeTruthy();
  });

  it('calls onPressInfo when the info button is pressed', () => {
    const onPressInfo = jest.fn();
    const {getByTestId} = render(
      <CartItemCard item={mockCartItems[0]} onPressInfo={onPressInfo} />,
    );
    fireEvent.press(getByTestId('info-button'));
    expect(onPressInfo).toHaveBeenCalled();
  });
});
