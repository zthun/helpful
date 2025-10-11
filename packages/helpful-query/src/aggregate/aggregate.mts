/**
 * Represents an aggregate calculation on a collection of data.
 */
export interface IZAggregate<T = any> {
  /**
   * The id of the aggregate.
   */
  id: string;

  /**
   * The resulting value of the aggregate.
   */
  value: T;
}

/**
 * A builder for the aggregate model.
 */
export class ZAggregateBuilder<T = any> {
  private _aggregate: IZAggregate<T> = {
    id: "zero",
    value: 0 as T,
  };

  /**
   * Sets the id of the aggregate.
   *
   * @param value -
   *        The id to set.
   *
   * @returns
   *        This object.
   */
  public id(value: string) {
    this._aggregate.id = value;
    return this;
  }

  /**
   * Sets the value of the aggregate.
   *
   * @param value -
   *        The value to set.
   *
   * @returns
   *        A new aggregate builder that is of type V.
   */
  public value<V>(value: V): ZAggregateBuilder<V> {
    const next = new ZAggregateBuilder<V>().id(this._aggregate.id);
    next._aggregate.value = value;
    return next;
  }

  /**
   * Creates a count aggregate.
   *
   * The id of the aggregate will be 'count'
   *
   * @param value -
   *        The count value.
   *
   * @returns
   *        A new aggregate builder that is of type number.
   */
  public count(value: number): ZAggregateBuilder<number> {
    return this.id("count").value(value);
  }

  /**
   * Builds the aggregate.
   *
   * @returns
   *        The constructed aggregate value.
   */
  public build(): IZAggregate<T> {
    // Given how to construct this builder, we know how
    return structuredClone(this._aggregate) as IZAggregate<T>;
  }
}
