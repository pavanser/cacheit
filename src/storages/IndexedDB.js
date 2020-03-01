import { IndexedDBCollection } from "collections";
class IndexedDB {
    constructor() {
        this.collections = {};
    }
    get storage() {
        return Object.assign({}, this.collections);
    }
    addCollection(collectionName) {
        this.storage[collectionName] = new IndexedDBCollection(collectionName);
    }
    deleteCollection() { }
}
export default IndexedDB;
