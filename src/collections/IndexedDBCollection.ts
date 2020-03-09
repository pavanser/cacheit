import { ICollection, ICollectionItem, IResult } from "interfaces";
import { Actions, Statuses } from "enums";
import Chain from "core/Chain";

class IndexedDBCollection implements ICollection {
  readonly name: string;

  constructor(collectionName: string) {
    this.name = collectionName;
  }

  add(item: ICollectionItem): Promise<IResult> {
    return Promise.resolve({
      status: Statuses.Success,
      action: Actions.Add,
      items: [],
    });
  }

  addBulk(items: ICollectionItem[]): Promise<IResult> {
    return Promise.resolve({
      status: Statuses.Success,
      action: Actions.Add,
      items: [],
    });
  }

  clear(key: string): Promise<IResult> {
    return Promise.resolve({
      status: Statuses.Success,
      action: Actions.Clear,
      items: [],
    });
  }

  delete(key: string): Promise<IResult> {
    return Promise.resolve({
      status: Statuses.Success,
      action: Actions.Delete,
      items: [],
    });
  }

  deleteBulk(...keys: string[]): Promise<IResult> {
    return Promise.resolve({
      status: Statuses.Success,
      action: Actions.Delete,
      items: [],
    });
  }

  get(key: string): Promise<ICollectionItem> {
    return Promise.resolve({ id: "test-id" });
  }

  getAll(): Promise<Chain> {
    return Promise.resolve().then(() => new Chain([]));
  }

  keys(): Promise<string[]> {
    return Promise.resolve([]);
  }

  put(item: ICollectionItem): Promise<IResult> {
    return Promise.resolve({
      status: Statuses.Success,
      action: Actions.Update,
      items: [],
    });
  }

  putBulk(items: ICollectionItem[]): Promise<IResult> {
    return Promise.resolve({
      status: Statuses.Success,
      action: Actions.Update,
      items: [],
    });
  }

  upsert(item: ICollectionItem): Promise<IResult> {
    return Promise.resolve({
      status: Statuses.Success,
      action: Actions.Upsert,
      items: [],
    });
  }

  upsertBulk(items: ICollectionItem[]): Promise<IResult> {
    return Promise.resolve({
      status: Statuses.Success,
      action: Actions.Upsert,
      items: [],
    });
  }
}

export default IndexedDBCollection;
