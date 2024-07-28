import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import ActionButton from '../ActionButton';

describe('ActionButton', () => {
  test('renders button label correctly', () => {
    const {getByText} = render(<ActionButton label="Click me" />);
    const buttonLabel = getByText('Click me');
    expect(buttonLabel).toBeTruthy();
  });

  test('calls onPress callback when button is pressed', () => {
    const onPressMock = jest.fn();
    const {getByText} = render(
      <ActionButton label="Click me" onPress={onPressMock} />,
    );
    const button = getByText('Click me');
    fireEvent.press(button);
    expect(onPressMock).toHaveBeenCalled();
  });
});
