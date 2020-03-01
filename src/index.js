import AbstractCache from './AbstractCache';
class CacheIt extends AbstractCache {
    constructor() {
        super(...arguments);
        this.storage = AbstractCache.defineStorageType();
    }
}
export default CacheIt;
