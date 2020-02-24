import { IStorage, AbstractSessionStorageStore } from 'classes';

abstract class AbstractSessionStorage implements IStorage {
  abstract createStore(): AbstractSessionStorageStore;

  abstract removeStore(): void;
}

export default AbstractSessionStorage;