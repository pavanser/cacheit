[CacheIT](../globals.md) › [IStorage](istorage.md)

# Interface: IStorage

## Hierarchy

* **IStorage**

## Implemented by

* [InMemory](../classes/inmemory.md)
* [IndexedDB](../classes/indexeddb.md)
* [LocalStorage](../classes/localstorage.md)
* [SessionStorage](../classes/sessionstorage.md)

## Index

### Properties

* [storage](istorage.md#storage)

### Methods

* [addCollection](istorage.md#addcollection)
* [deleteCollection](istorage.md#deletecollection)

## Properties

###  storage

• **storage**: *[IStorageItems](istorageitems.md)*

*Defined in [interfaces.ts:18](https://github.com/pavanser/cacheit/blob/da2929e/src/interfaces.ts#L18)*

Getter which will return current storage collections as a snapshot.

## Methods

###  addCollection

▸ **addCollection**(`collectionName`: string): *void*

*Defined in [interfaces.ts:22](https://github.com/pavanser/cacheit/blob/da2929e/src/interfaces.ts#L22)*

Adding new collection [ICollection](icollection.md) to current storage by {@params collectionName}

**Parameters:**

Name | Type |
------ | ------ |
`collectionName` | string |

**Returns:** *void*

___

###  deleteCollection

▸ **deleteCollection**(`collectionName`: string): *void*

*Defined in [interfaces.ts:27](https://github.com/pavanser/cacheit/blob/da2929e/src/interfaces.ts#L27)*

Method used for removing collection [ICollection](icollection.md) from storage by {@params collectionName}

**Parameters:**

Name | Type |
------ | ------ |
`collectionName` | string |

**Returns:** *void*
