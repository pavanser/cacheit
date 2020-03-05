import * as CacheIT from "interfaces";

class SessionStorageCollection implements CacheIT.ICollection {
  readonly name: string;

  private collection: CacheIT.ICollectionItem[];

  constructor(collectionName: string) {
    const collectionString = window.sessionStorage.getItem(collectionName);

    this.name = collectionName;
    this.collection = collectionString ? JSON.parse(collectionString) : [];
  }

  add(item: CacheIT.ICollectionItem): Promise<CacheIT.IResult> {
    throw new Error("Method not implemented.");
  }

  addBulk(items: CacheIT.ICollectionItem[]): Promise<CacheIT.IResult> {
    throw new Error("Method not implemented.");
  }

  clear(key: string): Promise<CacheIT.IResult> {
    throw new Error("Method not implemented.");
  }

  get(key: string): Promise<CacheIT.ICollectionItem> {
    throw new Error("Method not implemented.");
  }

  getAll(): Promise<CacheIT.ICollectionItem[]> {
    throw new Error("Method not implemented.");
  }

  delete(key: string): Promise<CacheIT.IResult> {
    throw new Error("Method not implemented.");
  }

  deleteBulk(...keys: string[]): Promise<CacheIT.IResult> {
    throw new Error("Method not implemented.");
  }

  keys(): Promise<string[]> {
    throw new Error("Method not implemented.");
  }

  put(item: CacheIT.ICollectionItem): Promise<CacheIT.IResult> {
    throw new Error("Method not implemented.");
  }

  putBulk(items: CacheIT.ICollectionItem[]): Promise<CacheIT.IResult> {
    throw new Error("Method not implemented.");
  }

  upsert(item: CacheIT.ICollectionItem): Promise<CacheIT.IResult> {
    throw new Error("Method not implemented.");
  }

  upsertBulk(items: CacheIT.ICollectionItem[]): Promise<CacheIT.IResult> {
    throw new Error("Method not implemented.");
  }
}

export default SessionStorageCollection;
