import styled, { css, DefaultTheme } from 'styled-components'
import { darken } from 'polished'

import { ButtonProps } from '.'

export type WrapperProps = {
  hasIcon: boolean
} & Pick<ButtonProps, 'size' | 'fullWidth' | 'minimal' | 'outline'>

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};

    &:focus {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }
  `,
  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};

    &:focus {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }
  `,
  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};

    &:focus {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  withIcon: (theme: DefaultTheme) => css`
    svg {
      width: 1.5rem;

      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
    &:focus {
      box-shadow: 0 0 0.5rem ${theme.colors.white};
    }
  `,
  minimal: (theme: DefaultTheme) => css`
    background: none;
    color: ${theme.colors.primary};

    &:hover {
      color: ${darken(0.1, theme.colors.primary)};
    }
    &:focus {
      box-shadow: 0 0 0.5rem ${theme.colors.white};
    }
  `,
  disabled: () => css`
    &:disabled {
      cursor: not-allowed;
      filter: saturate(30%);
    }
  `,
  outline: (theme: DefaultTheme) => css`
    background: none;
    color: ${theme.colors.white};
    border: 2px solid ${theme.colors.primary};
    padding: 14px 28px;

    &:hover {
      color: ${theme.colors.white};
      background: linear-gradient(180deg, #3cb371 0%, #32cd32 50%); // #e35565
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, fullWidth, hasIcon, minimal, outline, disabled }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(180deg, #3cb371 0%, #32cd32 50%); // #ff5f5f
    color: ${theme.colors.white};
    font-family: ${theme.font.family};
    border: 0;
    cursor: pointer;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    text-decoration: none;

    &:focus {
      box-shadow: 0 0 0 3px ${theme.colors.secondary};
    }

    &:hover {
      background: ${minimal
        ? 'none'
        : `linear-gradient(180deg, #90EE90 0%, #32cd32 50%)`};
    }

    ${!!size && wrapperModifiers[size](theme)};
    ${!!fullWidth && wrapperModifiers.fullWidth()};
    ${!!hasIcon && wrapperModifiers.withIcon(theme)};
    ${!!minimal && wrapperModifiers.minimal(theme)};
    ${!!outline && wrapperModifiers.outline(theme)};
    ${disabled && wrapperModifiers.disabled()};
  `}
`
