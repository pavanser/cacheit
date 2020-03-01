import { InMemoryCollection } from "collections";

class InMemoryStorage implements CacheIT.IStorage {
  private collections: CacheIT.IStorageItems = {};

  get storage(): CacheIT.IStorageItems {
    return Object.assign({}, this.collections);
  }

  addCollection(storeName: string): void {
    this.collections[storeName] = new InMemoryCollection(storeName);
  }
  deleteCollection(): void {
      throw new Error("Method not implemented.");
  }

}

export default InMemoryStorage;
