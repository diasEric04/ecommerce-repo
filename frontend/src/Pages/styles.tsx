import styled, { css } from "styled-components";

export const Heading = styled.h1``;

export const Req = styled.span``;
export const Input = styled.input``;
export const Label = styled.label``;
export const InputGroup = styled.div``;
export const InputsWrapper = styled.div``;

export const Form = styled.form`
  ${({theme}) => css`
    padding: ${theme.spacings.large}px;;
    margin: 0 auto;
    background-color: ${theme.colors.dark_gray};
    border-radius: 10px;
    color: ${theme.colors.white};

    width: 100vw;

    @media (min-width: 320px) {
      & {
        width: 90vw;
      }
    }

    @media (min-width: 481px) {
      & {
        width: 80vw;
      }
    }

    @media (min-width: 769px) {
      & {
        margin: 50px auto;
        width: 70vw;
      }
    }

    @media (min-width: 1025px) {
      & {
        width: 50vw;
      }
    }

    ${Heading} {
      text-align: center;
      color: ${theme.colors.white};
    }

    ${InputsWrapper} {
      display: flex;
      flex-direction: column;
      margin-left: ${theme.spacings.large}px;
      align-content: center;
      align-items: center;
      ${InputGroup} {
        padding: ${theme.spacings.medium}px 0 ${theme.spacings.medium}px 0;
        width: 90%;

        @media (min-width: 769px) {
          & {
            width: 70%;
          }
        }

        @media (min-width: 1025px) {
          & {
            width: 60%;
          }
        }
        ${Label} {
          color: ${theme.colors.darkest_white};
          font-size: ${theme.font_sizes.big}px;

          &:has(> ${Req}){
            font-weight: 900;
          }
          ${Req} {
            color: ${theme.colors.light_red}
          }
        }
        ${Input}:not([type='submit']) {
          height: 30px;
          width: 100%;
          border: none;
          border-bottom: 1px solid ${theme.colors.light_red};
          display: block;
          font-size: ${theme.font_sizes.medium}px;
          background: ${theme.colors.dark_gray};
          color: ${theme.colors.white};
          transition: border .5s;
          &:hover {
            border-bottom: 1px solid ${theme.colors.darkest_red};
          }
        }
        ${Input}[type='submit'] {
          height: 50px;
          font-size: ${theme.font_sizes.large}px;
          color: ${theme.colors.white};
          background-color: ${theme.colors.dark};
          border: 3px solid ${theme.colors.dark};
          border-radius: 5px;
          margin: ${theme.spacings.large}px 10% ${theme.spacings.medium}px 10%;
          width: 80%;
          opacity: 0.7;
          transition: background-color .5s, border .5s, color .5s, opacity .2s;
          &:hover {
            border: 3px solid ${theme.colors.dark};
            background-color: ${theme.colors.dark_gray};
            opacity: 1;
          }
        }
      }
    }
  `}
`;
