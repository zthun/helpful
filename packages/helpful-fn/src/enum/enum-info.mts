/**
 * Information for an enum value.
 *
 * This is useful for front end development when
 * you want to map an enumeration like value to
 * things like a display name, description, and
 * avatar.  ECMAScript does not support decorators
 * for literal fields so this is an alternative
 * to describe that kind of information.
 *
 * This is similar to Metadata from helpful-query,
 * but it's much more specific and specialized
 * to enumerations.
 */
export interface IZEnumInformation<TEnum extends string | number> {
  /**
   * The display name of the enum value.
   */
  name?: string;

  /**
   * The avatar representation of the enum.
   *
   * This can be anything and is contextual of how
   * this object is used.
   */
  avatar?: any;

  /**
   * The description of the enum value.
   */
  description?: string;

  /**
   * The value being described.
   */
  value: TEnum;
}

/**
 * Builds information for an enum.
 */
export class ZEnumInfoBuilder<TEnum extends string | number> {
  private _metadata: IZEnumInformation<TEnum>;

  /**
   * Initializes a new instance of this object.
   *
   * @param value -
   *        The value to initialize with.
   */
  public constructor(value: TEnum) {
    this._metadata = { value };
  }

  /**
   * The display name of the enum.
   *
   * @param name -
   *        The display name of the enum.
   *
   * @returns
   *        This object.
   */
  public name(name: string) {
    this._metadata.name = name;
    return this;
  }

  /**
   * Text description of the enum.
   *
   * @param description -
   *        Text description of what the value means.
   *
   * @returns
   *        This object.
   */
  public description(description: string) {
    this._metadata.description = description;
    return this;
  }

  /**
   * The avatar representation of the enum.
   *
   * @param avatar -
   *        The avatar representation of what the value
   *        is.  This can be anything but should be related
   *        to the framework it is being developed for.
   *
   * @returns
   *        This object.
   */
  public avatar(avatar: any) {
    this._metadata.avatar = avatar;
    return this;
  }

  /**
   * Returns a shallow copy of the metadata.
   *
   * @returns
   *        A shallow copy of the metadata.
   */
  public build(): IZEnumInformation<TEnum> {
    return { ...this._metadata };
  }
}
