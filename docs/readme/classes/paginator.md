[CacheIT](../README.md) › [Paginator](paginator.md)

# Class: Paginator

## Hierarchy

* **Paginator**

## Index

### Constructors

* [constructor](paginator.md#constructor)

### Properties

* [perPageItems](paginator.md#protected-perpageitems)

### Methods

* [getPage](paginator.md#getpage)
* [getPageItems](paginator.md#getpageitems)
* [getPerPage](paginator.md#getperpage)
* [getSize](paginator.md#getsize)

## Constructors

###  constructor

\+ **new Paginator**(`perPageItems`: number): *[Paginator](paginator.md)*

*Defined in [src/core/Paginator.ts:4](https://github.com/pavanser/cacheit/blob/9ccfb81/src/core/Paginator.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`perPageItems` | number |

**Returns:** *[Paginator](paginator.md)*

## Properties

### `Protected` perPageItems

• **perPageItems**: *number* = 20

*Defined in [src/core/Paginator.ts:4](https://github.com/pavanser/cacheit/blob/9ccfb81/src/core/Paginator.ts#L4)*

## Methods

###  getPage

▸ **getPage**(): *number*

*Defined in [src/core/Paginator.ts:10](https://github.com/pavanser/cacheit/blob/9ccfb81/src/core/Paginator.ts#L10)*

**Returns:** *number*

___

###  getPageItems

▸ **getPageItems**(`page`: number): *[ICollectionItem](../interfaces/icollectionitem.md)[]*

*Defined in [src/core/Paginator.ts:24](https://github.com/pavanser/cacheit/blob/9ccfb81/src/core/Paginator.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`page` | number |

**Returns:** *[ICollectionItem](../interfaces/icollectionitem.md)[]*

___

###  getPerPage

▸ **getPerPage**(): *number*

*Defined in [src/core/Paginator.ts:20](https://github.com/pavanser/cacheit/blob/9ccfb81/src/core/Paginator.ts#L20)*

**Returns:** *number*

___

###  getSize

▸ **getSize**(): *number*

*Defined in [src/core/Paginator.ts:16](https://github.com/pavanser/cacheit/blob/9ccfb81/src/core/Paginator.ts#L16)*

**Returns:** *number*
