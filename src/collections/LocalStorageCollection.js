class LocalStorageCollection {
    constructor(collectionName) {
        const collectionString = window.localStorage.getItem(collectionName);
        this.collection = collectionString ? JSON.parse(collectionString) : [];
        this.name = collectionName;
    }
    getStore() {
        throw new Error("Method not implemented.");
    }
    add(item) {
        return Promise.resolve({
            status: Enums.Statuses.success,
            action: Enums.Actions.add,
            items: [],
        });
    }
    addBulk(items) {
        return Promise.resolve({
            status: Enums.Statuses.success,
            action: Enums.Actions.add,
            items: [],
        });
    }
    clear(key) {
        return Promise.resolve({
            status: Enums.Statuses.success,
            action: Enums.Actions.clear,
            items: [],
        });
    }
    delete(key) {
        return Promise.resolve({
            status: Enums.Statuses.success,
            action: Enums.Actions.delete,
            items: [],
        });
    }
    deleteBulk(...keys) {
        return Promise.resolve({
            status: Enums.Statuses.success,
            action: Enums.Actions.delete,
            items: [],
        });
    }
    get(key) {
        return Promise.resolve({ id: "test-id" });
    }
    getAll() {
        return Promise.resolve([{ id: "test-id" }]);
    }
    keys() {
        return Promise.resolve([]);
    }
    put(item) {
        return Promise.resolve({
            status: Enums.Statuses.success,
            action: Enums.Actions.update,
            items: [],
        });
    }
    putBulk(items) {
        return Promise.resolve({
            status: Enums.Statuses.success,
            action: Enums.Actions.update,
            items: [],
        });
    }
    upsert(item) {
        return Promise.resolve({
            status: Enums.Statuses.success,
            action: Enums.Actions.upsert,
            items: [],
        });
    }
    upsertBulk(items) {
        return Promise.resolve({
            status: Enums.Statuses.success,
            action: Enums.Actions.upsert,
            items: [],
        });
    }
}
export default LocalStorageCollection;
