[CacheIT](../globals.md) › [InMemoryCollection](inmemorycollection.md)

# Class: InMemoryCollection

## Hierarchy

* **InMemoryCollection**

## Implements

* [ICollection](../interfaces/icollection.md)

## Index

### Constructors

* [constructor](inmemorycollection.md#constructor)

### Properties

* [name](inmemorycollection.md#name)

### Methods

* [add](inmemorycollection.md#add)
* [addBulk](inmemorycollection.md#addbulk)
* [clear](inmemorycollection.md#clear)
* [delete](inmemorycollection.md#delete)
* [deleteBulk](inmemorycollection.md#deletebulk)
* [get](inmemorycollection.md#get)
* [getAll](inmemorycollection.md#getall)
* [keys](inmemorycollection.md#keys)
* [put](inmemorycollection.md#put)
* [putBulk](inmemorycollection.md#putbulk)
* [upsert](inmemorycollection.md#upsert)
* [upsertBulk](inmemorycollection.md#upsertbulk)

## Constructors

###  constructor

\+ **new InMemoryCollection**(`collectionName`: string): *[InMemoryCollection](inmemorycollection.md)*

*Defined in [collections/InMemoryCollection.ts:9](https://github.com/pavanser/cacheit/blob/da2929e/src/collections/InMemoryCollection.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`collectionName` | string |

**Returns:** *[InMemoryCollection](inmemorycollection.md)*

## Properties

###  name

• **name**: *string*

*Implementation of [ICollection](../interfaces/icollection.md).[name](../interfaces/icollection.md#name)*

*Defined in [collections/InMemoryCollection.ts:4](https://github.com/pavanser/cacheit/blob/da2929e/src/collections/InMemoryCollection.ts#L4)*

## Methods

###  add

▸ **add**(`item`: [ICollectionItem](../interfaces/icollectionitem.md)): *Promise‹[IResult](../interfaces/iresult.md)›*

*Implementation of [ICollection](../interfaces/icollection.md)*

*Defined in [collections/InMemoryCollection.ts:17](https://github.com/pavanser/cacheit/blob/da2929e/src/collections/InMemoryCollection.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | [ICollectionItem](../interfaces/icollectionitem.md) |

**Returns:** *Promise‹[IResult](../interfaces/iresult.md)›*

___

###  addBulk

▸ **addBulk**(`items`: [ICollectionItem](../interfaces/icollectionitem.md)[]): *Promise‹[IResult](../interfaces/iresult.md)›*

*Implementation of [ICollection](../interfaces/icollection.md)*

*Defined in [collections/InMemoryCollection.ts:21](https://github.com/pavanser/cacheit/blob/da2929e/src/collections/InMemoryCollection.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`items` | [ICollectionItem](../interfaces/icollectionitem.md)[] |

**Returns:** *Promise‹[IResult](../interfaces/iresult.md)›*

___

###  clear

▸ **clear**(`key`: string): *Promise‹[IResult](../interfaces/iresult.md)›*

*Implementation of [ICollection](../interfaces/icollection.md)*

*Defined in [collections/InMemoryCollection.ts:25](https://github.com/pavanser/cacheit/blob/da2929e/src/collections/InMemoryCollection.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *Promise‹[IResult](../interfaces/iresult.md)›*

___

###  delete

▸ **delete**(`key`: string): *Promise‹[IResult](../interfaces/iresult.md)›*

*Implementation of [ICollection](../interfaces/icollection.md)*

*Defined in [collections/InMemoryCollection.ts:37](https://github.com/pavanser/cacheit/blob/da2929e/src/collections/InMemoryCollection.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *Promise‹[IResult](../interfaces/iresult.md)›*

___

###  deleteBulk

▸ **deleteBulk**(...`keys`: string[]): *Promise‹[IResult](../interfaces/iresult.md)›*

*Implementation of [ICollection](../interfaces/icollection.md)*

*Defined in [collections/InMemoryCollection.ts:41](https://github.com/pavanser/cacheit/blob/da2929e/src/collections/InMemoryCollection.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`...keys` | string[] |

**Returns:** *Promise‹[IResult](../interfaces/iresult.md)›*

___

###  get

▸ **get**(`key`: string): *Promise‹[ICollectionItem](../interfaces/icollectionitem.md)›*

*Implementation of [ICollection](../interfaces/icollection.md)*

*Defined in [collections/InMemoryCollection.ts:29](https://github.com/pavanser/cacheit/blob/da2929e/src/collections/InMemoryCollection.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *Promise‹[ICollectionItem](../interfaces/icollectionitem.md)›*

___

###  getAll

▸ **getAll**(): *Promise‹[ICollectionItem](../interfaces/icollectionitem.md)[]›*

*Implementation of [ICollection](../interfaces/icollection.md)*

*Defined in [collections/InMemoryCollection.ts:33](https://github.com/pavanser/cacheit/blob/da2929e/src/collections/InMemoryCollection.ts#L33)*

**Returns:** *Promise‹[ICollectionItem](../interfaces/icollectionitem.md)[]›*

___

###  keys

▸ **keys**(): *Promise‹string[]›*

*Implementation of [ICollection](../interfaces/icollection.md)*

*Defined in [collections/InMemoryCollection.ts:45](https://github.com/pavanser/cacheit/blob/da2929e/src/collections/InMemoryCollection.ts#L45)*

**Returns:** *Promise‹string[]›*

___

###  put

▸ **put**(`item`: [ICollectionItem](../interfaces/icollectionitem.md)): *Promise‹[IResult](../interfaces/iresult.md)›*

*Implementation of [ICollection](../interfaces/icollection.md)*

*Defined in [collections/InMemoryCollection.ts:49](https://github.com/pavanser/cacheit/blob/da2929e/src/collections/InMemoryCollection.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | [ICollectionItem](../interfaces/icollectionitem.md) |

**Returns:** *Promise‹[IResult](../interfaces/iresult.md)›*

___

###  putBulk

▸ **putBulk**(`items`: [ICollectionItem](../interfaces/icollectionitem.md)[]): *Promise‹[IResult](../interfaces/iresult.md)›*

*Implementation of [ICollection](../interfaces/icollection.md)*

*Defined in [collections/InMemoryCollection.ts:53](https://github.com/pavanser/cacheit/blob/da2929e/src/collections/InMemoryCollection.ts#L53)*

**Parameters:**

Name | Type |
------ | ------ |
`items` | [ICollectionItem](../interfaces/icollectionitem.md)[] |

**Returns:** *Promise‹[IResult](../interfaces/iresult.md)›*

___

###  upsert

▸ **upsert**(`item`: [ICollectionItem](../interfaces/icollectionitem.md)): *Promise‹[IResult](../interfaces/iresult.md)›*

*Implementation of [ICollection](../interfaces/icollection.md)*

*Defined in [collections/InMemoryCollection.ts:57](https://github.com/pavanser/cacheit/blob/da2929e/src/collections/InMemoryCollection.ts#L57)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | [ICollectionItem](../interfaces/icollectionitem.md) |

**Returns:** *Promise‹[IResult](../interfaces/iresult.md)›*

___

###  upsertBulk

▸ **upsertBulk**(`items`: [ICollectionItem](../interfaces/icollectionitem.md)[]): *Promise‹[IResult](../interfaces/iresult.md)›*

*Implementation of [ICollection](../interfaces/icollection.md)*

*Defined in [collections/InMemoryCollection.ts:61](https://github.com/pavanser/cacheit/blob/da2929e/src/collections/InMemoryCollection.ts#L61)*

**Parameters:**

Name | Type |
------ | ------ |
`items` | [ICollectionItem](../interfaces/icollectionitem.md)[] |

**Returns:** *Promise‹[IResult](../interfaces/iresult.md)›*
