import {useEffect, useState} from 'react';
import {useWindowDimensions} from 'react-native';

const useOrientation = () => {
  const [orientation, setOrientation] = useState<string>('');
  const window = useWindowDimensions();

  useEffect(() => {
    if (window.width > window.height) {
      setOrientation('landscape');
    } else {
      setOrientation('portrait');
    }
  }, [window]);

  return orientation;
};

export default useOrientation;
