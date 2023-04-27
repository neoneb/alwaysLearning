import { useContext } from 'react';
import NavigationContext from '../context/Navigation';

function useNavigation() {
  return useContext(NavigationContext);
}

export default useNavigation;
