import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ done, theme }) => css`
    padding: 0 15px;
    height: 100%;
    flex: 0 0 320px;

    opacity: ${done ? 0.6 : 1};
    & + div {
      border-left: 1px solid rgba(0, 0, 0, 0.05);
    }

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 42px;

      h2 {
        font-weight: 500;
        font-size: 16px;
        padding: 0 10px;
      }

      button {
        height: 42px;
        width: 42px;
        border-radius: 18px;
        background-color: ${theme.colors.blue};
        transition: 0.3s ease;
        border: 0;
        cursor: pointer;

        &:hover {
          background-color: ${theme.colors.blueDark};
        }
      }
    }

    ul {
      margin-top: 30px;
      height: calc(100% - 80px);
      overflow-y: scroll;
      padding-right: 12px;
      display: flex;
      flex-direction: column;
    }
  `}
`;
