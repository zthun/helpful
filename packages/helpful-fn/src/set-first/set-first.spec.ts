import type { Mock } from "vitest";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { setFirst } from "./set-first.mjs";

describe("SetFirstOrDefault", () => {
  let setValue: Mock;

  beforeEach(() => {
    setValue = vi.fn();
  });

  it("should set the first value from an array.", () => {
    // Arrange
    const expected = 1;
    // Act
    setFirst(setValue, 0, [expected, 2, 3, 4]);
    // Assert
    expect(setValue).toHaveBeenCalledWith(expected);
  });

  it("should set the fallback value for an empty array.", () => {
    // Arrange
    const expected = 0;
    // Act
    setFirst(setValue, 0, []);
    // Assert
    expect(setValue).toHaveBeenCalledWith(expected);
  });

  it("should set the fallback value for a null array.", () => {
    // Arrange
    const expected = 0;
    // Act
    setFirst(setValue, 0, null);
    // Assert
    expect(setValue).toHaveBeenCalledWith(expected);
  });

  it("should set the fallback value for an undefined array.", () => {
    // Arrange
    const expected = 0;
    // Act
    setFirst(setValue, 0, undefined);
    // Assert
    expect(setValue).toHaveBeenCalledWith(expected);
  });
});
