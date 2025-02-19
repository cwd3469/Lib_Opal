import { useTheme } from "@emotion/react";
import { css } from "@emotion/css";
import styled from "@emotion/styled";
import { ButtonHTMLAttributes } from "react";
import { PaletteKey, PaletteListKey } from "../../theme/config/palette";
import { hexToRgbaColor } from "../lib/rgba";
import { Breakpoint, Variant } from "../interface/pointer";

export type ButtonProps = {
  size?: Breakpoint;
  palette?: PaletteKey;
  variant?: Variant;
  btnWidth?: string;
};

type ButtonColor = {
  main: PaletteListKey;
  hover: PaletteListKey;
};

type Props = ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps;

const Button = ({ size, palette, variant, ...props }: Props) => {
  const theme = useTheme();

  const selectColor = paletteStyle[palette || "primary"];
  const mainColor = theme.palette[palette || "primary"][selectColor.main];
  const hoverColor = theme.palette[palette || "primary"][selectColor.hover];

  const rgba = mainColor ? hexToRgbaColor(mainColor, 0.04) : "#fff";

  const variantStyle: { [key in Variant]: string } = {
    contained: css`
      border: 0px;
      background-color: ${mainColor};
      color: #fff;
      :hover {
        background-color: ${hoverColor};
      }
    `,
    outlined: css`
      border: 1px solid ${mainColor};
      background-color: #fff;
      color: ${mainColor};
      :hover {
        background-color: ${rgba};
        color: ${mainColor};
      }
    `,
    text: css`
      border: 0px;
      background-color: #fff;
      color: ${mainColor};
      :hover {
        background-color: ${rgba};
        color: ${mainColor};
        box-shadow: 0px 2px 10px 2px rgba(0, 0, 0, 0.08);
      }
    `,
  };

  const sizeStyle: { [key in Breakpoint]: string } = {
    lg: css`
      padding: 10px 20px;
      border-radius: ${theme.radius.lg};
      ${theme.typography.L4_Label_16_M};
      line-height: 1.2;
    `,
    md: css`
      padding: 9px 20px;
      border-radius: ${theme.radius.md};
      ${theme.typography.L5_Label_14_M};
      line-height: 1.2;
    `,
    sm: css`
      padding: 6px 12px;
      border-radius: ${theme.radius.sm};
      ${theme.typography.L6_Label_12_M};
      line-height: 1.2;
    `,
  };

  return (
    <ButtonStyle
      {...props}
      className={`${sizeStyle[size || "md"]} ${variantStyle[variant || "contained"]} Button-Root`}
    />
  );
};

export default Button;

const ButtonStyle = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: ${(props) => (props.btnWidth ? `${props.btnWidth}` : "auto")};
  &:disabled {
    color: #999; /* Gray text color */
    background-color: #f5f5f5; /* Light gray background */
    border-color: #ccc; /* Gray border */
    cursor: not-allowed; /* Show a not-allowed cursor */
    opacity: 0.6; /* Reduce opacity */
  }
`;

const paletteStyle: { [key in PaletteKey]: ButtonColor } = {
  primary: {
    main: "400",
    hover: "600",
  },
  secondary: {
    main: "300",
    hover: "500",
  },
  info: {
    main: "700",
    hover: "900",
  },
  success: {
    main: "400",
    hover: "700",
  },
  warning: {
    main: "300",
    hover: "500",
  },
  error: {
    main: "300",
    hover: "500",
  },
  gray: {
    main: "600",
    hover: "700",
  },
  white: {
    main: "100",
    hover: "100",
  },
  black: {
    main: "900",
    hover: "900",
  },
};
