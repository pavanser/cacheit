import AbstractLocalStorage from 'classes/storages/AbstractLocalStorage';
import AbstractSessionStorage from 'classes/storages/AbstractSessionStorage';
import AbstractIndexedDB from 'classes/storages/AbstractIndexedDB';
import LocalStorage from 'storages/LocalStorage';
import IndexedDB from 'storages/IndexedDB';
import SessionStorage from 'storages/SessionStorage';

abstract class AbstractCache {
  abstract storage: AbstractLocalStorage | AbstractSessionStorage | AbstractIndexedDB;

  static defineStorageType():
    AbstractLocalStorage |
    AbstractSessionStorage |
    AbstractIndexedDB {

    if (window.indexedDB) {
      return new IndexedDB();
    }

    if (window.sessionStorage) {
      return new SessionStorage();
    }

    return new LocalStorage();
  };
}

export default AbstractCache;
