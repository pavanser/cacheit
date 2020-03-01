import { LocalStorageCollection } from "collections";
class LocalStorage {
    constructor() {
        this.collections = {};
    }
    get storage() {
        return Object.assign({}, this.collections);
    }
    addCollection(collectionName) {
        this.collections[collectionName] = new LocalStorageCollection(collectionName);
    }
    deleteCollection() { }
}
export default LocalStorage;
