import { describe, expect, it } from "vitest";
import type { IZFilterBinary } from "./filter-binary.mjs";
import {
  ZFilterBinaryBuilder,
  ZOperatorBinary,
  isBinaryFilter,
} from "./filter-binary.mjs";
import type { IZFilterCollection } from "./filter-collection.mjs";
import {
  ZOperatorCollection,
  isCollectionFilter,
} from "./filter-collection.mjs";
import { ZFilterDeserialize } from "./filter-deserialize.mjs";
import type { IZFilterLogic } from "./filter-logic.mjs";
import {
  ZFilterLogicBuilder,
  ZOperatorLogic,
  isLogicFilter,
} from "./filter-logic.mjs";
import type { IZFilterMetadata, IZFilterSubject } from "./filter-subject.mjs";
import {
  ZFilterUnaryBuilder,
  ZOperatorUnary,
  isUnaryFilter,
} from "./filter-unary.mjs";

describe("ZFilterDeserialize", () => {
  const createTestTarget = () => new ZFilterDeserialize();

  const assertParsesFilterType = <T extends IZFilterMetadata>(
    isGuard: (f: IZFilterMetadata | undefined) => f is T,
    filter: string,
  ) => {
    // Arrange.
    const target = createTestTarget();
    // Act.
    const f = target.deserialize(filter);
    const actual = isGuard(f);
    // Assert.
    expect(actual).toBeTruthy();
  };

  const assertParsesFilterOperator = (expected: string, filter: string) => {
    // Arrange.
    const target = createTestTarget();
    // Act.
    const f = target.deserialize(filter);
    const actual = f.operator;
    // Assert.
    expect(actual).toEqual(expected);
  };

  const assertParsesFilterSubject = (expected: string, filter: string) => {
    // Arrange.
    const target = createTestTarget();
    // Act.
    const f = target.deserialize(filter) as IZFilterSubject<any>;
    const actual = f.subject;
    // Assert.
    expect(actual).toEqual(expected);
  };

  const assertThrowsError = (filter: string) => {
    // Arrange.
    const target = createTestTarget();
    // Act.
    const actual = () => target.deserialize(filter);
    // Assert.
    expect(actual).toThrowError();
  };

  it("should throw an error if the operator cannot be discovered", () => {
    assertThrowsError("wut()");
  });

  describe("Binary", () => {
    it("should throw an Error if the argument list is not closed", () => {
      assertThrowsError("eq(subject, (value)");
    });

    it("should throw an Error if the argument list is not opened", () => {
      assertThrowsError('eq[subject, "value")');
    });

    it("should throw an Error if there is orphaned characters at the end of the filter", () => {
      assertThrowsError('eq(subject, "value") lol-wut');
    });

    it("should throw an Error if there are not enough arguments", () => {
      assertThrowsError("neq(subject)");
    });

    it("should throw an Error if there are too many arguments", () => {
      assertThrowsError('lteq(subject, "value", lol-wut)');
    });

    it("sets correct subject", () => {
      assertParsesFilterSubject("subject", 'like(subject, "value")');
    });

    it("sets correct value", () => {
      // Arrange.
      const target = createTestTarget();
      const expected = "sentence value";
      // Act.
      const f = target.deserialize(
        `eq(subject, "${expected}")`,
      ) as IZFilterBinary;
      const actual = f.value;
      // Assert.
      expect(actual).toEqual(expected);
    });

    describe("Equals", () => {
      const operator = ZOperatorBinary.Equal;
      const filter = `${operator}(subject, "value")`;

      it("should parse filter type", () => {
        assertParsesFilterType(isBinaryFilter, filter);
      });

      it("sets correct operator", () => {
        assertParsesFilterOperator(operator, filter);
      });
    });

    describe("Not Equals", () => {
      const operator = ZOperatorBinary.NotEqual;
      const filter = `${operator}(subject, "value")`;

      it("should parse filter type", () => {
        assertParsesFilterType(isBinaryFilter, filter);
      });

      it("sets correct operator", () => {
        assertParsesFilterOperator(operator, filter);
      });
    });

    describe("Greater Than", () => {
      const operator = ZOperatorBinary.GreaterThan;
      const filter = `${operator}(subject, "value")`;

      it("should parse filter type", () => {
        assertParsesFilterType(isBinaryFilter, filter);
      });

      it("sets correct operator", () => {
        assertParsesFilterOperator(operator, filter);
      });
    });

    describe("Greater Than Or Equal To", () => {
      const operator = ZOperatorBinary.GreaterThanEqualTo;
      const filter = `${operator}(subject, "value")`;

      it("should parse filter type", () => {
        assertParsesFilterType(isBinaryFilter, filter);
      });

      it("sets correct operator", () => {
        assertParsesFilterOperator(operator, filter);
      });
    });

    describe("Less Than", () => {
      const operator = ZOperatorBinary.LessThan;
      const filter = `${operator}(subject, "value")`;

      it("should parse filter type", () => {
        assertParsesFilterType(isBinaryFilter, filter);
      });

      it("sets correct operator", () => {
        assertParsesFilterOperator(operator, filter);
      });
    });

    describe("Less Than Or Equal To", () => {
      const operator = ZOperatorBinary.LessThanEqualTo;
      const filter = `${operator}(subject, "value")`;

      it("should parse filter type", () => {
        assertParsesFilterType(isBinaryFilter, filter);
      });

      it("sets correct operator", () => {
        assertParsesFilterOperator(operator, filter);
      });
    });

    describe("Like", () => {
      const operator = ZOperatorBinary.Like;
      const filter = `${operator}(subject, "value")`;

      it("should parse filter type", () => {
        assertParsesFilterType(isBinaryFilter, filter);
      });

      it("sets correct operator", () => {
        assertParsesFilterOperator(operator, filter);
      });
    });
  });

  describe("Unary", () => {
    it("should throw an Error if the argument list is not closed", () => {
      assertThrowsError("null(subject, (value)");
    });

    it("should throw an Error if the argument list is not opened", () => {
      assertThrowsError("is-not-null[subject)");
    });

    it("should throw an Error if there is orphaned characters at the end of the filter", () => {
      assertThrowsError("null(subject) lol-wut");
    });

    it("should throw an Error if there are not enough arguments", () => {
      assertThrowsError("is-not-null()");
    });

    it("should throw an Error if there are too many arguments", () => {
      assertThrowsError("null(subject, lol-wut)");
    });

    it("sets correct subject", () => {
      assertParsesFilterSubject("subject", "null(subject)");
    });

    describe("IsNull", () => {
      const operator = ZOperatorUnary.IsNull;
      const filter = `${operator}(subject)`;

      it("should parse filter type", () => {
        assertParsesFilterType(isUnaryFilter, filter);
      });

      it("sets correct operator", () => {
        assertParsesFilterOperator(operator, filter);
      });
    });

    describe("IsNotNull", () => {
      const operator = ZOperatorUnary.IsNotNull;
      const filter = `${operator}(subject)`;

      it("should parse filter type", () => {
        assertParsesFilterType(isUnaryFilter, filter);
      });

      it("sets correct operator", () => {
        assertParsesFilterOperator(operator, filter);
      });
    });
  });

  describe("Collection", () => {
    it("should throw an Error if the argument list is not closed", () => {
      assertThrowsError("in(subject, 1, 2, 3, 4");
    });

    it("should throw an Error if the argument list is not opened", () => {
      assertThrowsError("not-in[subject, 1, 2)");
    });

    it("should throw an Error if there is orphaned characters at the end of the filter", () => {
      assertThrowsError("in(subject, 1) lol-wut");
    });

    it("should throw an Error if there are not enough arguments", () => {
      assertThrowsError("in()");
    });

    it("sets correct subject", () => {
      assertParsesFilterSubject("subject", "not-in(subject, 1, 2, 3, 4)");
    });

    it("sets correct value list", () => {
      // Arrange.
      const target = createTestTarget();
      const expected = [1, 2, 3, 4];
      // Act.
      const f = target.deserialize(
        `in(subject, ${expected.join(", ")})`,
      ) as IZFilterCollection;
      const actual = f.values;
      // Assert.
      expect(actual).toEqual(expected);
    });

    describe("In", () => {
      const operator = ZOperatorCollection.In;
      const filter = `${operator}(subject)`;

      it("should parse filter type", () => {
        assertParsesFilterType(isCollectionFilter, filter);
      });

      it("sets correct operator", () => {
        assertParsesFilterOperator(operator, filter);
      });
    });

    describe("Not In", () => {
      const operator = ZOperatorCollection.NotIn;
      const filter = `${operator}(subject)`;

      it("should parse filter type", () => {
        assertParsesFilterType(isCollectionFilter, filter);
      });

      it("sets correct operator", () => {
        assertParsesFilterOperator(operator, filter);
      });
    });
  });

  describe("Logic", () => {
    it("should throw an Error if the argument list is not closed", () => {
      assertThrowsError('and(eq(subject, "1"), eq(age, 4)');
    });

    it("should throw an Error if the argument list is not opened", () => {
      assertThrowsError("or[in(subject, 1, 2, 3, 4)]");
    });

    it("should throw an Error if there is orphaned characters at the end of the filter", () => {
      assertThrowsError("or(in(subject, 1), not-in(subject, 3, 4)) lol-wut");
    });

    it("sets correct clause list", () => {
      // Arrange.
      const target = createTestTarget();
      const expected = [
        new ZFilterUnaryBuilder().isNotNull().subject("subject").build(),
        new ZFilterLogicBuilder()
          .or()
          .clause(
            new ZFilterUnaryBuilder()
              .isNotNull()
              .subject("other-subject")
              .build(),
          )
          .clause(
            new ZFilterBinaryBuilder()
              .subject("another-subject")
              .equal()
              .value(2)
              .build(),
          )
          .build(),
      ];
      const filter = `and(is-not-null(subject), or(is-not-null(other-subject), eq(another-subject, 2)))`;
      // Act.
      const f = target.deserialize(filter) as IZFilterLogic;
      const actual = f.clauses;
      // Assert.
      expect(actual).toEqual(expected);
    });

    describe("And", () => {
      const operator = ZOperatorLogic.And;
      const filter = `${operator}(is-not-null(subject), is-not-null(other-subject))`;

      it("should parse filter type", () => {
        assertParsesFilterType(isLogicFilter, filter);
      });

      it("sets correct operator", () => {
        assertParsesFilterOperator(operator, filter);
      });
    });

    describe("Or", () => {
      const operator = ZOperatorLogic.Or;
      const filter = `${operator}(is-not-null(subject), is-not-null(other-subject))`;

      it("should parse filter type", () => {
        assertParsesFilterType(isLogicFilter, filter);
      });

      it("sets correct operator", () => {
        assertParsesFilterOperator(operator, filter);
      });
    });
  });
});
