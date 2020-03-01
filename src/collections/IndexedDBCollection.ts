class IndexedDBCollection implements CacheIT.ICollection {
  readonly name: string;

  constructor(collectionName: string) {
    this.name = collectionName;
  }

  add(item: CacheIT.ICollectionItem): Promise<CacheIT.IResult> {
    return Promise.resolve({
      status: Enums.Statuses.Success,
      action: Enums.Actions.Add,
      items: [],
    });
  }

  addBulk(items: CacheIT.ICollectionItem[]): Promise<CacheIT.IResult> {
    return Promise.resolve({
      status: Enums.Statuses.Success,
      action: Enums.Actions.Add,
      items: [],
    });
  }

  clear(key: string): Promise<CacheIT.IResult> {
    return Promise.resolve({
      status: Enums.Statuses.Success,
      action: Enums.Actions.Clear,
      items: [],
    });
  }

  delete(key: string): Promise<CacheIT.IResult> {
    return Promise.resolve({
      status: Enums.Statuses.Success,
      action: Enums.Actions.Delete,
      items: [],
    });
  }

  deleteBulk(...keys: string[]): Promise<CacheIT.IResult> {
    return Promise.resolve({
      status: Enums.Statuses.Success,
      action: Enums.Actions.Delete,
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
      status: Enums.Statuses.Success,
      action: Enums.Actions.Update,
      items: [],
    });
  }

  putBulk(items: CacheIT.ICollectionItem[]): Promise<CacheIT.IResult> {
    return Promise.resolve({
      status: Enums.Statuses.Success,
      action: Enums.Actions.Update,
      items: [],
    });
  }

  upsert(item: CacheIT.ICollectionItem): Promise<CacheIT.IResult> {
    return Promise.resolve({
      status: Enums.Statuses.Success,
      action: Enums.Actions.Upsert,
      items: [],
    });
  }

  upsertBulk(items: CacheIT.ICollectionItem[]): Promise<CacheIT.IResult> {
    return Promise.resolve({
      status: Enums.Statuses.Success,
      action: Enums.Actions.Upsert,
      items: [],
    });
  }
}

export default IndexedDBCollection;
