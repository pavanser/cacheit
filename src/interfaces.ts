import { Actions, Statuses } from "enums";

export interface AbstractCache {
  storage: IStorage;
}

export interface IStorageItems {
  [key: string]: ICollection;
}

export interface IStorage {
  readonly storage: IStorageItems;
  /**
   * Method used for creating different storage types in depends from browser and its mode;
   * It will return one of AbstractLocalStorageStore | AbstractSessionStorageStore | AbstractIndexedDBStore instance;
   * */
  addCollection(storeName: string): void;

  /**
   * Method used for removing current store instance
   * */
  deleteCollection(): void;
}

export interface IResult {
  status: Statuses;
  action: Actions;
  items: ICollectionItem[];
}

export interface ICollectionItem {
  id: string;
  [key: string]: any;
}

/**
 * Description of methods, what each store instance will return.
 */
export interface ICollection {
  /**
   * Name of current collection
   * */
  readonly name: string;
  /**
   * Add single ICollectionItem in current store instance.
   * Item id is required for proper adding and future usage.
   * */
  add(item: ICollectionItem): Promise<IResult>;

  /**
   * Bulk adding items in current store instance.
   * Method expected ICollectionItem[] here.
   * Item id is required in each array item for proper adding and future usage.
   * */
  addBulk(items: ICollectionItem[]): Promise<IResult>;

  /**
   * Delete all items from current store instance
   * */
  clear(key: string): Promise<IResult>;

  /**
   * Getting single item by key
   * */
  get(key: string): Promise<ICollectionItem>;

  /**
   * Getting all items from current store instance
   * */
  getAll(): Promise<ICollectionItem[]>;

  /**
   * Delete items by {@params key} from current store instance
   * */
  delete(key: string): Promise<IResult>;

  /**
   * Delete more than on item by {@params keys} from current store instance
   * */
  deleteBulk(...keys: string[]): Promise<IResult>;

  /**
   * Get all current store instance keys
   * */
  keys(): Promise<string[]>;

  /**
   * Update single ICollectionItem in current store instance.
   * Could be full item or it's part.
   * Item id is required for proper updating.
   * */
  put(item: ICollectionItem): Promise<IResult>;

  /**
   * Bulk updating items in current store instance.
   * Method expected an ICollectionItem[]here.
   * Could be full item or it's part.
   * Item id is required for proper updating.
   * */
  putBulk(items: ICollectionItem[]): Promise<IResult>;

  /**
   * Update or add ICollectionItem in current store instance.
   * Could be full item or it's part.
   * Item id is required for proper updating or adding.
   * */
  upsert(item: ICollectionItem): Promise<IResult>;

  /**
   * Bulk updating or adding items in current store instance.
   * Method expected an ICollectionItem[] here.
   * Could be full item or it's part.
   * Item id is required for proper updating.
   * */
  upsertBulk(items: ICollectionItem[]): Promise<IResult>;
}
