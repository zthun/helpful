/**
 * Represents a company brand.
 */
export interface IZBrand {
  /**
   * The id of the brand.
   *
   * These are normally found as a name of
   * {@link https://fontawesome.com/search?o=r&m=free&f=brands | Font Awesome's brand library}
   */
  id: string;

  /**
   * Whether the brand is still active or obsolete.
   */
  active: boolean;

  /**
   * The display friendly name of the brand.
   */
  name: string;

  /**
   * The date in time the brand was founded.
   */
  founded?: string;

  /**
   * The parent company that owns the brand.
   *
   * @example
   *
   * ```ts
   * // The parent company of facebook is Meta.
   * const facebook = { id: 'facebook', name: 'Facebook', founded: 2004, owner: 'Meta Platforms'}
   * ```
   */
  owner?: string;
}

/**
 * Represents a builder that outputs a brand object.
 */
export class ZBrandBuilder {
  private _brand: IZBrand;

  /**
   * Initializes a new instance of this object.
   *
   * The default brand will have the empty string as the id,
   * the empty string as the name, and founded with be NaN.
   */
  public constructor() {
    this._brand = {
      id: "",
      name: "",
      active: true,
    };
  }

  /**
   * Sets the id of the brand.
   *
   * @param val -
   *        The value to set.
   *
   * @returns
   *        A reference to this object.
   */
  public id(val: string): this {
    this._brand.id = val;
    return this;
  }

  /**
   * Sets the name of the brand.
   *
   * @param val -
   *        The value to set.
   *
   * @returns
   *        A reference to this object.
   */
  public name(val: string): this {
    this._brand.name = val;
    return this;
  }

  /**
   * Sets the calendar date the brand was founded (aka created).
   *
   * @param val -
   *        The value to set.
   *
   * @returns
   *        A reference to this object.
   */
  public founded(val: string): this {
    this._brand.founded = val;
    return this;
  }

  /**
   * Sets whether the brand is active.
   *
   * @param val -
   *        The value to set.
   *
   * @returns
   *        A reference to this object.
   */
  private _active(val: boolean): this {
    this._brand.active = val;
    return this;
  }

  /**
   * Sets the brand as active.
   *
   * @returns
   *        A reference to this object.
   */
  public active = this._active.bind(this, true);

  /**
   * Sets the brand as inactive.
   *
   * @returns
   *        A reference to this object.
   */
  public inactive = this._active.bind(this, false);

  /**
   * Sets the parent or umbrella company of the brand.
   *
   * @param val -
   *        The value to set.
   *
   * @returns
   *        A reference to this object.
   */
  public owner(val: string): this {
    this._brand.owner = val;
    return this;
  }

  /**
   * Returns the brand that is built by this builder.
   *
   * @returns
   *        A deep copy of the built brand object.
   */
  public build(): IZBrand {
    return structuredClone(this._brand);
  }
}
