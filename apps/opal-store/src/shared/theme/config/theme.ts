import { palette } from "./palette";
import { shadow } from "./shadow";
import size from "./size";
import typography from "./typography";

const theme = {
  typography,
  palette,
  shadow,
  ...size,
};

export default theme;
