import { IChainDataItem, IChainGroup } from "interfaces";
import { Sorting } from "enums";

export class ToolKit {
  static ascComparator(prev: IChainDataItem, next: IChainDataItem, key: string) {
    if (prev[key] > next[key]) {
      return - 1;
    }

    if (prev[key] < next[key]) {
      return 1;
    }

    return 0;
  }

  static descComparator(prev: IChainDataItem, next: IChainDataItem, key: string) {
    if (prev[key] < next[key]) {
      return - 1;
    }

    if (prev[key] > next[key]) {
      return 1;
    }

    return 0;
  }

  static groupBy(data: IChainDataItem[], key: string) {
    const groups = {} as IChainGroup;

    data.forEach((item) => {
      const itemPropertyValue = item[key];

      if (!groups[itemPropertyValue]) {
        groups[itemPropertyValue] = [];
      }

      groups[itemPropertyValue] = [ ...groups[itemPropertyValue], item ];
    });

    return groups;
  }

  static sortBy(data: IChainDataItem, key: string, dir: Sorting) {
    const comparator = dir === Sorting.Asc ? this.ascComparator : this.descComparator;

    return data.sort(comparator.bind(this)) as IChainDataItem[];
  }
}
