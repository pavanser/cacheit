import { IStorage, AbstractIndexedDBStore } from 'classes';

abstract class AbstractIndexedDB implements IStorage {
  abstract createStore(): AbstractIndexedDBStore;

  abstract removeStore(): void;
}

export default AbstractIndexedDB;