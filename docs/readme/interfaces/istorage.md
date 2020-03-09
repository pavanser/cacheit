[CacheIT](../README.md) › [IStorage](istorage.md)

# Interface: IStorage

## Hierarchy

* **IStorage**

## Index

### Properties

* [storage](istorage.md#storage)

### Methods

* [addCollection](istorage.md#addcollection)
* [deleteCollection](istorage.md#deletecollection)

## Properties

###  storage

• **storage**: *[IStorageItems](istorageitems.md)*

*Defined in [src/interfaces.ts:19](https://github.com/pavanser/cacheit/blob/9ccfb81/src/interfaces.ts#L19)*

Getter which will return current storage collections as a snapshot.

## Methods

###  addCollection

▸ **addCollection**(`collectionName`: string): *void*

*Defined in [src/interfaces.ts:23](https://github.com/pavanser/cacheit/blob/9ccfb81/src/interfaces.ts#L23)*

Adding new collection [ICollection](icollection.md) to current storage by {@params collectionName}

**Parameters:**

Name | Type |
------ | ------ |
`collectionName` | string |

**Returns:** *void*

___

###  deleteCollection

▸ **deleteCollection**(`collectionName`: string): *void*

*Defined in [src/interfaces.ts:28](https://github.com/pavanser/cacheit/blob/9ccfb81/src/interfaces.ts#L28)*

Method used for removing collection [ICollection](icollection.md) from storage by {@params collectionName}

**Parameters:**

Name | Type |
------ | ------ |
`collectionName` | string |

**Returns:** *void*
