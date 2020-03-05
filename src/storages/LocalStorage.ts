import LocalStorageCollection from "../collections/LocalStorageCollection";
import * as CacheIT from "interfaces";

class LocalStorage implements CacheIT.IStorage {
  private collections: CacheIT.IStorageItems = {};

  get storage(): CacheIT.IStorageItems {
    return Object.assign({}, this.collections);
  }

  addCollection(collectionName: string): void {
    this.collections[collectionName] = new LocalStorageCollection(collectionName);
  }

  deleteCollection(): void {}
}

export default LocalStorage;
