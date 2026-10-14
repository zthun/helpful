# Helpful Query

Helpful Query provides helper classes that solve the problem of trying to create
components with reusable functionality such as filtering, sorting, searching,
and pagination.

## The Source Pattern

At the heart of this package is what we call **the source pattern**. In most
designs, we often tell components WHAT the data is. We query a REST endpoint, we
receive a page of data, and we send that data to the component to display back
to the end user.

When done in this manner, specific features, such as filtering, sorting,
searching, and pagination, must be implemented over and over again, as the
actual implementation of that set of data depends on the REST service being
called. Many third-party libraries that attempt to support this out of the box
will support these features, but they are almost always restricted to the client
side, meaning that you must pull down the entire data set instead of just a
single page.

The source pattern solves this problem by telling components HOW to get the data
instead of WHAT the data is. This simple change in thinking allows us to
construct components that handle the pagination, sorting, filtering, and
searching operations for us, and the only responsibility of the caller is to
explain to the component where and how to retrieve the data.

## Data Request and Source

The root of the source pattern lies with two specific contracts - the request
object and the source implementation. The request object will be provided by the
component being implemented, and the source implementation describes how to
retrieve the specific page of data.

Here is an example of the implementation. The actual implementations provided by
this library are more robust, but these will illustrate the idea.

```ts
export interface IZDataRequest {
  page: number;
  size: number;
  search: string;
  sort: Array<{ subject: string; direction: 1 | 0 }>;
}

export interface IZDataSource<T> {
  count(): Promise<number>;
  retrieve(request: IZDataRequest): Promise<T[]>;
}
```

A component would take as input an object that implements the
IZDataSource&lt;T&gt; contract and would pass a request to it when it is ready
to display the data. It will need to manage its own loading state, implement
pagination, and provide features for the user to sort, filter, and search.
