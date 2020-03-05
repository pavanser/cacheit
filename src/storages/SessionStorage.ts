import SessionStorageCollection from "collections/SessionStorageCollection";
import * as CacheIT from "interfaces";


class SessionStorage implements CacheIT.IStorage {
  private collections: CacheIT.IStorageItems = {};

  get storage(): CacheIT.IStorageItems {
    return Object.assign({}, this.collections);
  }

  addCollection(collectionName: string): void {
    this.collections[collectionName] = new SessionStorageCollection(collectionName);
  }

  deleteCollection(): void {}
}

export default SessionStorage;
