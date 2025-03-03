import { useCallback, useState } from "react";

import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { OptionInterface, OptionSize } from "../interface";

import { useClickOutOfBoundary } from "./hooks/useClickOutOfBoundary";

interface Props {
  placeHolder?: string;
  disabled?: boolean;
  currentValue?: OptionInterface;
  item: OptionInterface[];
  handleChange: (value: OptionInterface) => void;
}

export type SelectProps = Props & {
  boxSize?: OptionSize;
  boxWidth?: string;
  menuWidth?: string;
};

export function DropDownBox({
  boxSize = "LG",
  boxWidth = "262px",
  ...props
}: SelectProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { ref } = useClickOutOfBoundary<HTMLDivElement>(() => dropDownClose());

  const dropDownClose = useCallback(() => setIsOpen(false), [isOpen]);

  const handleChangeValue = (data: OptionInterface) => {
    props.handleChange(data);
    dropDownClose();
  };

  const showPlaceHolder =
    props.placeHolder !== undefined && props.currentValue === undefined;

  return (
    <StyledSelectbox ref={ref} boxSize={boxSize} boxWidth={boxWidth}>
      <SelectButton
        type="button"
        boxSize={boxSize}
        disabled={props.disabled}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {showPlaceHolder ? (
          <PlaceHolder boxSize={boxSize}>{props.placeHolder}</PlaceHolder>
        ) : (
          <SelectedValue boxSize={boxSize} disabled={props.disabled}>
            {props.currentValue?.label}
          </SelectedValue>
        )}
        {/* {boxSize !== 'SM' ? (
          <IcBrackets
            style={{
              transform: `rotate(${isOpen ? '180deg' : 0})`,
            }}
          />
        ) : (
          <IcBracketsSm
            style={{
              transform: `rotate(${isOpen ? '180deg' : 0})`,
            }}
          />
        )} */}
      </SelectButton>
      <DropDownMenu
        visible={isOpen}
        boxSize={boxSize}
        menuWidth={props.menuWidth}
      >
        {props.item.map((option, index) => (
          <DropDownItem
            key={`${option.label}_${index}`}
            onClick={() => handleChangeValue(option)}
          >
            {option.label}
          </DropDownItem>
        ))}
      </DropDownMenu>
    </StyledSelectbox>
  );
}

export default DropDownBox;

const boxPadding: Record<OptionSize, string> = {
  LG: "8px 8px 8px 16px",
  MD: "8px 8px 8px 16px",
  SM: "8px",
  MINI: "4px 8px 4px 16px",
};

const boxHeight: Record<OptionSize, string> = {
  LG: "44px",
  MD: "40px",
  SM: "32px",
  MINI: "30px",
};

const StyledSelectbox = styled.div<{ boxSize: OptionSize; boxWidth: string }>`
  position: relative;
  width: ${({ boxWidth }) => boxWidth};
  height: ${({ boxSize }) => boxHeight[boxSize]};
`;

const SelectButton = styled.button<{ boxSize: OptionSize }>`
  display: flex;
  width: 100%;
  height: 100%;
  padding: ${({ boxSize }) => boxPadding[boxSize]};
  align-items: center;

  border: 1px solid var(--gray-cool-300, #b4bfc8);
  border-radius: var(--radius-md, 6px);

  background: var(--gray-true-white, #fff);

  :disabled {
    color: var(--gray-true-500, #b3b3b3);
    background: var(--gray-true-025, #fbfbfb);
    cursor: not-allowed;
  }
`;

const SelectedValue = styled.span<{ boxSize: Size; disabled?: boolean }>`
  flex: 1 0 0;
  overflow: hidden;
  color: ${({ disabled = false }) =>
    disabled
      ? "var(--gray-true-500, #b3b3b3)"
      : "var(--gray-true-900, #242424)"};
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;

  //TODO 추후 변경
  font-size: ${({ boxSize }) => (boxSize === "SM" ? "12px" : "14px")};
  font-style: normal;
  font-weight: 400;
  line-height: ${({ boxSize }) => (boxSize === "SM" ? "16px" : "20px")};
`;

const PlaceHolder = styled.span<{ boxSize: Size }>`
  flex: 1 0 0;
  overflow: hidden;
  color: var(--gray-true-500, #b3b3b3);
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;

  //TODO 추후 변경
  font-size: ${({ boxSize }) => (boxSize === "SM" ? "12px" : "14px")};
  font-style: normal;
  font-weight: 400;
  line-height: ${({ boxSize }) => (boxSize === "SM" ? "16px" : "20px")};
`;

const DropDownMenu = styled.ul<{
  visible: boolean;
  boxSize: OptionSize;
  menuWidth?: string;
}>`
  position: absolute;
  top: ${({ boxSize }) => boxHeight[boxSize]};
  left: 0;
  width: ${({ menuWidth }) => menuWidth ?? "100%"};
  max-height: 200px;
  overflow-y: auto;
  border-radius: var(--radius-md, 6px);
  border: 1px solid var(--gray-cool-500, #8094a4);
  background: var(--gray-true-white, #fff);
  box-shadow: 0px 2px 4px 0px rgba(103, 118, 131, 0.2);
  z-index: 100;

  transition: 0.2s ease;
  opacity: 0;
  visibility: hidden;

  //TODO 추후 변경
  font-size: ${({ boxSize }) => (boxSize === "SM" ? "12px" : "14px")};
  font-style: normal;
  font-weight: 400;
  line-height: ${({ boxSize }) => (boxSize === "SM" ? "16px" : "20px")};

  ${({ visible }) =>
    visible &&
    css`
      opacity: 1;
      visibility: visible;
      transform: scaleY(1);
    `}
`;

const DropDownItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  align-self: stretch;
  height: 40px;
  min-height: 40px;
  padding: 0px 16px;
  border-bottom: 1px solid var(--gray-cool-100, #e6eaec);
  background: var(--gray-true-white, #fff);
  cursor: pointer;

  &:hover {
    background: var(--function-blue-background, #f6fbfe);
  }

  &:last-child {
    border-bottom: none;
  }
`;
