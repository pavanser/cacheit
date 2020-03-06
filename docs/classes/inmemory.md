[CacheIT](../globals.md) › [InMemory](inmemory.md)

# Class: InMemory

## Hierarchy

* **InMemory**

## Implements

* [IStorage](../interfaces/istorage.md)

## Index

### Accessors

* [storage](inmemory.md#storage)

### Methods

* [addCollection](inmemory.md#addcollection)
* [deleteCollection](inmemory.md#deletecollection)

## Accessors

###  storage

• **get storage**(): *[IStorageItems](../interfaces/istorageitems.md)*

*Defined in [storages/InMemory.ts:8](https://github.com/pavanser/cacheit/blob/da2929e/src/storages/InMemory.ts#L8)*

**Returns:** *[IStorageItems](../interfaces/istorageitems.md)*

## Methods

###  addCollection

▸ **addCollection**(`storeName`: string): *void*

*Implementation of [IStorage](../interfaces/istorage.md)*

*Defined in [storages/InMemory.ts:12](https://github.com/pavanser/cacheit/blob/da2929e/src/storages/InMemory.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`storeName` | string |

**Returns:** *void*

___

###  deleteCollection

▸ **deleteCollection**(): *void*

*Defined in [storages/InMemory.ts:15](https://github.com/pavanser/cacheit/blob/da2929e/src/storages/InMemory.ts#L15)*

**Returns:** *void*
