import { useContext } from 'react';

import { StoreContext } from '../App';
import { ApplicationState } from '../store';

function useStore() {
  const store = useContext<ApplicationState>(StoreContext);

  return store;
}

export default useStore;
