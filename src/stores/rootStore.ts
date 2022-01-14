import { DataStore } from './dataStores';
import { ComponentsStore } from './componentsStore';

export class RootStore {
  dataStore: DataStore;
  componentsStore: ComponentsStore;

  constructor() {
    this.dataStore = new DataStore();
    this.componentsStore = new ComponentsStore();
  }
}
