[CacheIT](../globals.md) › [SessionStorage](sessionstorage.md)

# Class: SessionStorage

## Hierarchy

* **SessionStorage**

## Implements

* [IStorage](../interfaces/istorage.md)

## Index

### Accessors

* [storage](sessionstorage.md#storage)

### Methods

* [addCollection](sessionstorage.md#addcollection)
* [deleteCollection](sessionstorage.md#deletecollection)

## Accessors

###  storage

• **get storage**(): *[IStorageItems](../interfaces/istorageitems.md)*

*Defined in [storages/SessionStorage.ts:8](https://github.com/pavanser/cacheit/blob/da2929e/src/storages/SessionStorage.ts#L8)*

**Returns:** *[IStorageItems](../interfaces/istorageitems.md)*

## Methods

###  addCollection

▸ **addCollection**(`collectionName`: string): *void*

*Implementation of [IStorage](../interfaces/istorage.md)*

*Defined in [storages/SessionStorage.ts:12](https://github.com/pavanser/cacheit/blob/da2929e/src/storages/SessionStorage.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`collectionName` | string |

**Returns:** *void*

___

###  deleteCollection

▸ **deleteCollection**(): *void*

*Defined in [storages/SessionStorage.ts:16](https://github.com/pavanser/cacheit/blob/da2929e/src/storages/SessionStorage.ts#L16)*

**Returns:** *void*
