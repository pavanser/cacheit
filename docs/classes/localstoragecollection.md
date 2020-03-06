[CacheIT](../globals.md) › [LocalStorageCollection](localstoragecollection.md)

# Class: LocalStorageCollection

## Hierarchy

* **LocalStorageCollection**

## Implements

* [ICollection](../interfaces/icollection.md)

## Index

### Constructors

* [constructor](localstoragecollection.md#constructor)

### Properties

* [name](localstoragecollection.md#name)

### Methods

* [add](localstoragecollection.md#add)
* [addBulk](localstoragecollection.md#addbulk)
* [clear](localstoragecollection.md#clear)
* [delete](localstoragecollection.md#delete)
* [deleteBulk](localstoragecollection.md#deletebulk)
* [get](localstoragecollection.md#get)
* [getAll](localstoragecollection.md#getall)
* [keys](localstoragecollection.md#keys)
* [put](localstoragecollection.md#put)
* [putBulk](localstoragecollection.md#putbulk)
* [upsert](localstoragecollection.md#upsert)
* [upsertBulk](localstoragecollection.md#upsertbulk)

## Constructors

###  constructor

\+ **new LocalStorageCollection**(`collectionName`: string): *[LocalStorageCollection](localstoragecollection.md)*

*Defined in [collections/LocalStorageCollection.ts:6](https://github.com/pavanser/cacheit/blob/da2929e/src/collections/LocalStorageCollection.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`collectionName` | string |

**Returns:** *[LocalStorageCollection](localstoragecollection.md)*

## Properties

###  name

• **name**: *string*

*Implementation of [ICollection](../interfaces/icollection.md).[name](../interfaces/icollection.md#name)*

*Defined in [collections/LocalStorageCollection.ts:4](https://github.com/pavanser/cacheit/blob/da2929e/src/collections/LocalStorageCollection.ts#L4)*

## Methods

###  add

▸ **add**(`item`: [ICollectionItem](../interfaces/icollectionitem.md)): *Promise‹[IResult](../interfaces/iresult.md)›*

*Implementation of [ICollection](../interfaces/icollection.md)*

*Defined in [collections/LocalStorageCollection.ts:15](https://github.com/pavanser/cacheit/blob/da2929e/src/collections/LocalStorageCollection.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | [ICollectionItem](../interfaces/icollectionitem.md) |

**Returns:** *Promise‹[IResult](../interfaces/iresult.md)›*

___

###  addBulk

▸ **addBulk**(`items`: [ICollectionItem](../interfaces/icollectionitem.md)[]): *Promise‹[IResult](../interfaces/iresult.md)›*

*Implementation of [ICollection](../interfaces/icollection.md)*

*Defined in [collections/LocalStorageCollection.ts:19](https://github.com/pavanser/cacheit/blob/da2929e/src/collections/LocalStorageCollection.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`items` | [ICollectionItem](../interfaces/icollectionitem.md)[] |

**Returns:** *Promise‹[IResult](../interfaces/iresult.md)›*

___

###  clear

▸ **clear**(`key`: string): *Promise‹[IResult](../interfaces/iresult.md)›*

*Implementation of [ICollection](../interfaces/icollection.md)*

*Defined in [collections/LocalStorageCollection.ts:23](https://github.com/pavanser/cacheit/blob/da2929e/src/collections/LocalStorageCollection.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *Promise‹[IResult](../interfaces/iresult.md)›*

___

###  delete

▸ **delete**(`key`: string): *Promise‹[IResult](../interfaces/iresult.md)›*

*Implementation of [ICollection](../interfaces/icollection.md)*

*Defined in [collections/LocalStorageCollection.ts:35](https://github.com/pavanser/cacheit/blob/da2929e/src/collections/LocalStorageCollection.ts#L35)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *Promise‹[IResult](../interfaces/iresult.md)›*

___

###  deleteBulk

▸ **deleteBulk**(...`keys`: string[]): *Promise‹[IResult](../interfaces/iresult.md)›*

*Implementation of [ICollection](../interfaces/icollection.md)*

*Defined in [collections/LocalStorageCollection.ts:39](https://github.com/pavanser/cacheit/blob/da2929e/src/collections/LocalStorageCollection.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`...keys` | string[] |

**Returns:** *Promise‹[IResult](../interfaces/iresult.md)›*

___

###  get

▸ **get**(`key`: string): *Promise‹[ICollectionItem](../interfaces/icollectionitem.md)›*

*Implementation of [ICollection](../interfaces/icollection.md)*

*Defined in [collections/LocalStorageCollection.ts:27](https://github.com/pavanser/cacheit/blob/da2929e/src/collections/LocalStorageCollection.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *Promise‹[ICollectionItem](../interfaces/icollectionitem.md)›*

___

###  getAll

▸ **getAll**(): *Promise‹[ICollectionItem](../interfaces/icollectionitem.md)[]›*

*Implementation of [ICollection](../interfaces/icollection.md)*

*Defined in [collections/LocalStorageCollection.ts:31](https://github.com/pavanser/cacheit/blob/da2929e/src/collections/LocalStorageCollection.ts#L31)*

**Returns:** *Promise‹[ICollectionItem](../interfaces/icollectionitem.md)[]›*

___

###  keys

▸ **keys**(): *Promise‹string[]›*

*Implementation of [ICollection](../interfaces/icollection.md)*

*Defined in [collections/LocalStorageCollection.ts:43](https://github.com/pavanser/cacheit/blob/da2929e/src/collections/LocalStorageCollection.ts#L43)*

**Returns:** *Promise‹string[]›*

___

###  put

▸ **put**(`item`: [ICollectionItem](../interfaces/icollectionitem.md)): *Promise‹[IResult](../interfaces/iresult.md)›*

*Implementation of [ICollection](../interfaces/icollection.md)*

*Defined in [collections/LocalStorageCollection.ts:47](https://github.com/pavanser/cacheit/blob/da2929e/src/collections/LocalStorageCollection.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | [ICollectionItem](../interfaces/icollectionitem.md) |

**Returns:** *Promise‹[IResult](../interfaces/iresult.md)›*

___

###  putBulk

▸ **putBulk**(`items`: [ICollectionItem](../interfaces/icollectionitem.md)[]): *Promise‹[IResult](../interfaces/iresult.md)›*

*Implementation of [ICollection](../interfaces/icollection.md)*

*Defined in [collections/LocalStorageCollection.ts:51](https://github.com/pavanser/cacheit/blob/da2929e/src/collections/LocalStorageCollection.ts#L51)*

**Parameters:**

Name | Type |
------ | ------ |
`items` | [ICollectionItem](../interfaces/icollectionitem.md)[] |

**Returns:** *Promise‹[IResult](../interfaces/iresult.md)›*

___

###  upsert

▸ **upsert**(`item`: [ICollectionItem](../interfaces/icollectionitem.md)): *Promise‹[IResult](../interfaces/iresult.md)›*

*Implementation of [ICollection](../interfaces/icollection.md)*

*Defined in [collections/LocalStorageCollection.ts:55](https://github.com/pavanser/cacheit/blob/da2929e/src/collections/LocalStorageCollection.ts#L55)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | [ICollectionItem](../interfaces/icollectionitem.md) |

**Returns:** *Promise‹[IResult](../interfaces/iresult.md)›*

___

###  upsertBulk

▸ **upsertBulk**(`items`: [ICollectionItem](../interfaces/icollectionitem.md)[]): *Promise‹[IResult](../interfaces/iresult.md)›*

*Implementation of [ICollection](../interfaces/icollection.md)*

*Defined in [collections/LocalStorageCollection.ts:59](https://github.com/pavanser/cacheit/blob/da2929e/src/collections/LocalStorageCollection.ts#L59)*

**Parameters:**

Name | Type |
------ | ------ |
`items` | [ICollectionItem](../interfaces/icollectionitem.md)[] |

**Returns:** *Promise‹[IResult](../interfaces/iresult.md)›*
