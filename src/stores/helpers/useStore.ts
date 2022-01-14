import { useContext } from 'react';
import { StoreContext } from './storeContext';
import { RootStore } from '../rootStore';

export const useStore = (): RootStore => useContext(StoreContext);
