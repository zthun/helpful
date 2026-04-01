import { describe, expect, it } from "vitest";

import { createError } from "./create-error.mjs";

describe("Create Error", () => {
  it("should return an the same Error if the object is an instance of an Error", () => {
    const expected = new Error("An error happened");
    expect(createError(expected)).toBe(expected);
  });

  it("should return a generic error if problem is null", () => {
    expect(createError(null)).toBeInstanceOf(Error);
  });

  it("should return a generic error if problem is undefined", () => {
    expect(createError(undefined)).toBeInstanceOf(Error);
  });

  it("should recursively retrieve the error message", () => {
    const expected = "This should be the actual error";
    const input = { data: { error: { exception: { message: expected } } } };
    expect(createError(input).message).toBe(expected);
  });

  it("should recursively retrieve an error object", () => {
    const expected = new Error("This should be the actual error returned");
    const input = { exception: { error: expected } };
    expect(createError(input)).toBe(expected);
  });

  it("should retrieve the error message from the given schema keys and use that as the message", () => {
    const expected = "This should be the error";
    const input = { message: expected };
    expect(createError(input).message).toEqual(expected);
  });

  it("should return the error message as a string of the problem if it matches no acceptable schema", () => {
    const expected = "This should just be the error";
    expect(createError(expected, []).message).toEqual(expected);
  });
});
