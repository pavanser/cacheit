import IndexedDB from "storages/IndexedDB";
import SessionStorage from "storages/SessionStorage";
import LocalStorage from "storages/LocalStorage";

class CacheIt implements CacheIT.AbstractCache {
  static defineStorageType(): CacheIT.IStorage {

    if (window.indexedDB) {
      return new IndexedDB();
    }

    if (window.sessionStorage) {
      return new SessionStorage();
    }

    return new LocalStorage();
  }

  storage: CacheIT.IStorage = CacheIt.defineStorageType();
}

export default CacheIt;
