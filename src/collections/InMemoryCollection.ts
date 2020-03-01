class InMemoryCollection implements CacheIT.ICollection {
    readonly name: string;

    /**
     * In memory store object.
     * */
    private store: ProxyHandler<ProxyConstructor>;

    constructor(collectionName: string) {
        this.store = new Proxy({}, {});
        this.name = collectionName;
    }


    add(item: CacheIT.ICollectionItem): Promise<CacheIT.IResult> {
        throw new Error("Method not implemented.");
    }

    addBulk(items: CacheIT.ICollectionItem[]): Promise<CacheIT.IResult> {
        throw new Error("Method not implemented.");
    }

    clear(key: string): Promise<CacheIT.IResult> {
        throw new Error("Method not implemented.");
    }

    get(key: string): Promise<CacheIT.ICollectionItem> {
        throw new Error("Method not implemented.");
    }

    getAll(): Promise<CacheIT.ICollectionItem[]> {
        throw new Error("Method not implemented.");
    }

    delete(key: string): Promise<CacheIT.IResult> {
        throw new Error("Method not implemented.");
    }

    deleteBulk(...keys: string[]): Promise<CacheIT.IResult> {
        throw new Error("Method not implemented.");
    }

    keys(): Promise<string[]> {
        throw new Error("Method not implemented.");
    }

    put(item: CacheIT.ICollectionItem): Promise<CacheIT.IResult> {
        throw new Error("Method not implemented.");
    }

    putBulk(items: CacheIT.ICollectionItem[]): Promise<CacheIT.IResult> {
        throw new Error("Method not implemented.");
    }

    upsert(item: CacheIT.ICollectionItem): Promise<CacheIT.IResult> {
        throw new Error("Method not implemented.");
    }

    upsertBulk(items: CacheIT.ICollectionItem[]): Promise<CacheIT.IResult> {
        throw new Error("Method not implemented.");
    }
}

export default InMemoryCollection;
