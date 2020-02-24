import { AbstractSessionStorageStore, IStore } from 'classes';
import { IResult, IStoreItem } from 'interfaces';
import { Actions, Statuses } from 'enums';

class SessionStorageStore extends AbstractSessionStorageStore {
  add(item: IStoreItem): Promise<IResult> {
    return Promise.resolve({
      status: Statuses.success,
      action: Actions.add,
      items: []
    });
  }

  addBulk(items: IStoreItem[]): Promise<IResult> {
    return Promise.resolve({
      status: Statuses.success,
      action: Actions.add,
      items: []
    });
  }

  clear(key: string): Promise<IResult> {
    return Promise.resolve({
      status: Statuses.success,
      action: Actions.clear,
      items: []
    });
  }

  delete(key: string): Promise<IResult> {
    return Promise.resolve({
      status: Statuses.success,
      action: Actions.delete,
      items: []
    });
  }

  deleteBulk(...keys: string[]): Promise<IResult> {
    return Promise.resolve({
      status: Statuses.success,
      action: Actions.delete,
      items: []
    });
  }

  get(key: string): Promise<IStoreItem> {
    return Promise.resolve({ id: 'test-id' });
  }

  getAll(): Promise<IStoreItem[]> {
    return Promise.resolve([{ id: 'test-id' }]);
  }

  keys(): Promise<string[]> {
    return Promise.resolve([]);
  }

  put(item: IStoreItem): Promise<IResult> {
    return Promise.resolve({
      status: Statuses.success,
      action: Actions.update,
      items: []
    });
  }

  putBulk(items: IStoreItem[]): Promise<IResult> {
    return Promise.resolve({
      status: Statuses.success,
      action: Actions.update,
      items: []
    });
  }

  upsert(item: IStoreItem): Promise<IResult> {
    return Promise.resolve({
      status: Statuses.success,
      action: Actions.upsert,
      items: []
    });
  }

  upsertBulk(items: IStoreItem[]): Promise<IResult> {
    return Promise.resolve({
      status: Statuses.success,
      action: Actions.upsert,
      items: []
    });
  }
}

export default SessionStorageStore;