import IStorage = CacheIT.IStorage;
import IndexedDBStore from 'stores/IndexedDBStore';

class IndexedDB implements IStorage {
  createStore(): CacheIT.IStore {
    return new IndexedDBStore();
  }

  removeStore(): void {
  }

}

export default IndexedDB;