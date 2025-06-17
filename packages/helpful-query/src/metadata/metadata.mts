import { createGuid } from "@zthun/helpful-fn";

/**
 * Represents the underlying metadata type.
 */
export enum ZMetadataType {
  /**
   * A date.
   *
   * Should be a string or Date value.
   */
  Date = "date",
  /**
   * A number.
   *
   * Should be a string or number value.
   */
  Number = "number",
  /**
   * A raw string.
   *
   * This is the default type.  Should be a string value.
   */
  Text = "text",
  /**
   * A flag.
   */
  Boolean = "boolean",
  /**
   * An icon value.
   *
   * The underlying metadata cls should be set that
   * defines which class style the icon comes from.
   */
  Icon = "icon",
  /**
   * An image value.
   *
   * The value should be a URL to an image file.  If the image
   * is binary, then it should be a data URL.
   */
  Image = "image",
  /**
   * Custom value that is defined by the person who is using this
   * metadata.
   */
  Custom = "custom",
}

/**
 * Represents metadata about a object field.
 *
 * This of this as data about the data.
 */
export interface IZMetadata {
  /**
   * The id.
   *
   * This can be a guid or a human readable
   * value.  The most important feature is that
   * this must be unique across a collection of
   * metadata.
   */
  id: string;

  /**
   * The field path into the entity that targets
   * the value.
   */
  path?: string;

  /**
   * Human readable name of the field data.
   */
  name: string;

  /**
   * The metadata type.
   *
   * The default value should be a string.
   */
  type: ZMetadataType;

  /**
   * The expected format.
   *
   * The usage of this depends on the type.
   * For example, for date fields, this can be something
   * such as 'L LT' and for numbers this can be something
   * such as 'currency' or 'percentage'.
   */
  format?: string;

  /**
   * Whether or not this metadata can be sorted.
   */
  sortable?: boolean;

  /**
   * Whether or not this metadata can be edited.
   */
  editable?: boolean;

  /**
   * The class type of the metadata.
   *
   * This is useful for icons where you need to specify
   * which set the icon value comes from.
   *
   * For example, if the value is refresh, then this
   * value can be font-awesome to specify usage of
   * the refresh icon from the font-awesome set.
   *
   * The actual class usage is determined by the one
   * using the metadata.
   */
  cls?: string;

  /**
   * Decimal precision.
   *
   * Useful for numbers.
   */
  precision?: number;

  /**
   * The width represented as a string.
   *
   * Useful for things like icons and images.
   *
   * This allows for pseudo sizes such as xs,
   * sm, lg, etc, as well as css values such as
   * 24px, 2rem, etc.
   *
   * The usage of this depends on the developer using it.
   */
  width?: string;

  /**
   * The height represented as a string.
   *
   * Useful for things like icons and images.
   *
   * This allows for pseudo sizes such as xs,
   * sm, lg, etc, as well as css values such as
   * 24px, 2rem, etc.
   *
   * The usage of this depends on the developer using it.
   */
  height?: string;
}

/**
 * Represents a builder for metadata.
 */
export class ZMetadataBuilder {
  private _metadata: IZMetadata;

  /**
   * Initializes a new instance of this object.
   */
  public constructor() {
    const id = createGuid();

    this._metadata = {
      id,
      name: id,
      type: ZMetadataType.Text,
    };
  }

  /**
   * Sets the id of the metadata.
   *
   * @param val -
   *        The value to set.  If this
   *        is undefined, then a new
   *        guid will be set as the value.
   *
   * @returns
   *        This object.
   */
  public id(val = createGuid()): this {
    this._metadata.id = val;
    return this;
  }

  /**
   * Sets the path of the metadata.
   *
   * @param val -
   *        The value to set.
   *
   * @returns
   *        This object.
   */
  public path(val: string): this {
    this._metadata.path = val;
    return this;
  }

  /**
   * Sets the name of the metadata.
   *
   * @param val -
   *        The value to set.
   *
   * @returns
   *        This object.
   */
  public name(val: string): this {
    this._metadata.name = val;
    return this;
  }

  /**
   * Sets the format of the metadata.
   *
   * @param val -
   *        The value to set.
   *
   * @returns
   *        This object.
   */
  public format(val?: string): this {
    this._metadata.format = val;
    return this;
  }

  /**
   * Sets the class type of the metadata.
   *
   * @param val -
   *        The value to set.
   *
   * @returns
   *        This object.
   */
  public cls(val?: string): this {
    this._metadata.cls = val;
    return this;
  }

  /**
   * Sets the precision of the metadata.
   *
   * @param val -
   *        The value to set.
   *
   * @returns
   *        This object.
   */
  public precision(val?: number): this {
    this._metadata.precision = val;
    return this;
  }

  /**
   * Sets the width of the metadata.
   *
   * @param val -
   *        The value to set.
   *
   * @returns
   *        This object.
   */
  public width(val?: string): this {
    this._metadata.width = val;
    return this;
  }

  /**
   * Sets the height of the metadata.
   *
   * @param val -
   *        The value to set.
   *
   * @returns
   *        This object.
   */
  public height(val?: string): this {
    this._metadata.height = val;
    return this;
  }

  /**
   * Sets both width and height.
   *
   * @param val -
   *        The value to set.
   *
   * @returns
   *        This object.
   */
  public square(val?: string): this {
    return this.width(val).height(val);
  }

  /**
   * Sets the type of the metadata.
   *
   * @param val -
   *        The value to set.
   *
   * @returns
   *        This object.
   */
  public type(val: ZMetadataType): this {
    this._metadata.type = val;
    return this;
  }

  /**
   * Sets the type as text.
   *
   * @returns
   *        This object.
   */
  public text = this.type.bind(this, ZMetadataType.Text);

  /**
   * Sets the type as custom.
   *
   * @returns
   *        This object.
   */
  public custom = this.type.bind(this, ZMetadataType.Custom);

  /**
   * Sets the type as date.
   *
   * @returns
   *        This object.
   */
  public date = this.type.bind(this, ZMetadataType.Date);

  /**
   * Sets the type as a number.
   *
   * @returns
   *        This object.
   */
  public number = this.type.bind(this, ZMetadataType.Number);

  /**
   * Sets the type as an icon.
   *
   * @returns
   *        This object.
   */
  public icon = this.type.bind(this, ZMetadataType.Icon);

  /**
   * Sets the type as an image.
   *
   * @returns
   *        This object.
   */
  public image = this.type.bind(this, ZMetadataType.Image);

  /**
   * Sets the type as a boolean.
   *
   * @returns
   *        This object.
   */
  public boolean = this.type.bind(this, ZMetadataType.Boolean);

  /**
   * Sets the metadata as sortable.
   *
   * @param value -
   *        The value to set.
   *
   * @returns
   *        This object.
   */
  public sortable(value = true) {
    this._metadata.sortable = value;
    return this;
  }

  /**
   * Sets the metadata as editable.
   *
   * @param value -
   *        The value to set.
   *
   * @returns
   *        This object.
   */
  public editable(value = true) {
    this._metadata.editable = value;
    return this;
  }

  /**
   * Copies another metadata object into this object.
   *
   * @param other -
   *        The metadata to copy.
   *
   * @returns
   *         This object.
   */
  public copy(other: IZMetadata): this {
    this._metadata = structuredClone(other);
    return this;
  }

  /**
   * Returns the constructed metadata.
   *
   * @returns
   *        The built metadata.
   */
  public build(): IZMetadata {
    return structuredClone(this._metadata);
  }
}
