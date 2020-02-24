import IStorage = CacheIT.IStorage;
import IStore = CacheIT.IStore;

import { SessionStorageStore } from 'stores';

class SessionStorage implements IStorage {
  createStore(): IStore {
    return new SessionStorageStore();
  }

  removeStore(): void {
  }

}

export default SessionStorage;