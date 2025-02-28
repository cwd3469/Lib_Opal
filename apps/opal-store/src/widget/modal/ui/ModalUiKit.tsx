import styled from "@emotion/styled";

type ModalBodyContentType = {
  width?: string;
};

const Z_INDEX = {
  mark: 999998,
  maskBody: 999999,
};

export const Mask = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000b2;
  z-index: ${Z_INDEX.mark};
`;
export const MaskBody = styled.div<{ zIndex?: string }>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: ${(props) => props.zIndex ?? Z_INDEX.maskBody};
`;

export const MaskBodyContent = styled.div<ModalBodyContentType>`
  width: ${(props) => (props.width ? props.width : "320px")};
  height: auto;

  display: flex;
  flex-direction: column;
  gap: 8px;
  border-radius: ${(props) => props.theme.radius.xsm};
  padding: ${(props) => props.theme.padding.xxxl};

  background-color: white;
`;

export const ModalHeader = styled.div`
  color: ${(props) => props.theme.palette.gray[900]};
  text-align: center;
  ${(props) => props.theme.typography.B6_Body_14_SB}
`;

export const ModalBody = styled.div`
  min-height: 192px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  white-space: pre-wrap;
  color: var(--TrueGray-Gray900, #242424);
  text-align: center;
  /* Body1 */
  ${(props) => props.theme.typography.B5_Body_16_R}
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.theme.gap.xl};
  align-self: stretch;
  padding-top: ${(props) => props.theme.padding.lg};
`;
