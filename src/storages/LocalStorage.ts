import LocalStorageStore from 'stores/LocalStorageStore';
import IStorage = CacheIT.IStorage;
import IStore = CacheIT.IStore;

class LocalStorage implements IStorage {
  createStore(): IStore {
    return new LocalStorageStore();
  }

  removeStore(): void {}
}

export default LocalStorage;
