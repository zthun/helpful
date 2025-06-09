import type { Mocked } from "vitest";
import { beforeEach, describe, expect, it } from "vitest";
import { mock } from "vitest-mock-extended";
import { ZDeserializeTry } from "./deserialize-try.mjs";
import type { IZDeserialize } from "./deserialize.mjs";

describe("ZDeserializeTry", () => {
  let alpha: Mocked<IZDeserialize<any>>;
  let beta: Mocked<IZDeserialize<any>>;
  let charlie: Mocked<IZDeserialize<any>>;
  let delta: Mocked<IZDeserialize<any>>;

  const createTestTarget = () =>
    new ZDeserializeTry([alpha, beta, charlie, delta]);

  beforeEach(() => {
    alpha = mock();
    alpha.deserialize.mockImplementation(() => {
      throw new Error("Cannot deserialize from alpha");
    });
    beta = mock();
    beta.deserialize.mockImplementation(() => {
      throw new Error("Cannot deserialize from beta");
    });
    charlie = mock();
    charlie.deserialize.mockImplementation(() => {
      throw new Error("Cannot deserialize from charlie");
    });
    delta = mock();
    delta.deserialize.mockImplementation(() => {
      throw new Error("Cannot deserialize from delta");
    });
  });

  it("should return the first value deserialized properly", () => {
    // Arrange.
    const expected = "From Charlie";
    charlie.deserialize.mockReturnValue(expected);
    delta.deserialize.mockReturnValue("From Delta");
    const target = createTestTarget();
    // Act.
    const actual = target.deserialize("whatever");
    // Assert.
    expect(actual).toEqual(expected);
  });

  it("should throw an error if no deserializer can deserialize the value", () => {
    // Arrange.
    const target = createTestTarget();
    // Act.
    const actual = () => target.deserialize("whatever");
    // Assert.
    expect(actual).toThrowError();
  });
});
