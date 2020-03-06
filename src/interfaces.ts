import { Actions, Statuses } from "enums";

export interface AbstractCache {
  storage: IStorage;
}

export interface IStorageItems {
  /**
   * This is an object where key is a collectionName and value is a collection instance
   * */
  [collectionName: string]: ICollection;
}

export interface IStorage {
  /**
   * Getter which will return current storage collections as a snapshot.
   * */
  readonly storage: IStorageItems;
  /**
   * Adding new collection [[ICollection]] to current storage by {@params collectionName}
   * */
  addCollection(collectionName: string): void;

  /**
   * Method used for removing collection [[ICollection]] from storage by {@params collectionName}
   * */
  deleteCollection(collectionName: string): void;
}

/**
 * Success response for all collection methods
 * */
export interface IResult {
  status: Statuses;
  action: Actions;
  items: ICollectionItem[];
  error?: Error;
}

export interface ICollectionItem {
  /**
   * Each collection item should have id, for controlling uniq of item in collection and manipulating of it.
   * */
  id: string;
  /**
   * Defined defined properties of collection items.
   * */
  [property: string]: any;
}

/**
 * Description of methods, what each collection instance will return.
 */
export interface ICollection {
  /**
   * Name of current collection
   * */
  readonly name: string;
  /**
   * Add single collection item in current collection instance.
   * Item's id is required for proper adding and future usage.
   * */
  add(item: ICollectionItem): Promise<IResult>;

  /**
   * Bulk adding items in current collection instance.
   * Method expected array of [collection items here.
   * Item id is required in each array item for proper adding and future usage.
   * */
  addBulk(items: ICollectionItem[]): Promise<IResult>;

  /**
   * Delete all items from current collection instance
   * */
  clear(key: string): Promise<IResult>;

  /**
   * Getting single item by key
   * */
  get(key: string): Promise<ICollectionItem>;

  /**
   * Getting all items from current collection instance
   * */
  getAll(): Promise<ICollectionItem[]>;

  /**
   * Delete items by {@params key} from current collection instance
   * */
  delete(key: string): Promise<IResult>;

  /**
   * Delete more than on item by {@params keys} from current collection instance
   * */
  deleteBulk(...keys: string[]): Promise<IResult>;

  /**
   * Get all current collection instance keys
   * */
  keys(): Promise<string[]>;

  /**
   * Update single collection item in current collection instance.
   * Could be full item or it's part.
   * Item id is required for proper updating.
   * */
  put(item: ICollectionItem): Promise<IResult>;

  /**
   * Bulk updating items in current collection instance.
   * Method expected an array of collection items here.
   * Could be full item or it's part.
   * Item id is required for proper updating.
   * */
  putBulk(items: ICollectionItem[]): Promise<IResult>;

  /**
   * Update or add collection item in current collection instance.
   * Could be full item or it's part.
   * Item id is required for proper updating or adding.
   * */
  upsert(item: ICollectionItem): Promise<IResult>;

  /**
   * Bulk updating or adding items in current collection instance.
   * Method expected an array of collection items here.
   * Could be full item or it's part.
   * Item id is required for proper updating.
   * */
  upsertBulk(items: ICollectionItem[]): Promise<IResult>;
}
