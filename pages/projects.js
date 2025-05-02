import { styled } from '../stitches.config'
import Layout from '../components/Layout'
import FeaturedProject from '../components/FeaturedProject'
import { featuredProjects } from '../data/featuredProjects'

export default function Projects() {
  return (
    <Layout title="Projects">
      <h1>Featured Projects</h1>
      
      <ProjectsContainer>
        {featuredProjects.map((project, i) => (
          <FeaturedProject key={i} project={project} index={i} />
        ))}
      </ProjectsContainer>
    </Layout>
  )
}

const ProjectsContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  gap: '2rem',
  marginTop: '2rem',
  
  '@bp2': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  
  '@bp3': {
    gridTemplateColumns: 'repeat(3, 1fr)',
  }
})
