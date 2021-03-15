import styled, { css } from "styled-components";

export const Overlay = styled.div`
  background-color: rgba(242, 243, 245, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
`;

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    width: 100%;
    max-width: 400px;
    padding: 2rem 3rem;
    border-radius: 5px;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    text-align: center;
    position: relative;

    header {
      font-size: 1.25rem;
      font-weight: 600;
      text-align: center;
      margin: auto;
      color: ${theme.colors.text};
      background-size: contain;
      display: block;
    }

    input {
      min-height: 30px;
      min-width: 300px;
      width: 100%;
      background: #f1f3f4;
      border: 0;
      padding: 6px;
      border-radius: 5px;
      transition: 0.3s ease;
      color: ${theme.colors.greyDark};
      margin-bottom: 1rem;

      &:focus {
        background: ${theme.colors.white};
        box-shadow: 3px 3px 6px -1px rgb(0 0 0 / 50%);
      }
    }
    button {
      min-width: 100px;
      background: transparent;
      border: 0;
      margin: 0.5rem;
      border-radius: 35px !important;
      font-weight: bold;
      transition: 0.3s ease;

      &.secondary {
        background: ${theme.colors.grey};
        color: ${theme.colors.white};
        &:not(:disabled):hover {
          background: ${theme.colors.greyDark};
        }
      }

      &.primary {
        background: ${theme.colors.primary};
        color: ${theme.colors.white};

        &:disabled:hover {
          background: ${theme.colors.primary};
          color: ${theme.colors.white};
          cursor: not-allowed;
        }

        &:not(:disabled):hover {
          background: ${theme.colors.primaryDark};
        }
      }
    }
  `}
`;
