import { IStorageError } from "interfaces";

class StorageError extends Error implements IStorageError {
  constructor(message: string) {
    super(message);

    this.message = `StorageError: ${message}`;
  }
}

export default StorageError;
