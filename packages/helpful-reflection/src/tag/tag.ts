import { firstDefined } from "@zthun/helpful-fn";
import { defineMetadata, getMetadata } from "reflect-metadata/no-conflict";

const Key = "zthunworks:tags";

export function ZTag(
  by: string,
): MethodDecorator & ClassDecorator & PropertyDecorator {
  return (target: any, property?: string | symbol) => {
    if (property == null) {
      // Class.
      const current = firstDefined({}, getMetadata(Key, target));
      defineMetadata(Key, { ...current, [by]: true }, target);
    } else {
      // Member.
      const current = firstDefined({}, getMetadata(Key, target, property));
      defineMetadata(Key, { ...current, [by]: true }, target, property);
    }
  };
}

export function isTagged(
  by: string,
  target: any,
  property?: string | symbol,
): boolean {
  const candidates = ["function", "object"];
  const type = typeof target;

  if (target == null || !candidates.includes(type)) {
    return false;
  }

  const tags = property
    ? getMetadata(Key, target, property)
    : getMetadata(Key, target);

  return Object.prototype.hasOwnProperty.call(firstDefined({}, tags), by);
}
