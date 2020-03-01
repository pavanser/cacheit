import LocalStorage from "storages/LocalStorage";
import IndexedDB from "storages/IndexedDB";
import SessionStorage from "storages/SessionStorage";
class AbstractCache {
    static defineStorageType() {
        if (window.indexedDB) {
            return new IndexedDB();
        }
        if (window.sessionStorage) {
            return new SessionStorage();
        }
        return new LocalStorage();
    }
}
export default AbstractCache;
