import "@emotion/react";
import { TypographyValueKey } from "../../../shared/theme/config/typography";
import { PaletteValueKey } from "../../../shared/theme/config/palette";
import { BreakpointValueKey } from "../../../shared/theme/config/size";

declare module "@emotion/react" {
  export interface Theme {
    gap: BreakpointValueKey;
    padding: BreakpointValueKey;
    radius: BreakpointValueKey;
    screens: BreakpointValueKey;
    typography: TypographyValueKey;
    palette: PaletteValueKey;
  }
}
