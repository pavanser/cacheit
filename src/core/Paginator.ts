import { ICollectionItem } from "interfaces";

export class Paginator {
  protected perPageItems: number = 20;

  constructor(perPageItems: number) {
    this.perPageItems = perPageItems;
  }

  getPage(): number {
    throw new Error("Method not implemented.");
  }

  getSize(): number {
    throw new Error("Method not implemented.");
  }

  getPerPage(): number {
    return this.perPageItems;
  }

  getPageItems(page: number): ICollectionItem[] {
    throw new Error("Method not implemented.");
  }

}
