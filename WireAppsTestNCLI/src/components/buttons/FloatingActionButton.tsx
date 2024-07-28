import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import React from 'react';
import VectorIcon from '../elements/VectorIcon/VectorIcon';
import {IconTypes} from '../elements/VectorIcon/VectorIconTypes';

interface FloatingActionButtonProps extends TouchableOpacityProps {
  /**
   * If true, the button will be hidden
   */
  hidden: boolean;
  /**
   * On press event handler
   * @returns 
   */
  onPress: () => void;
  /**
   * Icon to display in the button
   */
  icon?: {group: IconTypes; name: string};
}

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
  hidden,
  icon = {group: 'MaterialIcons', name: 'add'},
  className,
  ...restProps
}) => {
  return (
    <TouchableOpacity
      className={`flex items-center justify-center bg-quinary rounded-full h-[70px] w-[70px] absolute bottom-5 right-3 shadow-lg ${
        hidden && 'hidden'
      } ${className}`}
      {...restProps}>
      <VectorIcon
        type={icon.group}
        name={icon.name}
        size={35}
        color={'white'}
      />
    </TouchableOpacity>
  );
};

export default FloatingActionButton;
