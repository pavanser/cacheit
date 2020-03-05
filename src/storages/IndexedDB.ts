import IndexedDBCollection from "../collections/IndexedDBCollection";
import * as CacheIT from "interfaces";

class IndexedDB implements CacheIT.IStorage {
  private collections: CacheIT.IStorageItems = {};

  get storage(): CacheIT.IStorageItems {
    return Object.assign({}, this.collections);
  }

  addCollection(collectionName: string): void {
    this.storage[collectionName] = new IndexedDBCollection(collectionName);
  }

  deleteCollection(): void {}
}

export default IndexedDB;
