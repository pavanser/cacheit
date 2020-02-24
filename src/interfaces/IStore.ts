import { IStoreItem, IResult } from 'interfaces/index';

/**
 * Description of methods, what each store instance will return.
 */
interface IStore {
  /**
   * Store instance for using its own methods if required, and using it inside store object.
   * */
  store: Storage | IDBFactory;

  /**
   * Add single IStoreItem in current store instance.
   * Item id is required for proper adding and future usage.
   * */
  add(item: IStoreItem): Promise<IResult>

  /**
   * Bulk adding items in current store instance.
   * Method expected IStoreItem[] here.
   * Item id is required in each array item for proper adding and future usage.
   * */
  addBulk(items: IStoreItem[]): Promise<IResult>;

  /**
   * Delete all items from current store instance
   * */
  clear(key: string): Promise<IResult>;

  /**
   * Getting single item by key
   * */
  get(key: string): Promise<IStoreItem>;

  /**
   * Getting all items from current store instance
   * */
  getAll(): Promise<IStoreItem[]>;

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
   * Update single IStoreItem in current store instance.
   * Could be full item or it's part.
   * Item id is required for proper updating.
   * */
  put(item: IStoreItem): Promise<IResult>;

  /**
   * Bulk updating items in current store instance.
   * Method expected an IStoreItem[]here.
   * Could be full item or it's part.
   * Item id is required for proper updating.
   * */
  putBulk(items: IStoreItem[]): Promise<IResult>;

  /**
   * Update or add IStoreItem in current store instance.
   * Could be full item or it's part.
   * Item id is required for proper updating or adding.
   * */
  upsert(item: IStoreItem): Promise<IResult>;

  /**
   * Bulk updating or adding items in current store instance.
   * Method expected an IStoreItem[] here.
   * Could be full item or it's part.
   * Item id is required for proper updating.
   * */
  upsertBulk(items: IStoreItem[]): Promise<IResult>;
}

export default IStore;
