import type { ZSupplierAsync } from "../function/supplier.mjs";

export class ZLazy<T> {
  private _value: Promise<T>;

  public constructor(private _factory: ZSupplierAsync<T>) {}

  public initialized() {
    return this._value != null;
  }

  public async get() {
    if (this._value == null) {
      this._value = this._factory();
    }

    return this._value;
  }
}
