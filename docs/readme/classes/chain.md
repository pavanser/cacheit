[CacheIT](../README.md) › [Chain](chain.md)

# Class: Chain

## Hierarchy

* **Chain**

## Index

### Constructors

* [constructor](chain.md#constructor)

### Properties

* [data](chain.md#protected-data)

### Methods

* [filter](chain.md#filter)
* [findById](chain.md#findbyid)
* [findOne](chain.md#findone)
* [group](chain.md#group)
* [paginate](chain.md#paginate)
* [sort](chain.md#sort)

## Constructors

###  constructor

\+ **new Chain**(`data`: [ICollectionItem](../interfaces/icollectionitem.md)[]): *[Chain](chain.md)*

*Defined in [src/core/Chain.ts:8](https://github.com/pavanser/cacheit/blob/9ccfb81/src/core/Chain.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [ICollectionItem](../interfaces/icollectionitem.md)[] |

**Returns:** *[Chain](chain.md)*

## Properties

### `Protected` data

• **data**: *[ICollectionItem](../interfaces/icollectionitem.md)[]*

*Defined in [src/core/Chain.ts:7](https://github.com/pavanser/cacheit/blob/9ccfb81/src/core/Chain.ts#L7)*

## Methods

###  filter

▸ **filter**(`condition`: function): *[Chain](chain.md)*

*Defined in [src/core/Chain.ts:18](https://github.com/pavanser/cacheit/blob/9ccfb81/src/core/Chain.ts#L18)*

Find all collection items where condition is truth

**Parameters:**

▪ **condition**: *function*

▸ (`item`: [ICollectionItem](../interfaces/icollectionitem.md)): *boolean | [IConditionObject](../interfaces/iconditionobject.md) | [string, any]*

**Parameters:**

Name | Type |
------ | ------ |
`item` | [ICollectionItem](../interfaces/icollectionitem.md) |

**Returns:** *[Chain](chain.md)*

___

###  findById

▸ **findById**(`id`: string): *[ICollectionItem](../interfaces/icollectionitem.md)*

*Defined in [src/core/Chain.ts:40](https://github.com/pavanser/cacheit/blob/9ccfb81/src/core/Chain.ts#L40)*

Get single collection item by id

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *[ICollectionItem](../interfaces/icollectionitem.md)*

___

###  findOne

▸ **findOne**(`condition`: function): *[ICollectionItem](../interfaces/icollectionitem.md)*

*Defined in [src/core/Chain.ts:47](https://github.com/pavanser/cacheit/blob/9ccfb81/src/core/Chain.ts#L47)*

Find first where condition is truth

**Parameters:**

▪ **condition**: *function*

▸ (`item`: [ICollectionItem](../interfaces/icollectionitem.md)): *boolean | [IConditionObject](../interfaces/iconditionobject.md) | [string, any]*

**Parameters:**

Name | Type |
------ | ------ |
`item` | [ICollectionItem](../interfaces/icollectionitem.md) |

**Returns:** *[ICollectionItem](../interfaces/icollectionitem.md)*

___

###  group

▸ **group**(`key`: string): *[IChainGroup](../interfaces/ichaingroup.md)*

*Defined in [src/core/Chain.ts:32](https://github.com/pavanser/cacheit/blob/9ccfb81/src/core/Chain.ts#L32)*

Returns grouped items by required key.

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *[IChainGroup](../interfaces/ichaingroup.md)*

___

###  paginate

▸ **paginate**(`itemsPerPage`: number): *[Paginator](paginator.md)*

*Defined in [src/core/Chain.ts:54](https://github.com/pavanser/cacheit/blob/9ccfb81/src/core/Chain.ts#L54)*

Paginate your collection by required number of items for each page;

**Parameters:**

Name | Type |
------ | ------ |
`itemsPerPage` | number |

**Returns:** *[Paginator](paginator.md)*

___

###  sort

▸ **sort**(`key`: string[] | string, `dir`: [Sorting](../enums/sorting.md)[] | [Sorting](../enums/sorting.md)): *[Chain](chain.md)*

*Defined in [src/core/Chain.ts:25](https://github.com/pavanser/cacheit/blob/9ccfb81/src/core/Chain.ts#L25)*

Sort collection by key.

**Parameters:**

Name | Type |
------ | ------ |
`key` | string[] &#124; string |
`dir` | [Sorting](../enums/sorting.md)[] &#124; [Sorting](../enums/sorting.md) |

**Returns:** *[Chain](chain.md)*
