[CacheIT](../globals.md) › [IndexedDB](indexeddb.md)

# Class: IndexedDB

## Hierarchy

* **IndexedDB**

## Implements

* [IStorage](../interfaces/istorage.md)

## Index

### Accessors

* [storage](indexeddb.md#storage)

### Methods

* [addCollection](indexeddb.md#addcollection)
* [deleteCollection](indexeddb.md#deletecollection)

## Accessors

###  storage

• **get storage**(): *[IStorageItems](../interfaces/istorageitems.md)*

*Defined in [storages/IndexedDB.ts:7](https://github.com/pavanser/cacheit/blob/da2929e/src/storages/IndexedDB.ts#L7)*

**Returns:** *[IStorageItems](../interfaces/istorageitems.md)*

## Methods

###  addCollection

▸ **addCollection**(`collectionName`: string): *void*

*Implementation of [IStorage](../interfaces/istorage.md)*

*Defined in [storages/IndexedDB.ts:11](https://github.com/pavanser/cacheit/blob/da2929e/src/storages/IndexedDB.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`collectionName` | string |

**Returns:** *void*

___

###  deleteCollection

▸ **deleteCollection**(): *void*

*Defined in [storages/IndexedDB.ts:15](https://github.com/pavanser/cacheit/blob/da2929e/src/storages/IndexedDB.ts#L15)*

**Returns:** *void*
