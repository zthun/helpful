import { describe, expect, it } from "vitest";

import { castSupplier } from "./cast-supplier.mjs";

describe("Cast Supplier", () => {
  it("should return a function of the supplier if a raw value is given", () => {
    const e = 5;
    expect(castSupplier(e)()).toEqual(e);
  });

  it("should return the same function if a supplier is given", () => {
    const e = () => 5;
    expect(castSupplier(e)).toBe(e);
  });
});
