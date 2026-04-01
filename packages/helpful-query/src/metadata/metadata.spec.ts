import { createGuid } from "@zthun/helpful-fn";
import { describe, expect, it } from "vitest";

import { ZMetadataBuilder, ZMetadataType } from "./metadata.mjs";

describe("Metadata Builder", () => {
  function createTestTarget() {
    return new ZMetadataBuilder();
  }

  describe("Id", () => {
    it("should set the id", () => {
      const expected = createGuid();
      expect(createTestTarget().id(expected).build().id).toEqual(expected);
    });

    it("should generate a new id", () => {
      expect(createTestTarget().id().build().id).toBeTruthy();
    });
  });

  describe("Name", () => {
    it("should set the value", () => {
      const expected = "Id";
      expect(createTestTarget().name(expected).build().name).toEqual(expected);
    });
  });

  describe("Description", () => {
    it("should set the value", () => {
      const expected = "Description of the field";
      expect(
        createTestTarget().description(expected).build().description,
      ).toEqual(expected);
    });
  });

  describe("Fallback", () => {
    it("should set the value", () => {
      const expected = "Default Value";
      expect(createTestTarget().fallback(expected).build().fallback).toEqual(
        expected,
      );
    });
  });

  describe("Flag", () => {
    describe("Editable", () => {
      it("should toggle on", () => {
        expect(createTestTarget().editable().build().editable).toBeTruthy();
      });

      it("should toggle off", () => {
        expect(createTestTarget().editable(false).build().editable).toBeFalsy();
      });
    });

    describe("Sortable", () => {
      it("should toggle on", () => {
        expect(createTestTarget().sortable().build().sortable).toBeTruthy();
      });

      it("should toggle off", () => {
        expect(createTestTarget().sortable(false).build().sortable).toBeFalsy();
      });
    });
  });

  describe("Type", () => {
    describe("Text", () => {
      it("should set the type", () => {
        expect(createTestTarget().text().build().type).toEqual(
          ZMetadataType.Text,
        );
      });
    });

    describe("Custom", () => {
      it("should set the type", () => {
        expect(createTestTarget().custom().build().type).toEqual(
          ZMetadataType.Custom,
        );
      });
    });

    describe("Date", () => {
      it("should set the type", () => {
        expect(createTestTarget().date().build().type).toEqual(
          ZMetadataType.Date,
        );
      });
    });

    describe("Number", () => {
      it("should set the type", () => {
        expect(createTestTarget().number().build().type).toEqual(
          ZMetadataType.Number,
        );
      });
    });

    describe("Icon", () => {
      it("should set the type", () => {
        expect(createTestTarget().icon().build().type).toEqual(
          ZMetadataType.Icon,
        );
      });
    });

    describe("Boolean", () => {
      it("should set the type", () => {
        expect(createTestTarget().boolean().build().type).toEqual(
          ZMetadataType.Boolean,
        );
      });
    });
  });

  describe("Format", () => {
    it("should set the value", () => {
      const expected = "currency";
      expect(createTestTarget().format(expected).build().format).toEqual(
        expected,
      );
    });
  });

  describe("Precision", () => {
    it("should set the value", () => {
      const expected = 4;
      expect(createTestTarget().precision(expected).build().precision).toEqual(
        expected,
      );
    });
  });

  describe("Width", () => {
    it("should set the value", () => {
      const expected = "24px";
      expect(createTestTarget().width(expected).build().width).toEqual(
        expected,
      );
    });

    it("should set the value in a square", () => {
      const expected = "24px";
      expect(createTestTarget().square(expected).build().width).toEqual(
        expected,
      );
    });
  });

  describe("Height", () => {
    it("should set the value", () => {
      const expected = "24px";
      expect(createTestTarget().height(expected).build().height).toEqual(
        expected,
      );
    });

    it("should set the value in a square", () => {
      const expected = "24px";
      expect(createTestTarget().square(expected).build().height).toEqual(
        expected,
      );
    });
  });

  describe("Class", () => {
    it("should set the value", () => {
      const expected = "material";
      expect(createTestTarget().cls(expected).build().cls).toEqual(expected);
    });
  });

  describe("Path", () => {
    it("should set the value", () => {
      const expected = "owner.name";
      expect(createTestTarget().path(expected).build().path).toEqual(expected);
    });
  });

  describe("Copy", () => {
    it("should create a copy of another metadata", () => {
      const expected = createTestTarget()
        .id()
        .name("refresh")
        .icon()
        .cls("material")
        .square("24px")
        .format("primary")
        .build();
      expect(createTestTarget().copy(expected).build()).toEqual(expected);
    });
  });
});
