import { AbstractLocalStorage, AbstractLocalStorageStore } from 'classes';
import LocalStorageStore from 'stores/LocalStorageStore';

class LocalStorage extends AbstractLocalStorage {
  createStore(): AbstractLocalStorageStore {
    return new LocalStorageStore();
  }

  removeStore(): void {}
}

export default LocalStorage;
