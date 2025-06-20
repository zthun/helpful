import { describe, expect, it } from "vitest";
import { css, html } from "./tag.mjs";

describe("Tag", () => {
  describe("CSS", () => {
    it("should highlight", () => {
      // Arrange.
      const block = "block";
      const expected = `
        .target {
          display: ${block};
        }
      `;

      // Act.
      const actual = css`
        .target {
          display: ${block};
        }
      `;

      // Assert.
      expect(actual).toEqual(expected);
    });
  });

  describe("HTML", () => {
    it("should be empty", () => {
      // Arrange.

      // Act.
      const actual = html``;

      // Assert.
      expect(actual).toEqual("");
    });

    it("should highlight", () => {
      // Arrange.
      const block = "block";
      const expected = `
        <style>
          .target {
            display: ${block};
          }
        </style>
      `;

      // Act.
      const actual = html`
        <style>
          .target {
            display: ${block};
          }
        </style>
      `;

      // Assert.
      expect(actual).toEqual(expected);
    });
  });
});
