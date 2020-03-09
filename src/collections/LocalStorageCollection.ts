import * as CacheIT from "interfaces";
import Chain from "core/Chain";

class LocalStorageCollection implements CacheIT.ICollection {
  readonly name: string;

  private collection: CacheIT.ICollectionItem[];

  constructor(collectionName: string) {
    const collectionString = window.localStorage.getItem(collectionName);

    this.collection = collectionString ? JSON.parse(collectionString) : [];
    this.name = collectionName;
  }

  add(item: CacheIT.ICollectionItem): CacheIT.IResult {
    throw new Error("Method not implemented.");
  }

  addBulk(items: CacheIT.ICollectionItem[]): CacheIT.IResult {
    throw new Error("Method not implemented.");
  }

  clear(key: string): CacheIT.IResult {
    throw new Error("Method not implemented.");
  }

  get(key: string): CacheIT.ICollectionItem {
    throw new Error("Method not implemented.");
  }

  getAll(): Chain {
    throw new Error("Method not implemented.");
  }

  delete(key: string): CacheIT.IResult {
    throw new Error("Method not implemented.");
  }

  deleteBulk(...keys: string[]): CacheIT.IResult {
    throw new Error("Method not implemented.");
  }

  keys(): string[] {
    throw new Error("Method not implemented.");
  }

  put(item: CacheIT.ICollectionItem): CacheIT.IResult {
    throw new Error("Method not implemented.");
  }

  putBulk(items: CacheIT.ICollectionItem[]): CacheIT.IResult {
    throw new Error("Method not implemented.");
  }

  upsert(item: CacheIT.ICollectionItem): CacheIT.IResult {
    throw new Error("Method not implemented.");
  }

  upsertBulk(items: CacheIT.ICollectionItem[]): CacheIT.IResult {
    throw new Error("Method not implemented.");
  }
}

export default LocalStorageCollection;
