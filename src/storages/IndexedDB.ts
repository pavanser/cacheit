import { AbstractIndexedDB, AbstractIndexedDBStore } from 'classes';
import { IndexedDBStore } from 'stores';

class IndexedDB extends AbstractIndexedDB {
  createStore(): AbstractIndexedDBStore {
    return new IndexedDBStore();
  }

  removeStore(): void {
  }
}

export default IndexedDB;