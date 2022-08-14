import { css } from 'styled-components'

import { colors } from './colors'
import { mq } from './mq'

export const font = {
  base: '"Lato", sans-serif',
  headings: '"Lato", sans-serif',
}

const allHeadingsStyle = css`
  font-family: ${font.headings};
  font-weight: inherit;
`

const allParagraphsStyle = css`
  color: ${colors.text.base};
`
export const typography = {
  heading: {
    all: allHeadingsStyle,
    h1: css`
      ${allHeadingsStyle}
      font-size: 3rem;
      ${mq.medium} {
        font-size: 4.5rem;
      }
    `,
    h2: css`
      ${allHeadingsStyle}
      font-size: 2.4rem;
      ${mq.medium} {
        font-size: 2.8rem;
      }
    `,
    h3: css`
      ${allHeadingsStyle}
      font-size: 2rem;
      ${mq.medium} {
        font-size: 2.2rem;
      }
    `,
  },
  paragraph: {
    small: css`
      ${allParagraphsStyle}
      font-size: 1.4rem;
    `,
    normal: css`
      ${allParagraphsStyle}
      font-size: 1.6rem;
    `,
    large: css`
      ${allParagraphsStyle}
      font-size: 1.8rem;
    `,
  },
}
