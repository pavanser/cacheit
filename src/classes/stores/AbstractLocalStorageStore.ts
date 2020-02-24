import { IStore } from 'classes';
import { IResult, IStoreItem } from 'interfaces';

abstract class AbstractLocalStorageStore implements IStore {
  store: Storage = window.localStorage;

  abstract add(item: IStoreItem): Promise<IResult>;

  abstract addBulk(items: IStoreItem[]): Promise<IResult>;

  abstract clear(key: string): Promise<IResult>;

  abstract delete(key: string): Promise<IResult>;

  abstract deleteBulk(...keys: string[]): Promise<IResult>;

  abstract get(key: string): Promise<IStoreItem>;

  abstract getAll(): Promise<IStoreItem[]>;

  abstract keys(): Promise<string[]>;

  abstract put(item: IStoreItem): Promise<IResult>;

  abstract putBulk(items: IStoreItem[]): Promise<IResult>;

  abstract upsert(item: IStoreItem): Promise<IResult>;

  abstract upsertBulk(items: IStoreItem[]): Promise<IResult>;
}

export default AbstractLocalStorageStore;