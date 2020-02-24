import { AbstractSessionStorage, AbstractSessionStorageStore } from 'classes';
import SessionStorageStore from 'stores/SessionStorageStore';

class SessionStorage extends AbstractSessionStorage {
  createStore(): AbstractSessionStorageStore {
    return new SessionStorageStore();
  }

  removeStore(): void {
  }

}

export default SessionStorage;