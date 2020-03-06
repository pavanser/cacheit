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

*Defined in [interfaces.ts:58](https://github.com/pavanser/cacheit/blob/5812e6a/src/interfaces.ts#L58)*

Name of current collection

## Methods

###  add

▸ **add**(`item`: [ICollectionItem](icollectionitem.md)): *Promise‹[IResult](iresult.md)›*

*Defined in [interfaces.ts:63](https://github.com/pavanser/cacheit/blob/5812e6a/src/interfaces.ts#L63)*

Add single collection item in current collection instance.
Item's id is required for proper adding and future usage.

**Parameters:**

Name | Type |
------ | ------ |
`item` | [ICollectionItem](icollectionitem.md) |

**Returns:** *Promise‹[IResult](iresult.md)›*

___

###  addBulk

▸ **addBulk**(`items`: [ICollectionItem](icollectionitem.md)[]): *Promise‹[IResult](iresult.md)›*

*Defined in [interfaces.ts:70](https://github.com/pavanser/cacheit/blob/5812e6a/src/interfaces.ts#L70)*

Bulk adding items in current collection instance.
Method expected array of [collection items here.
Item id is required in each array item for proper adding and future usage.

**Parameters:**

Name | Type |
------ | ------ |
`items` | [ICollectionItem](icollectionitem.md)[] |

**Returns:** *Promise‹[IResult](iresult.md)›*

___

###  clear

▸ **clear**(`key`: string): *Promise‹[IResult](iresult.md)›*

*Defined in [interfaces.ts:75](https://github.com/pavanser/cacheit/blob/5812e6a/src/interfaces.ts#L75)*

Delete all items from current collection instance

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *Promise‹[IResult](iresult.md)›*

___

###  delete

▸ **delete**(`key`: string): *Promise‹[IResult](iresult.md)›*

*Defined in [interfaces.ts:90](https://github.com/pavanser/cacheit/blob/5812e6a/src/interfaces.ts#L90)*

Delete items by {@params key} from current collection instance

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *Promise‹[IResult](iresult.md)›*

___

###  deleteBulk

▸ **deleteBulk**(...`keys`: string[]): *Promise‹[IResult](iresult.md)›*

*Defined in [interfaces.ts:95](https://github.com/pavanser/cacheit/blob/5812e6a/src/interfaces.ts#L95)*

Delete more than on item by {@params keys} from current collection instance

**Parameters:**

Name | Type |
------ | ------ |
`...keys` | string[] |

**Returns:** *Promise‹[IResult](iresult.md)›*

___

###  get

▸ **get**(`key`: string): *Promise‹[ICollectionItem](icollectionitem.md)›*

*Defined in [interfaces.ts:80](https://github.com/pavanser/cacheit/blob/5812e6a/src/interfaces.ts#L80)*

Getting single item by key

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *Promise‹[ICollectionItem](icollectionitem.md)›*

___

###  getAll

▸ **getAll**(): *Promise‹[ICollectionItem](icollectionitem.md)[]›*

*Defined in [interfaces.ts:85](https://github.com/pavanser/cacheit/blob/5812e6a/src/interfaces.ts#L85)*

Getting all items from current collection instance

**Returns:** *Promise‹[ICollectionItem](icollectionitem.md)[]›*

___

###  keys

▸ **keys**(): *Promise‹string[]›*

*Defined in [interfaces.ts:100](https://github.com/pavanser/cacheit/blob/5812e6a/src/interfaces.ts#L100)*

Get all current collection instance keys

**Returns:** *Promise‹string[]›*

___

###  put

▸ **put**(`item`: [ICollectionItem](icollectionitem.md)): *Promise‹[IResult](iresult.md)›*

*Defined in [interfaces.ts:107](https://github.com/pavanser/cacheit/blob/5812e6a/src/interfaces.ts#L107)*

Update single collection item in current collection instance.
Could be full item or it's part.
Item id is required for proper updating.

**Parameters:**

Name | Type |
------ | ------ |
`item` | [ICollectionItem](icollectionitem.md) |

**Returns:** *Promise‹[IResult](iresult.md)›*

___

###  putBulk

▸ **putBulk**(`items`: [ICollectionItem](icollectionitem.md)[]): *Promise‹[IResult](iresult.md)›*

*Defined in [interfaces.ts:115](https://github.com/pavanser/cacheit/blob/5812e6a/src/interfaces.ts#L115)*

Bulk updating items in current collection instance.
Method expected an array of collection items here.
Could be full item or it's part.
Item id is required for proper updating.

**Parameters:**

Name | Type |
------ | ------ |
`items` | [ICollectionItem](icollectionitem.md)[] |

**Returns:** *Promise‹[IResult](iresult.md)›*

___

###  upsert

▸ **upsert**(`item`: [ICollectionItem](icollectionitem.md)): *Promise‹[IResult](iresult.md)›*

*Defined in [interfaces.ts:122](https://github.com/pavanser/cacheit/blob/5812e6a/src/interfaces.ts#L122)*

Update or add collection item in current collection instance.
Could be full item or it's part.
Item id is required for proper updating or adding.

**Parameters:**

Name | Type |
------ | ------ |
`item` | [ICollectionItem](icollectionitem.md) |

**Returns:** *Promise‹[IResult](iresult.md)›*

___

###  upsertBulk

▸ **upsertBulk**(`items`: [ICollectionItem](icollectionitem.md)[]): *Promise‹[IResult](iresult.md)›*

*Defined in [interfaces.ts:130](https://github.com/pavanser/cacheit/blob/5812e6a/src/interfaces.ts#L130)*

Bulk updating or adding items in current collection instance.
Method expected an array of collection items here.
Could be full item or it's part.
Item id is required for proper updating.

**Parameters:**

Name | Type |
------ | ------ |
`items` | [ICollectionItem](icollectionitem.md)[] |

**Returns:** *Promise‹[IResult](iresult.md)›*
