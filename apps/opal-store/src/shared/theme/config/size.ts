type Breakpoint = "xsm" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";

export type BreakpointValueKey = {
  [key in Breakpoint]: string;
};

const padding = {
  xsm: "2px",
  sm: "4px",
  md: "8px",
  lg: "12px",
  xl: "16px",
  xxl: "20px",
  xxxl: "20px",
};

const gap: BreakpointValueKey = {
  xsm: "2px",
  sm: "4px",
  md: "8px",
  lg: "12px",
  xl: "16px",
  xxl: "20px",
  xxxl: "20px",
};

const radius: BreakpointValueKey = {
  xsm: "2px",
  sm: "4px",
  md: "6px",
  lg: "8px",
  xl: "16px",
  xxl: "24px",
  xxxl: "24px",
};

const screens: BreakpointValueKey = {
  xsm: "480px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  xxl: "1536px",
  xxxl: "1960px",
};

const size = {
  gap,
  radius,
  screens,
  padding,
};
export default size;
