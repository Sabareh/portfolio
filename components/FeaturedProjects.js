import { styled } from '../stitches.config'

export const FeaturedProjects = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  gap: '2rem',
  marginTop: '2rem',

  '@bp2': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  '@bp3': {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
})
