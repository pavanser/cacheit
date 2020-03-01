import { SessionStorageCollection } from "collections";
class SessionStorage {
    constructor() {
        this.collections = {};
    }
    get storage() {
        return Object.assign({}, this.collections);
    }
    addCollection(collectionName) {
        this.collections[collectionName] = new SessionStorageCollection(collectionName);
    }
    deleteCollection() { }
}
export default SessionStorage;
