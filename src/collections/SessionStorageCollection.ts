class SessionStorageCollection implements CacheIT.ICollection {
  readonly name: string;

  private collection: CacheIT.ICollectionItem[];

  constructor(collectionName: string) {
    const collectionString = window.sessionStorage.getItem(collectionName);

    this.name = collectionName;
    this.collection = collectionString ? JSON.parse(collectionString) : [];
  }

  add(item: CacheIT.ICollectionItem): Promise<CacheIT.IResult> {
    return Promise.resolve({
      status: Enums.Statuses.success,
      action: Enums.Actions.add,
      items: [],
    });
  }

  addBulk(items: CacheIT.ICollectionItem[]): Promise<CacheIT.IResult> {
    return Promise.resolve({
      status: Enums.Statuses.success,
      action: Enums.Actions.add,
      items: [],
    });
  }

  clear(key: string): Promise<CacheIT.IResult> {
    return Promise.resolve({
      status: Enums.Statuses.success,
      action: Enums.Actions.clear,
      items: [],
    });
  }

  delete(key: string): Promise<CacheIT.IResult> {
    return Promise.resolve({
      status: Enums.Statuses.success,
      action: Enums.Actions.delete,
      items: [],
    });
  }

  deleteBulk(...keys: string[]): Promise<CacheIT.IResult> {
    return Promise.resolve({
      status: Enums.Statuses.success,
      action: Enums.Actions.delete,
      items: [],
    });
  }

  get(key: string): Promise<CacheIT.ICollectionItem> {
    return Promise.resolve({ id: "test-id" });
  }

  getAll(): Promise<CacheIT.ICollectionItem[]> {
    return Promise.resolve([{ id: "test-id" }]);
  }

  keys(): Promise<string[]> {
    return Promise.resolve([]);
  }

  put(item: CacheIT.ICollectionItem): Promise<CacheIT.IResult> {
    return Promise.resolve({
      status: Enums.Statuses.success,
      action: Enums.Actions.update,
      items: [],
    });
  }

  putBulk(items: CacheIT.ICollectionItem[]): Promise<CacheIT.IResult> {
    return Promise.resolve({
      status: Enums.Statuses.success,
      action: Enums.Actions.update,
      items: [],
    });
  }

  upsert(item: CacheIT.ICollectionItem): Promise<CacheIT.IResult> {
    return Promise.resolve({
      status: Enums.Statuses.success,
      action: Enums.Actions.upsert,
      items: [],
    });
  }

  upsertBulk(items: CacheIT.ICollectionItem[]): Promise<CacheIT.IResult> {
    return Promise.resolve({
      status: Enums.Statuses.success,
      action: Enums.Actions.upsert,
      items: [],
    });
  }
}

export default SessionStorageCollection;
