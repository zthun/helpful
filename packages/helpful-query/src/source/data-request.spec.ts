import { createGuid } from "@zthun/helpful-fn";
import { describe, expect, it } from "vitest";

import { ZFilterBinaryBuilder } from "../filter/filter-binary.mjs";
import { ZSortBuilder } from "../sort/sort.mjs";
import { ZDataRequestBuilder } from "./data-request.mjs";

describe("ZDataRequestBuilder", () => {
  const createTestTarget = () => new ZDataRequestBuilder();

  describe("Query", () => {
    describe("Filter", () => {
      it("should be set", () => {
        const expected = new ZFilterBinaryBuilder()
          .subject("id")
          .equal()
          .value(createGuid())
          .build();
        expect(createTestTarget().filter(expected).build().filter).toEqual(
          expected,
        );
      });

      it("should remove the filter", () => {
        const filter = new ZFilterBinaryBuilder()
          .subject("id")
          .equal()
          .value(createGuid())
          .build();
        expect(
          createTestTarget().filter(filter).filter().build().filter,
        ).toBeUndefined();
      });

      it("should set by filter string", () => {
        const expected = new ZFilterBinaryBuilder()
          .subject("id")
          .equal()
          .value(createGuid())
          .build();
        const filter = `${expected.operator}(${expected.subject}, "${expected.value}")`;
        expect(createTestTarget().query({ filter }).build().filter).toEqual(
          expected,
        );
      });
    });

    describe("Sort", () => {
      it("should be set", () => {
        const expected = new ZSortBuilder().ascending("pop").build();
        expect(createTestTarget().sort(expected).build().sort).toEqual(
          expected,
        );
      });

      it("should remove the sort", () => {
        expect(
          createTestTarget().sort(new ZSortBuilder().build()).sort().build()
            .sort,
        ).toBeUndefined();
      });

      it("should set by sort string", () => {
        const expected = new ZSortBuilder()
          .ascending("pop")
          .descending("age")
          .build();
        const sort = `(asc(pop), desc(age))`;
        expect(createTestTarget().query({ sort }).build().sort).toEqual(
          expected,
        );
      });
    });

    describe("Page", () => {
      it("should be set", () => {
        expect(createTestTarget().query({ page: "4" }).build().page).toEqual(4);
      });

      it("should be kept if not set", () => {
        expect(createTestTarget().page(2).query({}).build().page).toEqual(2);
      });

      it("should be kept if not a number", () => {
        expect(
          createTestTarget().page(2).query({ page: "not-a-page" }).build().page,
        ).toEqual(2);
      });

      it("should be set to 1 if it evaluates to less than 0", () => {
        expect(
          createTestTarget().page(2).query({ page: "-1" }).build().page,
        ).toEqual(1);
      });

      it("should be set to 1 if it evaluates equal to 0", () => {
        expect(
          createTestTarget().page(2).query({ page: "0" }).build().page,
        ).toEqual(1);
      });
    });

    describe("Size", () => {
      it("should be set", () => {
        expect(createTestTarget().query({ size: "4" }).build().size).toEqual(4);
      });

      it("should be kept if not set", () => {
        expect(createTestTarget().size(2).query({}).build().size).toEqual(2);
      });

      it("should be kept if not a number", () => {
        expect(
          createTestTarget().size(2).query({ size: "not-a-size" }).build().size,
        ).toEqual(2);
      });

      it("should be set to 0 if it evaluates to less than 0", () => {
        expect(
          createTestTarget().size(2).query({ size: "-1" }).build().size,
        ).toEqual(0);
      });

      it("should be set to 0 if it evaluates equal to 0", () => {
        expect(
          createTestTarget().size(2).query({ size: "0" }).build().size,
        ).toEqual(0);
      });
    });

    describe("Search", () => {
      it("should be set", () => {
        expect(
          createTestTarget().query({ search: "foo-bar" }).build().search,
        ).toEqual("foo-bar");
      });

      it("should be kept if not set", () => {
        expect(
          createTestTarget().search("foo").query({}).build().search,
        ).toEqual("foo");
      });
    });
  });
});
