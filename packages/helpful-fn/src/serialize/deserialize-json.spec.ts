import { describe, expect, it } from "vitest";

import { ZDeserializeJson } from "./deserialize-json.mjs";

describe("ZDeserializeJson", () => {
  function isString(k: any): k is string {
    return typeof k === "string";
  }

  const createTestTarget = (schema?: (k: any) => k is string) =>
    new ZDeserializeJson<string>(schema);

  it("should return the given object", () => {
    // Arrange.
    const target = createTestTarget();
    const expected = "Should be parsed from JSON";
    // Act.
    const actual = target.deserialize(JSON.stringify(expected));
    // Assert.
    expect(actual).toEqual(expected);
  });

  it("should return the given object, even if a type mismatch happens without a schema", () => {
    // Arrange.
    const target = createTestTarget();
    const expected = 4;
    // Act.
    const actual = target.deserialize(JSON.stringify(expected));
    // Assert.
    expect(actual).toEqual(expected);
  });

  it("should throw an Error if the JSON cannot be parsed", () => {
    // Arrange.
    const target = createTestTarget();
    // Act.
    // Assert.
    expect(() => target.deserialize("{ not valid json")).throws(Error);
  });

  it("should throw an Error if the JSON does not conform to the given schema", () => {
    // Arrange.
    const target = createTestTarget(isString);
    // Act.
    // Assert.
    expect(() => target.deserialize(JSON.stringify(4))).throws(Error);
  });
});
