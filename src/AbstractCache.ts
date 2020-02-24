import LocalStorage from 'storages/LocalStorage';
import IndexedDB from 'storages/IndexedDB';
import SessionStorage from 'storages/SessionStorage';
import IStorage = CacheIT.IStorage;

abstract class AbstractCache {
  abstract storage: IStorage;

  static defineStorageType(): IStorage {

    if (window.indexedDB) {
      return new IndexedDB();
    }

    if (window.sessionStorage) {
      return new SessionStorage();
    }

    return new LocalStorage();
  }
}

export default AbstractCache;
