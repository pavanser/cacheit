import { IChainGroup, ICollectionItem, IConditionObject } from "interfaces";
import { Sorting } from "enums";
import { Paginator } from "core/Paginator";
import { ToolKit } from "core/ToolKit";

class Chain {
  protected data: ICollectionItem[];
  private toolKit: ToolKit;

  constructor(data: ICollectionItem[]) {
    this.data = data;
    this.toolKit = new ToolKit();
  }

  /**
   * Find all collection items where condition is truth
   * */
  filter(condition: (item: ICollectionItem) => boolean | IConditionObject | [string, any]): Chain {
    throw new Error("Method is not implemented");
  }

  /**
   * Sort collection by key.
   * */
  sort(key: string[] | string, dir: Sorting[] | Sorting): Chain {
    throw new Error("Method is not implemented");
  }

  /**
   * Returns grouped items by required key.
   * */
  group(key: string): IChainGroup {
    ToolKit.groupBy(this.data, key);
    throw new Error("Method is not implemented");
  }

  /**
   * Get single collection item by id
   * */
  findById(id: string): ICollectionItem {
    throw new Error("Method is not implemented");
  }

  /**
   * Find first where condition is truth
   * */
  findOne(condition: (item: ICollectionItem) => boolean | IConditionObject | [string, any]): ICollectionItem {
    throw new Error("Method is not implemented");
  }

  /**
   * Paginate your collection by required number of items for each page;
   * */
  paginate(itemsPerPage: number): Paginator {
    throw new Error("Method is not implemented");
  }
}

export default Chain;
