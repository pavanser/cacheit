import { Actions, Sorting, Statuses } from "enums";
import Chain from "core/Chain";

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
 * Response for all collection methods
 * */
export interface IResult {
  status: Statuses;
  action: Actions;
  items: ICollectionItem[];
  error?: Error;
}

/*
 * Collection interfaces
 * */

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
  add(item: ICollectionItem): IResult | Promise<IResult>;

  /**
   * Bulk adding items in current collection instance.
   * Method expected array of [collection items here.
   * Item id is required in each array item for proper adding and future usage.
   * */
  addBulk(items: ICollectionItem[]): IResult | Promise<IResult>;

  /**
   * Delete all items from current collection instance
   * */
  clear(key: string): IResult | Promise<IResult>;

  /**
   * Getting single item by key
   * */
  get(key: string): ICollectionItem | Promise<ICollectionItem>;

  /**
   * Getting all items from current collection instance
   * */
  getAll(): Chain | Promise<Chain>;

  /**
   * Delete items by {@params key} from current collection instance
   * */
  delete(key: string): IResult | Promise<IResult>;

  /**
   * Delete more than on item by {@params keys} from current collection instance
   * */
  deleteBulk(...keys: string[]): IResult | Promise<IResult>;

  /**
   * Get all current collection instance keys
   * */
  keys(): string[] | Promise<string[]>;

  /**
   * Update single collection item in current collection instance.
   * Could be full item or it's part.
   * Item id is required for proper updating.
   * */
  put(item: ICollectionItem): IResult | Promise<IResult>;

  /**
   * Bulk updating items in current collection instance.
   * Method expected an array of collection items here.
   * Could be full item or it's part.
   * Item id is required for proper updating.
   * */
  putBulk(items: ICollectionItem[]): IResult | Promise<IResult>;

  /**
   * Update or add collection item in current collection instance.
   * Could be full item or it's part.
   * Item id is required for proper updating or adding.
   * */
  upsert(item: ICollectionItem): IResult | Promise<IResult>;

  /**
   * Bulk updating or adding items in current collection instance.
   * Method expected an array of collection items here.
   * Could be full item or it's part.
   * Item id is required for proper updating.
   * */
  upsertBulk(items: ICollectionItem[]): IResult | Promise<IResult>;
}

/*
 * Error interfaces
 * */

export interface ICollectionError extends Error {
  message: string;
}

export interface IStorageError extends Error {
  message: string;
}

/*
 * Core interfaces
 * */

export interface IConditionObject {
  [property: string]: any;
}

export interface IChainGroup {
  [groupKey: string]: IChainDataItem[];
}

export interface IChainDataItem {
  [property: string]: any;
}