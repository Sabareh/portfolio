import dynamic from 'next/dynamic'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { RoughNotation } from 'react-rough-notation'
import { ButtonPrimary } from '../components/ButtonPrimary'
import Pronunciation from '../components/Pronunciation'
import Toast from '../components/Toast'
import Toolbox from '../components/Toolbox'
import Base from '../layouts/Base'
import stripHtml from '../lib/strip-html'
import copyBioIcon from '../public/static/icons/copy-bio.json'
import downloadIcon from '../public/static/icons/download.json'
import { styled } from '../stitches.config'

const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

export async function getStaticProps() {
  const meta = {
    title: 'About // Victor Sabare',
    description:
      "Victor Sabare is a results-driven Data Engineer with 1+ YoE passionate about architecting scalable big data solutions across AWS, Azure, and Kubernetes. With expertise in SQL, Python, and distributed frameworks like Spark and Kafka, he specializes in high-performance ETL pipelines and real-time data processing. Victor led the migration of the AppsFlyer data pipeline to a DataLocker-based architecture, reducing latency by 95% and saving $1.1M in operational costs. He has successfully undertaken digital transformation projects and led multiple migrations from Dev to Prod. Victor is committed to delivering production-ready, impactful code that drives business value.",
    tagline: 'Build. Code. Deliver.',
    image: '/static/images/about-bw.jpg',
    primaryColor: 'pink',
    secondaryColor: 'purple',
  }

  return { props: meta }
}

function About(props) {
  const { title, description, image } = props
  const [toastTitle, setToastTitle] = React.useState('')
  const [toastDescription, setToastDescription] = React.useState('')
  const [showToast, setShowToast] = React.useState(false)
  const copyBioRef = React.useRef()
  const downloadRef = React.useRef()

  const renderIntro = () => {
    return (
      <Container>
        <Section>
          <Image
            alt="Victor Sabare"
            src="/static/images/avatar.jpeg"
            className="avatar"
            width="336"
            height="336"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAP0lEQVQImQE0AMv/AFBQUJKSkqmpqaOjowCurq7v7+/Jycm5ubkA////jIyMn5+fg4ODADAwMD09PWlpaQAAAApRGnEHblMWAAAAAElFTkSuQmCC"
            priority
          />
        </Section>
        <Section>
          <Paragraph
            css={{
              marginTop: '16px',
              '@bp2': { marginTop: '-6px' },
            }}
          >
            <strong>Hey, I'm Victor Sabare.</strong> I once bricked a Radio Juke Box at 13 while jailbreaking
            it—igniting my lifelong obsession with tech. Now, I transform raw
            data into meaningful impact.
          </Paragraph>
          <Paragraph>
            I love{' '}
            <strong>
              <a href="https://www.sabare.tech/contact" target="_blank">
                connecting
              </a>
            </strong>{' '}
            with fellow nerds over the weekend in {' '}<strong>Nairobi, Kenya</strong>. When I'm not working, you'll
            find me{' '}
            <strong>
              <a href="https://x.com/victorsabare_" target="_blank">
                tweeting
              </a>
            </strong>
            , losing chess games, playing God of War on PS5, and binge-watching
            fascinating video essays.
          </Paragraph>
          <Paragraph>
            <strong>
              <RoughNotation
                animationDelay="1000"
                animationDuration="3000"
                type="highlight"
                iterations={2}
                strokeWidth={3}
                multiline={true}
                color="#E50914"
                show={true}
              >
                This summer, you'll hopefully find me at good job.
              </RoughNotation>
            </strong>
          </Paragraph>
        </Section>
      </Container>
    )
  }

  const renderBio = () => {
    const btnStyle = {
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
    }
    const iconStyle = { width: 24, height: 24, marginRight: 8 }

    return (
      <div>
        <p>
          This is my professional bio summarizing my strengths and fields of
          interests.
        </p>
        <blockquote>
          <p>{description}</p>
        </blockquote>
        <ButtonsContainer>
          <ButtonPrimary
            as="button"
            style={btnStyle}
            onClick={copyBio}
            onMouseEnter={() => copyBioRef.current?.play()}
            onMouseLeave={() => copyBioRef.current?.stop()}
          >
            <Lottie
              lottieRef={copyBioRef}
              style={iconStyle}
              animationData={copyBioIcon}
              loop={false}
              autoplay={false}
            />
            Copy Bio
          </ButtonPrimary>
          <span style={{ margin: '0 20px 0 10px' }}>•</span>
          <ButtonPrimary
            as="a"
            href="/static/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={btnStyle}
            onClick={downloadResume}
            onMouseEnter={() => downloadRef.current?.play()}
            onMouseLeave={() => downloadRef.current?.stop()}
          >
            <Lottie
              lottieRef={downloadRef}
              style={iconStyle}
              animationData={downloadIcon}
              loop={false}
              autoplay={false}
            />
            Download Resume
          </ButtonPrimary>
        </ButtonsContainer>
      </div>
    )
  }

  const downloadResume = () => {
    setToastTitle('Downloading...')
    setToastDescription('You can now hire me :)')
    setShowToast(true)
  }

  const copyBio = e => {
    e.preventDefault()
    navigator.clipboard.writeText(description)

    setToastTitle('Copied :D')
    setToastDescription('You can now paste it anywhere.')
    setShowToast(true)
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={stripHtml(description)} name="description" />
        <meta content={stripHtml(description)} property="og:description" />
        <meta content="https://sabare.tech/about" property="og:url" />
        <meta content={`https://sabare.tech${image}`} property="og:image" />
      </Head>

      {renderIntro()}

      <h2>Bio</h2>
      {renderBio()}

      {/* Education */}
      <Section>
        <h2>Education</h2>
        <strong>Jomo Kenyatta University of Agriculture and Technology</strong>, Karen, Kenya
        <ul>
          <li>BS in Data Science and Analytics</li>
          <li>Relevant Coursework: Machine Learning I & II, Probability & Statistics</li>
          <li>Activities: Microsoft Learn Student Ambassador, Kenya Model United Nations</li>
        </ul>
        <strong>Alliance High School</strong>, Kikuyu, Kenya
        <ul>
          <li>Activities & Societies: MIT Launch X Club, Junior Economic Club, Chess Club, World Scholars Club</li>
        </ul>
      </Section>

      {/* Certifications */}
      <Section>
        <h2>Certifications</h2>
        <ul>
          <li>Associate Big Data Engineer (ABDE™) – Data Science Council of America</li>
          <li>Data Engineer Associate – DataCamp</li>
          <li>Data Scientist Associate – DataCamp</li>
          <li>Data Analyst Associate – DataCamp</li>
        </ul>
      </Section>

      <Toast
        title={toastTitle}
        description={toastDescription}
        isSuccess={true}
        showToast={showToast}
        setShowToast={setShowToast}
      />

      <Toolbox />
    </>
  )
}

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  '@bp2': { flexDirection: 'row' },
})

const Paragraph = styled('p', {
  '@bp2': { margin: '15px 0' },
})

const ButtonsContainer = styled('p', {
  display: 'flex',
  alignItems: 'center',
})

const Section = styled('div', {
  marginTop: '0px',
  width: 'auto',
  '@bp2': { width: '48%' },
})

About.Layout = Base

export default About
