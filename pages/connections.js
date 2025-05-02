import { AnimateSharedLayout, motion } from 'framer-motion'
import Head from 'next/head'
import React, { useState } from 'react'
import ConnectionCard from '../components/connections/ConnectionCard'
import ConnectionModal from '../components/connections/ConnectionModal'
import Base from '../layouts/Base'
import stripHtml from '../lib/strip-html'
import { styled } from '../stitches.config'
import connections from '../data/connections'  // ← import static data

export function getMeta() {
  return {
    title: 'Connections // Victor Sabare',
    description:
      'A curated list of interesting people I’ve met or hope to meet. If you’d like to connect or collaborate, feel free to reach out to me.',
    tagline: 'People. Inspiration. Networking.',
    image: '/static/images/connections-bw.jpg',
    primaryColor: 'purple',
    secondaryColor: 'cyan',
  }
}

export async function getStaticProps() {
  const meta = getMeta()
  return {
    props: {
      title: meta.title,
      tagline: meta.tagline,
      image: meta.image,
      primaryColor: meta.primaryColor,
      secondaryColor: meta.secondaryColor,
      connections,             // ← use static array
    },
    revalidate: 60 * 60,
  }
}

function Connections({ title, tagline, image, primaryColor, secondaryColor, connections }) {
  const [selectedPerson, setSelectedPerson] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const filteredConnections = connections.filter(
    person =>
      person.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      person.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      person.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleCardClick = person => {
    setSelectedPerson(person)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedPerson(null)
  }

  const description = `A curated list of <strong>interesting people</strong> I’ve met or hope to meet, loaded from a static data file. Feel free to reach out anytime.`

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={stripHtml(description)} name="description" />
        <meta content={stripHtml(description)} property="og:description" />
        <meta content="https://sabare.tech/connections" property="og:url" />
        <meta content={`https://sabare.tech${image}`} property="og:image" />
      </Head>

      <AnimateSharedLayout>
        <p dangerouslySetInnerHTML={{ __html: description }} />

        <h2>Connections</h2>
        <SearchInput
          type="text"
          placeholder="Search by company, title, or position..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <ConnectionsGrid>
          {filteredConnections.length > 0 ? (
            filteredConnections.map((person, idx) => (
              <motion.div
                key={person.name + idx}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: idx * 0.08,
                  duration: 0.5,
                  type: 'spring',
                  stiffness: 60,
                }}
              >
                <ConnectionCard
                  person={person}
                  onClick={() => handleCardClick(person)}
                />
              </motion.div>
            ))
          ) : (
            <NoResults>No results found.</NoResults>
          )}
        </ConnectionsGrid>
      </AnimateSharedLayout>
      <ConnectionModal
        person={selectedPerson}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  )
}

Connections.Layout = Base

export default Connections

const ConnectionsGrid = styled('div', {
  display: 'grid',
  margin: '10px 0 0 -20px',
  gridTemplateColumns: 'repeat(4, 1fr)',

  '@media (max-width: 600px)': {
    gridTemplateColumns: 'repeat(2, 1fr)',
    margin: '10px 0 0 0',
  },
})

const SearchInput = styled('input', {
  width: '100%',
  maxWidth: '100%',
  boxSizing: 'border-box',
  padding: '12px 16px',
  margin: '20px 0',
  border: '1px solid $secondary',
  borderRadius: '$borderRadius',
  backgroundColor: '$background',
  color: '$primary',
  fontSize: '16px',
  '&::placeholder': {
    color: '$secondary',
  },
  '&:focus': {
    outline: 'none',
    borderColor: '$cyan',
  },
  '@media (max-width: 600px)': {
    fontSize: '15px',
    padding: '10px 8px',
  },
})

const NoResults = styled('div', {
  color: '$secondary',
  fontSize: '18px',
  textAlign: 'center',
  marginTop: '40px',
})
