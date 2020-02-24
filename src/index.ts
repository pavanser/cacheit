import { AbstractCache, AbstractIndexedDB, AbstractLocalStorage, AbstractSessionStorage } from 'classes';

class CacheIt extends AbstractCache {
  storage:
    AbstractLocalStorage |
    AbstractSessionStorage |
    AbstractIndexedDB
    = AbstractCache.defineStorageType();
}

export default CacheIt;