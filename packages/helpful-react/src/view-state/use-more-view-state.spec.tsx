import { type IZCircusSetup, ZCircusDestroy } from "@zthun/cirque";
import type { IZCircusReactHook } from "@zthun/cirque-du-react";
import { ZCircusSetupHook } from "@zthun/cirque-du-react";
import { sleep } from "@zthun/helpful-fn";
import type { IZDataRequest, IZDataSource } from "@zthun/helpful-query";
import {
  ZDataRequestBuilder,
  ZDataSourceStatic,
  ZDataSourceStaticOptionsBuilder,
} from "@zthun/helpful-query";
import { range } from "lodash-es";
import { StrictMode } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { mock } from "vitest-mock-extended";

import {
  asStateError,
  isStateLoading,
} from "../async-state/use-async-state.mjs";
import { useMoreViewState } from "./use-more-view-state.mjs";

describe("useMoreViewState", () => {
  let source: IZDataSource<number>;
  let template: IZDataRequest;
  let _hook: IZCircusReactHook<any, any>;
  let _setup: IZCircusSetup<IZCircusReactHook<any, any>>;

  const rerender = async (target: IZCircusReactHook<any, any>) => {
    await sleep(100);
    await target.rerender();
  };

  const createTestTarget = async () => {
    const wrapper = ({ children }) => <StrictMode>{children}</StrictMode>;
    _setup = new ZCircusSetupHook(() => useMoreViewState(source, template), {
      wrapper,
    });
    _hook = await _setup.setup();
    await rerender(_hook);
    return _hook;
  };

  beforeEach(() => {
    template = new ZDataRequestBuilder().size(20).build();
  });
  afterEach(() => ZCircusDestroy.sequential(_hook, _setup));

  describe("Loading", () => {
    beforeEach(() => {
      source = new ZDataSourceStatic<number>(
        [],
        new ZDataSourceStaticOptionsBuilder().delay(500).build(),
      );
    });

    it("should begin loading the start page", async () => {
      // Arrange.
      const target = await createTestTarget();
      // Act.
      const { last } = await target.current();
      const actual = isStateLoading(last);
      // Assert.
      expect(actual).toBeTruthy();
    });

    it("should return an empty view", async () => {
      // Arrange.
      const target = await createTestTarget();
      // Act.
      const { view: actual } = await target.current();
      // Assert.
      expect(actual).toEqual([]);
    });
  });

  describe("Success", () => {
    let data: number[];
    beforeEach(() => {
      data = range(0, 100);
      source = new ZDataSourceStatic(data);
    });

    it("should load the first page", async () => {
      // Arrange.
      const expected = data.slice(0, 20);
      const target = await createTestTarget();
      // Act.
      const { view: actual } = await target.current();
      // Assert.
      expect(actual).toEqual(expected);
    });

    it("should reload the first page", async () => {
      // Arrange.
      const expected = data.slice(0, 20);
      const target = await createTestTarget();
      const { more } = await target.current();
      more();
      await rerender(target);
      // Act.
      const { reset } = await target.current();
      reset();
      await rerender(target);
      const { view: actual } = await target.current();
      // Assert.
      expect(actual).toEqual(expected);
    });

    it("should append to the current view", async () => {
      // Arrange.
      const expected = data.slice(0, 60);
      const target = await createTestTarget();
      // Act.
      const { more } = await target.current();
      more();
      await rerender(target);
      more();
      await rerender(target);
      const { view: actual } = await target.current();
      // Assert.
      expect(actual).toEqual(expected);
    });

    it("should set the last page loaded", async () => {
      // Arrange.
      const expected = data.slice(20, 40);
      const target = await createTestTarget();
      // Act.
      const { more } = await target.current();
      more();
      await rerender(target);
      const { last: actual } = await target.current();
      // Assert.
      expect(actual).toEqual(expected);
    });

    it("should load everything in one big invocation if there is no page size", async () => {
      // Arrange.
      template = new ZDataRequestBuilder().build();
      const target = await createTestTarget();
      // Act.
      const { view: actual } = await target.current();
      // Assert.
      expect(actual).toEqual(data);
    });

    it("should return false for complete if there is more data to load", async () => {
      // Arrange.
      template = new ZDataRequestBuilder().size(data.length / 2).build();
      const target = await createTestTarget();
      // Act.
      const { complete } = await target.current();
      // Assert.
      expect(complete).toBeFalsy();
    });

    it("should return true for complete if there is no more data to load.", async () => {
      // Arrange.
      template = new ZDataRequestBuilder().build();
      const target = await createTestTarget();
      // Act.
      const { complete } = await target.current();
      // Assert.
      expect(complete).toBeTruthy();
    });

    it("should not load any more data when complete", async () => {
      // Arrange.
      template = new ZDataRequestBuilder().build();
      const target = await createTestTarget();
      // Act.
      const { more } = await target.current();
      more();
      await rerender(target);
      const { view: actual } = await target.current();
      // Assert.
      expect(actual).toEqual(data);
    });
  });

  describe("Error", () => {
    beforeEach(() => {
      source = new ZDataSourceStatic<number>(new Error("Something went wrong"));
    });

    it("should output an error as the last request", async () => {
      // Arrange.
      const target = await createTestTarget();
      // Act.
      const { last } = await target.current();
      // Assert.
      expect(last).toBeInstanceOf(Error);
    });

    it("should output the exact error if a non error is returned", async () => {
      // Arrange.
      const _source = mock<IZDataSource<number>>();
      const expected = "Non Error Returned";
      _source.count.mockResolvedValue(10);
      _source.retrieve.mockRejectedValue(expected);
      source = _source;
      const target = await createTestTarget();
      // Act.
      const { last } = await target.current();
      const actual = asStateError(last);
      // Assert.
      expect(actual).toBeTruthy();
      expect(actual?.message).toEqual(expected);
    });

    it("should reset the count when an error occurs", async () => {
      // Arrange.
      const target = await createTestTarget();
      // Act.
      const { more } = await target.current();
      vi.spyOn(source, "count");
      more();
      await sleep(501);
      more();
      await sleep(501);
      // Assert
      expect(source.count).toHaveBeenCalledTimes(2);
    });
  });
});
