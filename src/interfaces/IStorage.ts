import { AbstractLocalStorageStore } from 'classes';
import AbstractSessionStorageStore from 'classes/stores/AbstractSessionStorageStore';
import AbstractIndexedDBStore from 'classes/stores/AbstractIndexedDBStore';

interface IStorage {
  /**
   * Method used for creating different storage types in depends from browser and its mode;
   * It will return one of AbstractLocalStorageStore | AbstractSessionStorageStore | AbstractIndexedDBStore instance;
   * */
  createStore(): AbstractLocalStorageStore | AbstractSessionStorageStore | AbstractIndexedDBStore;

  /**
   * Method used for removing current store instance
   * */
  removeStore(): void;
}

export default IStorage;