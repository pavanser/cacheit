import { IStorage, AbstractLocalStorageStore } from 'classes';

abstract class AbstractLocalStorage implements IStorage {
  abstract createStore(): AbstractLocalStorageStore;

  abstract removeStore(): void;
}

export default AbstractLocalStorage;
