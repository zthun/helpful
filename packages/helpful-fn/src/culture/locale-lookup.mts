import {
  enAU,
  enCA,
  enGB,
  enIE,
  enIN,
  enNZ,
  enUS,
  enZA,
  ja,
} from "date-fns/locale";

/**
 * Supported locales from date-fns.
 *
 * This should not be exported.  This is an internal helper.
 */
export const LocaleLookup = {
  [enAU.code]: enAU,
  [enCA.code]: enCA,
  [enGB.code]: enGB,
  [enIE.code]: enIE,
  [enIN.code]: enIN,
  [enNZ.code]: enNZ,
  [enUS.code]: enUS,
  [enZA.code]: enZA,
  [ja.code]: ja,
};
