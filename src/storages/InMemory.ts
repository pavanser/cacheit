import InMemoryCollection from "../collections/InMemoryCollection";
import * as CacheIT from "interfaces";


class InMemory implements CacheIT.IStorage {
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

export default InMemory;
