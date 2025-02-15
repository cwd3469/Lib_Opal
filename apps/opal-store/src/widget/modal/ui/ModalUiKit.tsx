import styled from "@emotion/styled";

type ModalBodyContentType = {
  width?: string;
};

export const Mask = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000b2;
`;
export const MaskBody = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const MaskBodyContent = styled.div<ModalBodyContentType>`
  background-color: white;
  padding: 1rem;
  height: auto;
  width: ${(props: ModalBodyContentType) =>
    props.width ? props.width : "320px"};
  border-radius: var(--RadiusLG, 8px);
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ModalHeader = styled.div`
  color: var(--TrueGray-Gray800, #484848);
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px; /* 150% */
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
  gap: var(--RadiusLG, 8px);
  align-self: stretch;
`;
