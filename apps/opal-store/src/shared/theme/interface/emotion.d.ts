import "@emotion/react";
import { TypographyValueKey } from "../config/typography";
import { PaletteValueKey } from "../config/palette";
import { BreakpointValueKey } from "../config/size";
import { ShadowTheme } from "../config/shadow";

declare module "@emotion/react" {
  export interface Theme {
    gap: BreakpointValueKey;
    padding: BreakpointValueKey;
    radius: BreakpointValueKey;
    screens: BreakpointValueKey;
    typography: TypographyValueKey;
    palette: PaletteValueKey;
    shadow: ShadowTheme;
  }
}
