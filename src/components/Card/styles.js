import styled, { css } from "styled-components";

export const Container = styled.li`
  ${({ theme, isDragging }) => css`
    position: relative;
    background-color: white;
    border-radius: 6px;
    padding: 15px;
    margin-bottom: 10px;
    box-shadow: 0 0px 8px 0 ${theme.colors.greyLight};
    border-top: 20px solid ${theme.colors.whiteDark2};
    cursor: grab;

    header {
      position: absolute;
      top: -22px;
      left: 15px;
    }

    p {
      font-weight: 500;
      line-height: 20px;
    }
    img {
      width: 24px;
      height: 24px;
      border-radius: 50%;
    }
  `}
`;

export const Label = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 2px;
  display: inline-block;
  background: ${(props) => props.color};
`;
