import styled from "@emotion/styled";

type Props = {
  color?: string;
};

export const Label = styled.label<Props>`
  ${(props) => props.theme.typography.B6_Body_14_SB}
  color:${(props) => props.theme.palette.gray[900]}
`;
