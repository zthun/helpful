import { describe, expect, it } from "vitest";

import { ZSerializeJson } from "./serialize-json.mjs";

describe("ZSerializeJson", () => {
  const createTestTarget = () => new ZSerializeJson();

  it("should return the object serialized as json", () => {
    // Arrange.
    const target = createTestTarget();
    const expected = { name: "foo", level: 20 };
    // Act.
    const serialized = target.serialize(expected);
    const actual = JSON.parse(serialized!);
    // Assert.
    expect(actual).toEqual(expected);
  });

  it("should return undefined for undefined", () => {
    // Arrange.
    const target = createTestTarget();
    // Act.
    const actual = target.serialize(undefined);
    // Assert.
    expect(actual).toBeUndefined();
  });

  it("should return a string null for null", () => {
    // Arrange.
    const target = createTestTarget();
    // Act.
    const serialized = target.serialize(null);
    const actual = JSON.parse(serialized!);
    // Assert.
    expect(actual).toBeNull();
  });
});
