import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    height: 80px;
    padding: 0 30px;
    color: white;
    background-color: ${theme.colors.primary};
    display: flex;
    align-items: center;
  `}
`;
