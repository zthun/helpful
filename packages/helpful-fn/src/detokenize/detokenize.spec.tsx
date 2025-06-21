import { describe, expect, it } from "vitest";
import { detokenize } from "./detokenize.mjs";

describe("Detokenize", () => {
  it("should replace tokens surrounded by ${}.", () => {
    // Arrange.
    const HOME = "/Users/admin";

    const expected = `The user's home directory is ${HOME}.`;
    const tokenized = "The user's home directory is ${HOME}.";

    // Act.
    const actual = detokenize(tokenized, { HOME });

    // Assert.
    expect(actual).toEqual(expected);
  });

  it("should replace all instance of a token", () => {
    // Arrange.
    const NAME = "Betelgeuse";
    const tokenized = "${NAME}, ${NAME}, ${NAME}!";
    const expected = `${NAME}, ${NAME}, ${NAME}!`;

    // Act.
    const actual = detokenize(tokenized, { NAME });

    // Assert.
    expect(actual).toEqual(expected);
  });

  it("should replace all tokens that it can find", () => {
    // Arrange.
    const tokens = { ANIMAL: "cow", ACTION: "jumped", OBJECT: "moon" };
    const tokenized = "The ${ANIMAL} ${ACTION} over the ${OBJECT}";
    const expected = "The cow jumped over the moon";

    // Act.
    const actual = detokenize(tokenized, tokens);

    // Assert.
    expect(actual).toEqual(expected);
  });

  it("should return the same string if it does not have any tokens", () => {
    // Arrange.
    const detokenized = "This string does not have any tokens";

    // Act.
    const actual = detokenize(detokenized, process.env);

    // Assert.
    expect(actual).toEqual(detokenized);
  });

  it("should return the string with the tokens intact if no values are found for a token", () => {
    // Arrange.
    const expected = "This string has a token, ${TOKEN}";

    // Act.
    const actual = detokenize(expected, {});

    // Assert.
    expect(actual).toEqual(expected);
  });

  it("should remove a token if the tokens value is explicitly null", () => {
    // Arrange.
    const tokenized = "This string has a token, ${TOKEN}.";
    const expected = "This string has a token, .";

    // Act.
    const actual = detokenize(tokenized, { TOKEN: null });

    // Assert.
    expect(actual).toEqual(expected);
  });

  it("should remove a token if the tokens value is explicitly undefined", () => {
    // Arrange.
    const tokenized = "This string has a token, ${TOKEN}.";
    const expected = "This string has a token, .";

    // Act.
    const actual = detokenize(tokenized, { TOKEN: undefined });

    // Assert.
    expect(actual).toEqual(expected);
  });

  it("should return the empty string for null tokenized string value", () => {
    // Arrange.

    // Act.
    const actual = detokenize(null, {});

    // Assert.
    expect(actual).toEqual("");
  });

  it("should return the empty string for undefined tokenized string value", () => {
    // Arrange.

    // Act.
    const actual = detokenize(undefined, {});

    // Assert.
    expect(actual).toEqual("");
  });
});
