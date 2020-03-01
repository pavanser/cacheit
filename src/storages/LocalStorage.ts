import { LocalStorageCollection } from "collections";

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
