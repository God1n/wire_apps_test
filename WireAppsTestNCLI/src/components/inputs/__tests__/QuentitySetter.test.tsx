import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import QuentitySetter from '../QuentitySetter';

describe('QuentitySetter', () => {
  test('renders correctly', () => {
    const {getByTestId} = render(
      <QuentitySetter
        quentity={5}
        setQuentity={() => {}}
        stockStatus="In Stock"
      />,
    );
    const quentitySetter = getByTestId('quentity-setter');
    expect(quentitySetter).toBeTruthy();
  });

  test('displat the right quentity', () => {
    const {findByText} = render(
      <QuentitySetter
        quentity={5}
        setQuentity={() => {}}
        stockStatus="In Stock"
      />,
    );
    const quentity = findByText('5');
    expect(quentity).toBeTruthy();
  });

  test('When out of stock quentity should be unavailable', () => {
    const {findByText} = render(
      <QuentitySetter
        quentity={5}
        setQuentity={() => {}}
        stockStatus="Out of Stock"
      />,
    );
    const quentity = findByText('Unavailable');
    expect(quentity).toBeTruthy();
  });
});
