[CacheIT](../README.md) › [ICollection](icollection.md)

# Interface: ICollection

Description of methods, what each collection instance will return.

## Hierarchy

* **ICollection**

## Index

### Properties

* [name](icollection.md#name)

### Methods

* [add](icollection.md#add)
* [addBulk](icollection.md#addbulk)
* [clear](icollection.md#clear)
* [delete](icollection.md#delete)
* [deleteBulk](icollection.md#deletebulk)
* [get](icollection.md#get)
* [getAll](icollection.md#getall)
* [keys](icollection.md#keys)
* [put](icollection.md#put)
* [putBulk](icollection.md#putbulk)
* [upsert](icollection.md#upsert)
* [upsertBulk](icollection.md#upsertbulk)

## Properties

###  name

• **name**: *string*

*Defined in [src/interfaces.ts:63](https://github.com/pavanser/cacheit/blob/9ccfb81/src/interfaces.ts#L63)*

Name of current collection

## Methods

###  add

▸ **add**(`item`: [ICollectionItem](icollectionitem.md)): *[IResult](iresult.md) | Promise‹[IResult](iresult.md)›*

*Defined in [src/interfaces.ts:68](https://github.com/pavanser/cacheit/blob/9ccfb81/src/interfaces.ts#L68)*

Add single collection item in current collection instance.
Item's id is required for proper adding and future usage.

**Parameters:**

Name | Type |
------ | ------ |
`item` | [ICollectionItem](icollectionitem.md) |

**Returns:** *[IResult](iresult.md) | Promise‹[IResult](iresult.md)›*

___

###  addBulk

▸ **addBulk**(`items`: [ICollectionItem](icollectionitem.md)[]): *[IResult](iresult.md) | Promise‹[IResult](iresult.md)›*

*Defined in [src/interfaces.ts:75](https://github.com/pavanser/cacheit/blob/9ccfb81/src/interfaces.ts#L75)*

Bulk adding items in current collection instance.
Method expected array of [collection items here.
Item id is required in each array item for proper adding and future usage.

**Parameters:**

Name | Type |
------ | ------ |
`items` | [ICollectionItem](icollectionitem.md)[] |

**Returns:** *[IResult](iresult.md) | Promise‹[IResult](iresult.md)›*

___

###  clear

▸ **clear**(`key`: string): *[IResult](iresult.md) | Promise‹[IResult](iresult.md)›*

*Defined in [src/interfaces.ts:80](https://github.com/pavanser/cacheit/blob/9ccfb81/src/interfaces.ts#L80)*

Delete all items from current collection instance

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *[IResult](iresult.md) | Promise‹[IResult](iresult.md)›*

___

###  delete

▸ **delete**(`key`: string): *[IResult](iresult.md) | Promise‹[IResult](iresult.md)›*

*Defined in [src/interfaces.ts:95](https://github.com/pavanser/cacheit/blob/9ccfb81/src/interfaces.ts#L95)*

Delete items by {@params key} from current collection instance

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *[IResult](iresult.md) | Promise‹[IResult](iresult.md)›*

___

###  deleteBulk

▸ **deleteBulk**(...`keys`: string[]): *[IResult](iresult.md) | Promise‹[IResult](iresult.md)›*

*Defined in [src/interfaces.ts:100](https://github.com/pavanser/cacheit/blob/9ccfb81/src/interfaces.ts#L100)*

Delete more than on item by {@params keys} from current collection instance

**Parameters:**

Name | Type |
------ | ------ |
`...keys` | string[] |

**Returns:** *[IResult](iresult.md) | Promise‹[IResult](iresult.md)›*

___

###  get

▸ **get**(`key`: string): *[ICollectionItem](icollectionitem.md) | Promise‹[ICollectionItem](icollectionitem.md)›*

*Defined in [src/interfaces.ts:85](https://github.com/pavanser/cacheit/blob/9ccfb81/src/interfaces.ts#L85)*

Getting single item by key

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *[ICollectionItem](icollectionitem.md) | Promise‹[ICollectionItem](icollectionitem.md)›*

___

###  getAll

▸ **getAll**(): *[Chain](../classes/chain.md) | Promise‹[Chain](../classes/chain.md)›*

*Defined in [src/interfaces.ts:90](https://github.com/pavanser/cacheit/blob/9ccfb81/src/interfaces.ts#L90)*

Getting all items from current collection instance

**Returns:** *[Chain](../classes/chain.md) | Promise‹[Chain](../classes/chain.md)›*

___

###  keys

▸ **keys**(): *string[] | Promise‹string[]›*

*Defined in [src/interfaces.ts:105](https://github.com/pavanser/cacheit/blob/9ccfb81/src/interfaces.ts#L105)*

Get all current collection instance keys

**Returns:** *string[] | Promise‹string[]›*

___

###  put

▸ **put**(`item`: [ICollectionItem](icollectionitem.md)): *[IResult](iresult.md) | Promise‹[IResult](iresult.md)›*

*Defined in [src/interfaces.ts:112](https://github.com/pavanser/cacheit/blob/9ccfb81/src/interfaces.ts#L112)*

Update single collection item in current collection instance.
Could be full item or it's part.
Item id is required for proper updating.

**Parameters:**

Name | Type |
------ | ------ |
`item` | [ICollectionItem](icollectionitem.md) |

**Returns:** *[IResult](iresult.md) | Promise‹[IResult](iresult.md)›*

___

###  putBulk

▸ **putBulk**(`items`: [ICollectionItem](icollectionitem.md)[]): *[IResult](iresult.md) | Promise‹[IResult](iresult.md)›*

*Defined in [src/interfaces.ts:120](https://github.com/pavanser/cacheit/blob/9ccfb81/src/interfaces.ts#L120)*

Bulk updating items in current collection instance.
Method expected an array of collection items here.
Could be full item or it's part.
Item id is required for proper updating.

**Parameters:**

Name | Type |
------ | ------ |
`items` | [ICollectionItem](icollectionitem.md)[] |

**Returns:** *[IResult](iresult.md) | Promise‹[IResult](iresult.md)›*

___

###  upsert

▸ **upsert**(`item`: [ICollectionItem](icollectionitem.md)): *[IResult](iresult.md) | Promise‹[IResult](iresult.md)›*

*Defined in [src/interfaces.ts:127](https://github.com/pavanser/cacheit/blob/9ccfb81/src/interfaces.ts#L127)*

Update or add collection item in current collection instance.
Could be full item or it's part.
Item id is required for proper updating or adding.

**Parameters:**

Name | Type |
------ | ------ |
`item` | [ICollectionItem](icollectionitem.md) |

**Returns:** *[IResult](iresult.md) | Promise‹[IResult](iresult.md)›*

___

###  upsertBulk

▸ **upsertBulk**(`items`: [ICollectionItem](icollectionitem.md)[]): *[IResult](iresult.md) | Promise‹[IResult](iresult.md)›*

*Defined in [src/interfaces.ts:135](https://github.com/pavanser/cacheit/blob/9ccfb81/src/interfaces.ts#L135)*

Bulk updating or adding items in current collection instance.
Method expected an array of collection items here.
Could be full item or it's part.
Item id is required for proper updating.

**Parameters:**

Name | Type |
------ | ------ |
`items` | [ICollectionItem](icollectionitem.md)[] |

**Returns:** *[IResult](iresult.md) | Promise‹[IResult](iresult.md)›*
