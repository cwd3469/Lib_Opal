import styled from "@emotion/styled";

export const ErrorStatusMessage = styled.div`
  color: ${(props) => props.theme.palette.error[500]};
  ${(props) => props.theme.typography.B10_Body_12_R}
  line-height: 1;
`;

export const SuccessStatusMessage = styled.div`
  color: ${(props) => props.theme.palette.success[400]};
  ${(props) => props.theme.typography.B10_Body_12_R}
  line-height: 1;
`;
