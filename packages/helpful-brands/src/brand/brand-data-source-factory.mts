import type { IZDataSource } from "@zthun/helpful-query";
import {
  ZDataSearchFields,
  ZDataSourceStatic,
  ZDataSourceStaticOptionsBuilder,
} from "@zthun/helpful-query";
import { ZBrandKnown } from "./brand-known.mjs";
import type { IZBrand } from "./brand.mjs";

export abstract class ZBrandDataSourceFactory {
  public static create(): IZDataSource<IZBrand> {
    const search = new ZDataSearchFields(["name", "owner"]);

    const options = new ZDataSourceStaticOptionsBuilder()
      .delay(250)
      .search(search)
      .build();

    return new ZDataSourceStatic<IZBrand>(ZBrandKnown.all(), options);
  }
}
