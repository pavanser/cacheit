import AbstractCache from './AbstractCache';
import IStorage = CacheIT.IStorage;

class CacheIt extends AbstractCache {
  storage: IStorage = AbstractCache.defineStorageType();
}

export default CacheIt;