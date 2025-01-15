import styled from "@emotion/styled";

export const ErrorStatusMessage = styled.div`
  color: var(--Function-Red_Default, #f15050);
  ${(props) => props.theme.typography.B10_Body_12_R}
`;

export const SuccessStatusMessage = styled.div`
  color: var(--Function-Green_Dark, #109138);
  ${(props) => props.theme.typography.B10_Body_12_R}
`;
