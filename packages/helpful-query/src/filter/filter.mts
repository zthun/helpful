import type { IZFilterBinary, ZOperatorBinary } from "./filter-binary.mjs";
import { ZOperatorsBinary } from "./filter-binary.mjs";
import type {
  IZFilterCollection,
  ZOperatorCollection,
} from "./filter-collection.mjs";
import { ZOperatorsCollection } from "./filter-collection.mjs";
import type { IZFilterLogic, ZOperatorLogic } from "./filter-logic.mjs";
import { ZOperatorsLogic } from "./filter-logic.mjs";
import type { IZFilterUnary, ZOperatorUnary } from "./filter-unary.mjs";
import { ZOperatorsUnary } from "./filter-unary.mjs";

/**
 * Represents one of the filter types.
 */
export type IZFilter =
  | IZFilterBinary
  | IZFilterLogic
  | IZFilterCollection
  | IZFilterUnary;

/**
 * Represents one of the operator types.
 */
export type ZOperatorFilter =
  | ZOperatorBinary
  | ZOperatorCollection
  | ZOperatorLogic
  | ZOperatorUnary;

/**
 * A list of all possible filter operators in one collection.
 */
export const ZOperatorsFilter = ([] as ZOperatorFilter[])
  .concat(ZOperatorsBinary)
  .concat(ZOperatorsCollection)
  .concat(ZOperatorsLogic)
  .concat(ZOperatorsUnary);
