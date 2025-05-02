import { styled } from '../stitches.config'
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

export default function FeaturedProject(props) {
  const { project } = props
  const iconRef = useRef()
  const [iconData, setIconData] = useState(null)
  
  // Safely load icon data
  const loadIconData = () => {
    try {
      // Use dynamic import instead of require
      import(`../public/static/icons/${project.icon}.json`)
        .then(module => {
          setIconData(module.default)
        })
        .catch(err => {
          console.warn(`Icon not found: ${project.icon}.json`)
        })
    } catch (error) {
      console.warn(`Could not load icon: ${project.icon}.json`)
    }
  }

  // Load icon data when component mounts
  useState(() => {
    if (typeof window !== 'undefined') {
      loadIconData()
    }
  }, [])

  return (
    <Project
      href={project.url}
      target="_blank"
      onMouseEnter={() => iconRef.current?.play()}
      onMouseLeave={() => iconRef.current?.stop()}
    >
      <Animation index={props.index}>
        {iconData && (
          <Lottie
            lottieRef={iconRef}
            style={{ width: 24, height: 24, marginBottom: 10 }}
            animationData={iconData}
            loop={false}
            autoplay={false}
          />
        )}
        {!iconData && (
          <IconPlaceholder />
        )}
        <Body>
          <Title>{project.title}</Title>
          <Description>{project.description}</Description>
          {project.stats && <Stats>{project.stats}</Stats>}
        </Body>
      </Animation>
    </Project>
  )
}

const IconPlaceholder = styled('div', {
  width: 24,
  height: 24,
  marginBottom: 10,
  backgroundColor: '$hover',
  borderRadius: '50%'
})

function Animation(props) {
  const [hovered, setHovered] = useState('')
  const isHovered = hovered === props.index

  return (
    <AnimContainer
      onHoverStart={() => setHovered(props.index)}
      onHoverEnd={() => setHovered('')}
    >
      {isHovered && (
        <AnimHovered
          layoutId="featuredProjects"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}

      {props.children}
    </AnimContainer>
  )
}

const Project = styled('a', {
  display: 'flex',
  transition: 'opacity $duration ease-in-out',
  border: '0',
  borderRadius: '$borderRadius',
  textDecoration: 'none',
  width: 'auto',
  '&:hover': { opacity: 1 },
  '@bp2': { width: 180 },
})

const Body = styled('div', {
  flex: '1 1 auto',
})

const Title = styled('p', {
  color: '$primary',
  margin: '0',
  fontSize: '18px',
})

const Description = styled('p', {
  margin: '0',
  color: '$secondary',
  lineHeight: '24px',
})

const Stats = styled('p', {
  margin: '5px 0 0',
  color: '$primary',
  textTransform: 'uppercase',
  display: 'inline-block',
  fontWeight: 500,
  letterSpacing: '1.2px',
  fontSize: '12px',
})

const AnimContainer = styled(motion.span, {
  position: 'relative',
  width: '100%',
  padding: '20px',
})

const AnimHovered = styled(motion.span, {
  position: 'absolute',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  background: '$hover',
  borderRadius: '$borderRadius',
  zIndex: -1,
})