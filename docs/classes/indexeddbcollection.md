[CacheIT](../globals.md) › [IndexedDBCollection](indexeddbcollection.md)

# Class: IndexedDBCollection

## Hierarchy

* **IndexedDBCollection**

## Implements

* [ICollection](../interfaces/icollection.md)

## Index

### Constructors

* [constructor](indexeddbcollection.md#constructor)

### Properties

* [name](indexeddbcollection.md#name)

### Methods

* [add](indexeddbcollection.md#add)
* [addBulk](indexeddbcollection.md#addbulk)
* [clear](indexeddbcollection.md#clear)
* [delete](indexeddbcollection.md#delete)
* [deleteBulk](indexeddbcollection.md#deletebulk)
* [get](indexeddbcollection.md#get)
* [getAll](indexeddbcollection.md#getall)
* [keys](indexeddbcollection.md#keys)
* [put](indexeddbcollection.md#put)
* [putBulk](indexeddbcollection.md#putbulk)
* [upsert](indexeddbcollection.md#upsert)
* [upsertBulk](indexeddbcollection.md#upsertbulk)

## Constructors

###  constructor

\+ **new IndexedDBCollection**(`collectionName`: string): *[IndexedDBCollection](indexeddbcollection.md)*

*Defined in [collections/IndexedDBCollection.ts:5](https://github.com/pavanser/cacheit/blob/da2929e/src/collections/IndexedDBCollection.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`collectionName` | string |

**Returns:** *[IndexedDBCollection](indexeddbcollection.md)*

## Properties

###  name

• **name**: *string*

*Implementation of [ICollection](../interfaces/icollection.md).[name](../interfaces/icollection.md#name)*

*Defined in [collections/IndexedDBCollection.ts:5](https://github.com/pavanser/cacheit/blob/da2929e/src/collections/IndexedDBCollection.ts#L5)*

## Methods

###  add

▸ **add**(`item`: [ICollectionItem](../interfaces/icollectionitem.md)): *Promise‹[IResult](../interfaces/iresult.md)›*

*Implementation of [ICollection](../interfaces/icollection.md)*

*Defined in [collections/IndexedDBCollection.ts:11](https://github.com/pavanser/cacheit/blob/da2929e/src/collections/IndexedDBCollection.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | [ICollectionItem](../interfaces/icollectionitem.md) |

**Returns:** *Promise‹[IResult](../interfaces/iresult.md)›*

___

###  addBulk

▸ **addBulk**(`items`: [ICollectionItem](../interfaces/icollectionitem.md)[]): *Promise‹[IResult](../interfaces/iresult.md)›*

*Implementation of [ICollection](../interfaces/icollection.md)*

*Defined in [collections/IndexedDBCollection.ts:19](https://github.com/pavanser/cacheit/blob/da2929e/src/collections/IndexedDBCollection.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`items` | [ICollectionItem](../interfaces/icollectionitem.md)[] |

**Returns:** *Promise‹[IResult](../interfaces/iresult.md)›*

___

###  clear

▸ **clear**(`key`: string): *Promise‹[IResult](../interfaces/iresult.md)›*

*Implementation of [ICollection](../interfaces/icollection.md)*

*Defined in [collections/IndexedDBCollection.ts:27](https://github.com/pavanser/cacheit/blob/da2929e/src/collections/IndexedDBCollection.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *Promise‹[IResult](../interfaces/iresult.md)›*

___

###  delete

▸ **delete**(`key`: string): *Promise‹[IResult](../interfaces/iresult.md)›*

*Implementation of [ICollection](../interfaces/icollection.md)*

*Defined in [collections/IndexedDBCollection.ts:35](https://github.com/pavanser/cacheit/blob/da2929e/src/collections/IndexedDBCollection.ts#L35)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *Promise‹[IResult](../interfaces/iresult.md)›*

___

###  deleteBulk

▸ **deleteBulk**(...`keys`: string[]): *Promise‹[IResult](../interfaces/iresult.md)›*

*Implementation of [ICollection](../interfaces/icollection.md)*

*Defined in [collections/IndexedDBCollection.ts:43](https://github.com/pavanser/cacheit/blob/da2929e/src/collections/IndexedDBCollection.ts#L43)*

**Parameters:**

Name | Type |
------ | ------ |
`...keys` | string[] |

**Returns:** *Promise‹[IResult](../interfaces/iresult.md)›*

___

###  get

▸ **get**(`key`: string): *Promise‹[ICollectionItem](../interfaces/icollectionitem.md)›*

*Implementation of [ICollection](../interfaces/icollection.md)*

*Defined in [collections/IndexedDBCollection.ts:51](https://github.com/pavanser/cacheit/blob/da2929e/src/collections/IndexedDBCollection.ts#L51)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *Promise‹[ICollectionItem](../interfaces/icollectionitem.md)›*

___

###  getAll

▸ **getAll**(): *Promise‹[ICollectionItem](../interfaces/icollectionitem.md)[]›*

*Implementation of [ICollection](../interfaces/icollection.md)*

*Defined in [collections/IndexedDBCollection.ts:55](https://github.com/pavanser/cacheit/blob/da2929e/src/collections/IndexedDBCollection.ts#L55)*

**Returns:** *Promise‹[ICollectionItem](../interfaces/icollectionitem.md)[]›*

___

###  keys

▸ **keys**(): *Promise‹string[]›*

*Implementation of [ICollection](../interfaces/icollection.md)*

*Defined in [collections/IndexedDBCollection.ts:59](https://github.com/pavanser/cacheit/blob/da2929e/src/collections/IndexedDBCollection.ts#L59)*

**Returns:** *Promise‹string[]›*

___

###  put

▸ **put**(`item`: [ICollectionItem](../interfaces/icollectionitem.md)): *Promise‹[IResult](../interfaces/iresult.md)›*

*Implementation of [ICollection](../interfaces/icollection.md)*

*Defined in [collections/IndexedDBCollection.ts:63](https://github.com/pavanser/cacheit/blob/da2929e/src/collections/IndexedDBCollection.ts#L63)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | [ICollectionItem](../interfaces/icollectionitem.md) |

**Returns:** *Promise‹[IResult](../interfaces/iresult.md)›*

___

###  putBulk

▸ **putBulk**(`items`: [ICollectionItem](../interfaces/icollectionitem.md)[]): *Promise‹[IResult](../interfaces/iresult.md)›*

*Implementation of [ICollection](../interfaces/icollection.md)*

*Defined in [collections/IndexedDBCollection.ts:71](https://github.com/pavanser/cacheit/blob/da2929e/src/collections/IndexedDBCollection.ts#L71)*

**Parameters:**

Name | Type |
------ | ------ |
`items` | [ICollectionItem](../interfaces/icollectionitem.md)[] |

**Returns:** *Promise‹[IResult](../interfaces/iresult.md)›*

___

###  upsert

▸ **upsert**(`item`: [ICollectionItem](../interfaces/icollectionitem.md)): *Promise‹[IResult](../interfaces/iresult.md)›*

*Implementation of [ICollection](../interfaces/icollection.md)*

*Defined in [collections/IndexedDBCollection.ts:79](https://github.com/pavanser/cacheit/blob/da2929e/src/collections/IndexedDBCollection.ts#L79)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | [ICollectionItem](../interfaces/icollectionitem.md) |

**Returns:** *Promise‹[IResult](../interfaces/iresult.md)›*

___

###  upsertBulk

▸ **upsertBulk**(`items`: [ICollectionItem](../interfaces/icollectionitem.md)[]): *Promise‹[IResult](../interfaces/iresult.md)›*

*Implementation of [ICollection](../interfaces/icollection.md)*

*Defined in [collections/IndexedDBCollection.ts:87](https://github.com/pavanser/cacheit/blob/da2929e/src/collections/IndexedDBCollection.ts#L87)*

**Parameters:**

Name | Type |
------ | ------ |
`items` | [ICollectionItem](../interfaces/icollectionitem.md)[] |

**Returns:** *Promise‹[IResult](../interfaces/iresult.md)›*
