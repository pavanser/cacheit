[CacheIT](../globals.md) › [SessionStorageCollection](sessionstoragecollection.md)

# Class: SessionStorageCollection

## Hierarchy

* **SessionStorageCollection**

## Implements

* [ICollection](../interfaces/icollection.md)

## Index

### Constructors

* [constructor](sessionstoragecollection.md#constructor)

### Properties

* [name](sessionstoragecollection.md#name)

### Methods

* [add](sessionstoragecollection.md#add)
* [addBulk](sessionstoragecollection.md#addbulk)
* [clear](sessionstoragecollection.md#clear)
* [delete](sessionstoragecollection.md#delete)
* [deleteBulk](sessionstoragecollection.md#deletebulk)
* [get](sessionstoragecollection.md#get)
* [getAll](sessionstoragecollection.md#getall)
* [keys](sessionstoragecollection.md#keys)
* [put](sessionstoragecollection.md#put)
* [putBulk](sessionstoragecollection.md#putbulk)
* [upsert](sessionstoragecollection.md#upsert)
* [upsertBulk](sessionstoragecollection.md#upsertbulk)

## Constructors

###  constructor

\+ **new SessionStorageCollection**(`collectionName`: string): *[SessionStorageCollection](sessionstoragecollection.md)*

*Defined in [collections/SessionStorageCollection.ts:6](https://github.com/pavanser/cacheit/blob/da2929e/src/collections/SessionStorageCollection.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`collectionName` | string |

**Returns:** *[SessionStorageCollection](sessionstoragecollection.md)*

## Properties

###  name

• **name**: *string*

*Implementation of [ICollection](../interfaces/icollection.md).[name](../interfaces/icollection.md#name)*

*Defined in [collections/SessionStorageCollection.ts:4](https://github.com/pavanser/cacheit/blob/da2929e/src/collections/SessionStorageCollection.ts#L4)*

## Methods

###  add

▸ **add**(`item`: [ICollectionItem](../interfaces/icollectionitem.md)): *Promise‹[IResult](../interfaces/iresult.md)›*

*Implementation of [ICollection](../interfaces/icollection.md)*

*Defined in [collections/SessionStorageCollection.ts:15](https://github.com/pavanser/cacheit/blob/da2929e/src/collections/SessionStorageCollection.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | [ICollectionItem](../interfaces/icollectionitem.md) |

**Returns:** *Promise‹[IResult](../interfaces/iresult.md)›*

___

###  addBulk

▸ **addBulk**(`items`: [ICollectionItem](../interfaces/icollectionitem.md)[]): *Promise‹[IResult](../interfaces/iresult.md)›*

*Implementation of [ICollection](../interfaces/icollection.md)*

*Defined in [collections/SessionStorageCollection.ts:19](https://github.com/pavanser/cacheit/blob/da2929e/src/collections/SessionStorageCollection.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`items` | [ICollectionItem](../interfaces/icollectionitem.md)[] |

**Returns:** *Promise‹[IResult](../interfaces/iresult.md)›*

___

###  clear

▸ **clear**(`key`: string): *Promise‹[IResult](../interfaces/iresult.md)›*

*Implementation of [ICollection](../interfaces/icollection.md)*

*Defined in [collections/SessionStorageCollection.ts:23](https://github.com/pavanser/cacheit/blob/da2929e/src/collections/SessionStorageCollection.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *Promise‹[IResult](../interfaces/iresult.md)›*

___

###  delete

▸ **delete**(`key`: string): *Promise‹[IResult](../interfaces/iresult.md)›*

*Implementation of [ICollection](../interfaces/icollection.md)*

*Defined in [collections/SessionStorageCollection.ts:35](https://github.com/pavanser/cacheit/blob/da2929e/src/collections/SessionStorageCollection.ts#L35)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *Promise‹[IResult](../interfaces/iresult.md)›*

___

###  deleteBulk

▸ **deleteBulk**(...`keys`: string[]): *Promise‹[IResult](../interfaces/iresult.md)›*

*Implementation of [ICollection](../interfaces/icollection.md)*

*Defined in [collections/SessionStorageCollection.ts:39](https://github.com/pavanser/cacheit/blob/da2929e/src/collections/SessionStorageCollection.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`...keys` | string[] |

**Returns:** *Promise‹[IResult](../interfaces/iresult.md)›*

___

###  get

▸ **get**(`key`: string): *Promise‹[ICollectionItem](../interfaces/icollectionitem.md)›*

*Implementation of [ICollection](../interfaces/icollection.md)*

*Defined in [collections/SessionStorageCollection.ts:27](https://github.com/pavanser/cacheit/blob/da2929e/src/collections/SessionStorageCollection.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *Promise‹[ICollectionItem](../interfaces/icollectionitem.md)›*

___

###  getAll

▸ **getAll**(): *Promise‹[ICollectionItem](../interfaces/icollectionitem.md)[]›*

*Implementation of [ICollection](../interfaces/icollection.md)*

*Defined in [collections/SessionStorageCollection.ts:31](https://github.com/pavanser/cacheit/blob/da2929e/src/collections/SessionStorageCollection.ts#L31)*

**Returns:** *Promise‹[ICollectionItem](../interfaces/icollectionitem.md)[]›*

___

###  keys

▸ **keys**(): *Promise‹string[]›*

*Implementation of [ICollection](../interfaces/icollection.md)*

*Defined in [collections/SessionStorageCollection.ts:43](https://github.com/pavanser/cacheit/blob/da2929e/src/collections/SessionStorageCollection.ts#L43)*

**Returns:** *Promise‹string[]›*

___

###  put

▸ **put**(`item`: [ICollectionItem](../interfaces/icollectionitem.md)): *Promise‹[IResult](../interfaces/iresult.md)›*

*Implementation of [ICollection](../interfaces/icollection.md)*

*Defined in [collections/SessionStorageCollection.ts:47](https://github.com/pavanser/cacheit/blob/da2929e/src/collections/SessionStorageCollection.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | [ICollectionItem](../interfaces/icollectionitem.md) |

**Returns:** *Promise‹[IResult](../interfaces/iresult.md)›*

___

###  putBulk

▸ **putBulk**(`items`: [ICollectionItem](../interfaces/icollectionitem.md)[]): *Promise‹[IResult](../interfaces/iresult.md)›*

*Implementation of [ICollection](../interfaces/icollection.md)*

*Defined in [collections/SessionStorageCollection.ts:51](https://github.com/pavanser/cacheit/blob/da2929e/src/collections/SessionStorageCollection.ts#L51)*

**Parameters:**

Name | Type |
------ | ------ |
`items` | [ICollectionItem](../interfaces/icollectionitem.md)[] |

**Returns:** *Promise‹[IResult](../interfaces/iresult.md)›*

___

###  upsert

▸ **upsert**(`item`: [ICollectionItem](../interfaces/icollectionitem.md)): *Promise‹[IResult](../interfaces/iresult.md)›*

*Implementation of [ICollection](../interfaces/icollection.md)*

*Defined in [collections/SessionStorageCollection.ts:55](https://github.com/pavanser/cacheit/blob/da2929e/src/collections/SessionStorageCollection.ts#L55)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | [ICollectionItem](../interfaces/icollectionitem.md) |

**Returns:** *Promise‹[IResult](../interfaces/iresult.md)›*

___

###  upsertBulk

▸ **upsertBulk**(`items`: [ICollectionItem](../interfaces/icollectionitem.md)[]): *Promise‹[IResult](../interfaces/iresult.md)›*

*Implementation of [ICollection](../interfaces/icollection.md)*

*Defined in [collections/SessionStorageCollection.ts:59](https://github.com/pavanser/cacheit/blob/da2929e/src/collections/SessionStorageCollection.ts#L59)*

**Parameters:**

Name | Type |
------ | ------ |
`items` | [ICollectionItem](../interfaces/icollectionitem.md)[] |

**Returns:** *Promise‹[IResult](../interfaces/iresult.md)›*
