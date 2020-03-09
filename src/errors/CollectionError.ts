import { ICollectionError } from "interfaces";

class CollectionError extends Error implements ICollectionError  {
    constructor(message: string) {
      super(message);

      this.message = `CollectionError: ${message}`;
    }
}

export default CollectionError;
