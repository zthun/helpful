/**
 * The root filter that contains metadata information about the filter.
 *
 * The main purpose of this is to ensure that filters get the
 * __type__ information to correctly identify how to handle them.
 */
export interface IZFilterMetadata {
  /**
   * Metadata type information about this filter.
   */
  __type__: string;
}

/**
 * Represents a filter that contains a given operator.
 *
 * @param TOperator -
 *        The type of the operator.
 */
export interface IZFilterOperator<TOperator> extends IZFilterMetadata {
  /**
   * The operator that relates the subject to something.
   */
  operator: TOperator;
}

/**
 * Represents a filter with an operator and contains a subject on a given target.
 */
export interface IZFilterSubject<
  TOperator,
> extends IZFilterOperator<TOperator> {
  /**
   * The filed to sort by.
   */
  subject: string;
}
