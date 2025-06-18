import type { IZMetadata } from "@zthun/helpful-query";
import { ZMetadataBuilder } from "@zthun/helpful-query";
import { isTagged, ZTag } from "@zthun/helpful-reflection";

const BrandMetadata = "zthunworks:brand:metadata";

export abstract class ZBrandMetadata {
  public static all(): IZMetadata[] {
    const properties = Object.getOwnPropertyNames(ZBrandMetadata);

    const metadata = properties
      .filter((p) => isTagged(BrandMetadata, ZBrandMetadata, p))
      .map((p) => ZBrandMetadata[p])
      .map((fn) => fn as () => IZMetadata)
      .map((fn) => fn.call(null));

    return metadata;
  }

  @ZTag(BrandMetadata)
  public static id() {
    return new ZMetadataBuilder()
      .id("id")
      .name("ID")
      .path("id")
      .editable(false)
      .text()
      .sortable()
      .build();
  }

  @ZTag(BrandMetadata)
  public static active() {
    return new ZMetadataBuilder()
      .id("active")
      .name("Active")
      .path("active")
      .boolean()
      .editable()
      .sortable()
      .build();
  }

  @ZTag(BrandMetadata)
  public static $name() {
    return new ZMetadataBuilder()
      .id("name")
      .name("Name")
      .path("name")
      .text()
      .editable()
      .sortable()
      .build();
  }

  @ZTag(BrandMetadata)
  public static launched() {
    return new ZMetadataBuilder()
      .id("launched")
      .name("Launched")
      .path("founded")
      .date()
      .format("yyyy-MM-dd")
      .editable()
      .sortable()
      .build();
  }

  @ZTag(BrandMetadata)
  public static owner() {
    return new ZMetadataBuilder()
      .id("owner")
      .name("Owner")
      .path("owner")
      .text()
      .editable()
      .sortable()
      .build();
  }
}
