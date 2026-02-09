import { TZDate } from "@date-fns/tz";
import { formatDate } from "date-fns";
import { describe, expect, it } from "vitest";
import { ZDateFormats } from "./format-date.mjs";
import { guessDateTime } from "./guess-date.mjs";
import { userTimeZone } from "./timezone.mjs";

describe("Guess", () => {
  const shouldGuessDate = (format: string) => {
    // Arrange.
    const expected = formatDate(
      new TZDate().withTimeZone(userTimeZone()),
      format,
    );

    // Act.
    const guessed = guessDateTime(expected);
    const actual = formatDate(
      new TZDate(guessed!).withTimeZone(userTimeZone()),
      format,
    );

    // Assert.
    expect(actual).toEqual(expected);
  };

  it(`should guess Iso.`, () => shouldGuessDate(ZDateFormats.Iso));
  it("should guess IsoDateOnly", () =>
    shouldGuessDate(ZDateFormats.IsoDateOnly));
  it("should guess IsoTimeOnly", () =>
    shouldGuessDate(ZDateFormats.IsoTimeOnly));
  it("should guess IsoNoTimeZone", () =>
    shouldGuessDate(ZDateFormats.IsoNoTimeZone));
  it("should guess LocalDate", () => shouldGuessDate(ZDateFormats.LocalDate));
  it("should guess LocalTime", () => shouldGuessDate(ZDateFormats.LocalTime));
  it("should guess LocalDateTime", () =>
    shouldGuessDate(ZDateFormats.LocalDateTime));

  it("should only guess with the supported formats and return fallback if the format is not supported", () => {
    // Arrange.
    const fallback = new Date();
    const supportedFormats = [ZDateFormats.LocalDate];
    const target = formatDate(
      new TZDate().withTimeZone(userTimeZone()),
      ZDateFormats.Iso,
    );

    // Act.
    const actual = guessDateTime(target, { supportedFormats, fallback });

    // Assert.
    expect(actual).toBe(fallback);
  });

  it("should return the fallback if the value is null", () => {
    // Arrange.
    const fallback = new Date();

    // Act.
    const actual = guessDateTime(null, { fallback });

    // Assert.
    expect(actual).toEqual(fallback);
  });

  it("should return the fallback if the value is undefined", () => {
    // Arrange.
    const fallback = new Date();

    // Act.
    const actual = guessDateTime(undefined, { fallback });

    // Assert.
    expect(actual).toEqual(fallback);
  });

  it("should return the date if a date is supplied", () => {
    // Arrange.
    const expected = new Date();

    // Act.
    const actual = guessDateTime(expected);

    // Assert.
    expect(actual).toBe(expected);
  });

  it("should return the date if a number is supplied", () => {
    // Arrange.
    const expected = new Date().getTime();

    // Act.
    const actual = guessDateTime(expected);

    // Assert.
    expect(actual!.getTime()).toBe(expected);
  });
});
