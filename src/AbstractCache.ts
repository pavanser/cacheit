import LocalStorage from "storages/LocalStorage";
import IndexedDB from "storages/IndexedDB";
import SessionStorage from "storages/SessionStorage";

abstract class AbstractCache {
  abstract storage: CacheIT.IStorage;

  static defineStorageType(): CacheIT.IStorage {

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
