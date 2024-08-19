
import { useWindowDimensions } from 'react-native';

// Custom hook to get screen dimensions
export const useScreenDimensions = () => {
  const { width, height } = useWindowDimensions();
  return { width, height };
};

// Static function for cases where hooks are not appropriate
export const getScreenDimensions = () => {
  const { width, height } = useWindowDimensions();
  return { width, height };
};
