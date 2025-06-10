import { ZTypedocConfigBuilder } from "@zthun/janitor-build-config/typedoc";

export default new ZTypedocConfigBuilder()
  .web()
  .entry("../*")
  .name("Helpful")
  .favicon("public/images/svg/helpful.svg")
  .build();
