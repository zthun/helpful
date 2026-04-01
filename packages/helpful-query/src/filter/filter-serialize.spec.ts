import { describe, expect, it } from "vitest";

import type { IZFilter } from "./filter.mjs";
import { ZFilterBinaryBuilder, ZOperatorBinary } from "./filter-binary.mjs";
import {
  ZFilterCollectionBuilder,
  ZOperatorCollection,
} from "./filter-collection.mjs";
import { ZFilterLogicBuilder, ZOperatorLogic } from "./filter-logic.mjs";
import { ZFilterSerialize } from "./filter-serialize.mjs";
import { ZFilterUnaryBuilder, ZOperatorUnary } from "./filter-unary.mjs";

describe("ZFilterSerialize", () => {
  const createTestTarget = () => new ZFilterSerialize();

  const assertSerializes = (
    expected: string | undefined,
    candidate: IZFilter | null | undefined,
  ) => {
    // Arrange.
    const target = createTestTarget();
    // Act.
    const actual = target.serialize(candidate);
    // Assert.
    expect(actual).toEqual(expected);
  };

  it("should serialize to undefined for undefined", () => {
    assertSerializes(undefined, undefined);
  });

  it("should serialize to undefined for null", () => {
    assertSerializes(undefined, null);
  });

  describe("Binary", () => {
    const assertSerializesWithOperator = (operator: ZOperatorBinary) => {
      const expected = `${operator}(subject, 100)`;
      const filter = new ZFilterBinaryBuilder()
        .subject("subject")
        .value(100)
        .operator(operator)
        .build();
      assertSerializes(expected, filter);
    };

    describe("Equal", () => {
      it("should serialize", () => {
        assertSerializesWithOperator(ZOperatorBinary.Equal);
      });
    });

    describe("Not Equal", () => {
      it("should serialize", () => {
        assertSerializesWithOperator(ZOperatorBinary.NotEqual);
      });
    });

    describe("Less Than Equal To", () => {
      it("should serialize", () => {
        assertSerializesWithOperator(ZOperatorBinary.LessThanEqualTo);
      });
    });

    describe("Less Than", () => {
      it("should serialize", () => {
        assertSerializesWithOperator(ZOperatorBinary.LessThan);
      });
    });

    describe("Greater Than Equal To", () => {
      it("should serialize", () => {
        assertSerializesWithOperator(ZOperatorBinary.GreaterThanEqualTo);
      });
    });

    describe("Greater Than", () => {
      it("should serialize", () => {
        assertSerializesWithOperator(ZOperatorBinary.GreaterThan);
      });
    });

    describe("Like", () => {
      it("should serialize", () => {
        assertSerializesWithOperator(ZOperatorBinary.Like);
      });
    });

    describe("StartsWith", () => {
      it("should serialize", () => {
        assertSerializesWithOperator(ZOperatorBinary.StartsWith);
      });
    });

    describe("EndsWith", () => {
      it("should serialize", () => {
        assertSerializesWithOperator(ZOperatorBinary.EndsWith);
      });
    });
  });

  describe("Unary", () => {
    const assertSerializesWithOperator = (operator: ZOperatorUnary) => {
      const expected = `${operator}(subject)`;
      const filter = new ZFilterUnaryBuilder()
        .subject("subject")
        .operator(operator)
        .build();
      assertSerializes(expected, filter);
    };

    describe("IsNotNull", () => {
      it("should serialize", () => {
        assertSerializesWithOperator(ZOperatorUnary.IsNotNull);
      });
    });

    describe("IsNull", () => {
      it("should serialize", () => {
        assertSerializesWithOperator(ZOperatorUnary.IsNull);
      });
    });
  });

  describe("Collection", () => {
    const assertSerializesWithOperator = (operator: ZOperatorCollection) => {
      const values = [1, 2, 3, 4];
      const expected = `${operator}(subject, 1, 2, 3, 4)`;
      const filter = new ZFilterCollectionBuilder()
        .subject("subject")
        .values(values)
        .operator(operator)
        .build();
      assertSerializes(expected, filter);
    };

    describe("In", () => {
      it("should serialize", () => {
        assertSerializesWithOperator(ZOperatorCollection.In);
      });
    });

    describe("Not In", () => {
      it("should serialize", () => {
        assertSerializesWithOperator(ZOperatorCollection.NotIn);
      });
    });
  });

  describe("Logic", () => {
    const assertSerializesWithOperator = (operator: ZOperatorLogic) => {
      const expected = `${operator}(is-not-null(subject), like(subject, "a"))`;
      const a = new ZFilterUnaryBuilder()
        .subject("subject")
        .isNotNull()
        .build();
      const b = new ZFilterBinaryBuilder()
        .subject("subject")
        .like()
        .value("a")
        .build();
      const filter = new ZFilterLogicBuilder()
        .operator(operator)
        .clause(a)
        .clause(b)
        .build();
      assertSerializes(expected, filter);
    };

    describe("And", () => {
      it("should serialize", () => {
        assertSerializesWithOperator(ZOperatorLogic.And);
      });
    });

    describe("Or", () => {
      it("should serialize", () => {
        assertSerializesWithOperator(ZOperatorLogic.Or);
      });
    });
  });
});
