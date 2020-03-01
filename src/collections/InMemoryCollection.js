class InMemoryCollection {
    constructor(collectionName) {
        this.store = new Proxy({}, {});
        this.name = collectionName;
    }
    add(item) {
        throw new Error("Method not implemented.");
    }
    addBulk(items) {
        throw new Error("Method not implemented.");
    }
    clear(key) {
        throw new Error("Method not implemented.");
    }
    get(key) {
        throw new Error("Method not implemented.");
    }
    getAll() {
        throw new Error("Method not implemented.");
    }
    delete(key) {
        throw new Error("Method not implemented.");
    }
    deleteBulk(...keys) {
        throw new Error("Method not implemented.");
    }
    keys() {
        throw new Error("Method not implemented.");
    }
    put(item) {
        throw new Error("Method not implemented.");
    }
    putBulk(items) {
        throw new Error("Method not implemented.");
    }
    upsert(item) {
        throw new Error("Method not implemented.");
    }
    upsertBulk(items) {
        throw new Error("Method not implemented.");
    }
}
export default InMemoryCollection;
