import { InMemoryCollection } from "collections";
class InMemory {
    constructor() {
        this.collections = {};
    }
    get storage() {
        return Object.assign({}, this.collections);
    }
    addCollection(storeName) {
        this.collections[storeName] = new InMemoryCollection(storeName);
    }
    deleteCollection() {
        throw new Error("Method not implemented.");
    }
}
export default InMemoryStorage;
