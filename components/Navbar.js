import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'
import { useKBar } from 'kbar'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { isMobile } from 'react-device-detect'
import { styled } from '../stitches.config'
import { useTheme } from '../context/ThemeContext'

export default function Navbar() {
  const router = useRouter()
  const pages = [
    'About',
    'Articles',
    'Projects',
    'Work',
    // 'Podcasts',
    // 'Investing',
    'Uses',
    'Tweets',
    'Connections',
    'Contact',
  ]
  const [hovered, setHovered] = useState('')
  const { query } = useKBar()
  const [menuOpen, setMenuOpen] = useState(false)
  // Use the theme context instead of local state
  const { theme, toggleTheme } = useTheme()

  return (
    <AnimateSharedLayout>
      <Header>
        <Link href="/" passHref>
          <ButtonLogo as="a">VS</ButtonLogo>
        </Link>

        {!isMobile && (
          <Nav>
            <List>
              {pages.map(page => {
                const path = `/${page.toLowerCase()}`
                const isHovered = hovered === page
                return (
                  <li key={page}>
                    <Link href={path} passHref>
                      <DesktopAnchor>
                        <NavContainer
                          onHoverStart={() => setHovered(page)}
                          onHoverEnd={() => setHovered('')}
                          css={
                            router.pathname === path
                              ? {
                                  color: '$primary',
                                  '&::after': { opacity: 1 },
                                }
                              : ''
                          }
                        >
                          {isHovered && (
                            <NavHovered
                              layoutId="nav"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                            />
                          )}
                          {page}
                        </NavContainer>
                      </DesktopAnchor>
                    </Link>
                  </li>
                )
              })}
            </List>
          </Nav>
        )}

        <Aside>
          {/* Theme toggle using the context's toggleTheme function */}
          <ButtonHeader
            as="button"
            aria-label="Toggle theme"
            onClick={toggleTheme}
            css={{ padding: '0 8px' }}
          >
            <Icon className={theme === 'light' ? 'ri-moon-line' : 'ri-sun-line'} />
          </ButtonHeader>

          {isMobile ? (
            <ButtonHeader
              as="button"
              type="button"
              aria-label="Menu"
              onClick={() => setMenuOpen(o => !o)}
            >
              <Icon className={menuOpen ? 'ri-close-line' : 'ri-menu-line'} />
            </ButtonHeader>
          ) : (
            <ButtonHeader
              as="button"
              type="button"
              aria-label="Command"
              onClick={query.toggle}
              css={{ padding: '0 8px' }}
            >
              <Icon className="ri-command-line" />
            </ButtonHeader>
          )}
        </Aside>
      </Header>

      <AnimatePresence>
        {isMobile && menuOpen && (
          <MobileMenu
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <CloseButton
              type="button"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <Icon className="ri-close-line" />
            </CloseButton>
            <MobileList
              as={motion.ul}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1 } },
              }}
            >
              {pages.map(page => (
                <MobileItem
                  key={page}
                  as={motion.li}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 0,
                      transition: { duration: 0.1 },
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.1 },
                    },
                  }}
                  onClick={() => setMenuOpen(false)}
                >
                  <Link href={`/${page.toLowerCase()}`} passHref>
                    <MobileAnchor>{page}</MobileAnchor>
                  </Link>
                </MobileItem>
              ))}
            </MobileList>
          </MobileMenu>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  )
}

const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  color: 'white',
  fontSize: '12px',
  minHeight: '59px',
  width: '100%',
  flexWrap: 'wrap',
  position: 'absolute',
  top: '0',
  zIndex: 3,
  marginTop: '13px',
  '@bp2': { marginTop: '0' },
})

const List = styled('ul', {
  margin: '0',
  padding: '0',
  listStyle: 'none',
  display: 'inline-flex',
  position: 'relative',
  top: '5px',
  '@bp1': { justifyContent: 'space-around' },
})

const CloseButton = styled('button', {
  position: 'absolute',
  top: '16px',
  right: '16px',
  appearance: 'none',
  background: 'transparent',
  border: 'none',
  color: 'white',
  cursor: 'pointer',
  fontSize: '24px',
})

const ButtonHeader = styled('div', {
  appearance: 'none',
  background: 'transparent',
  border: 'none',
  borderRadius: '$borderRadius',
  color: 'white',
  cursor: 'pointer',
  cursor: 'pointer',
  height: '34px',
  padding: '0 10px',
  transition: 'background $duration ease-in-out',
  '&:hover': { background: '$hover' },
})

const Icon = styled('i', {
  fontSize: '24px',
  lineHeight: '32px',
})

const ButtonLogo = styled(ButtonHeader, {
  fontWeight: 700,
  fontSize: '32px',
  textDecoration: 'none',
  marginTop: '5px',
  marginLeft: '12px',
  fontFamily: '$heading',
})

const Nav = styled('nav', {
  textAlign: 'center',
  flex: 1,
  order: 2,
  flexBasis: '100%',
  '@bp2': { order: 0, flexBasis: 'initial' },
  '@bp3': { overflowX: 'scroll', overflowY: 'hidden' },
})

const Aside = styled('div', {
  display: 'flex',
  alignItems: 'center',
  paddingRight: '12px',
  marginLeft: 'auto',
})

const DesktopAnchor = styled('a', {
  border: 0,
  position: 'relative',
  '&:hover, &:focus': { opacity: 1 },
})

const MobileAnchor = styled('a', {
  color: '$primary',
  fontSize: '24px',
  textDecoration: 'none',
  textTransform: 'uppercase',
  letterSpacing: '2px',
})

const NavContainer = styled(motion.span, {
  color: '$secondary',
  cursor: 'pointer',
  display: 'inline-block',
  fontSize: '12px',
  fontWeight: 500,
  letterSpacing: '1.2px',
  padding: '20px',
  textDecoration: 'none',
  textTransform: 'uppercase',
  transition: 'color $duration ease-in-out',
  '&:hover': {
    color: '$primary',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    margin: '0px auto',
    top: '18px',
    left: '0px',
    right: '0px',
    height: '1px',
    width: '20px',
    background: 'rgb(255, 255, 255)',
    opacity: 0,
    transition: 'opacity $duration ease-in-out',
  },
})

const NavHovered = styled(motion.span, {
  position: 'absolute',
  top: '-15px',
  left: '0',
  right: '0',
  background: '$hover',
  padding: 20,
  borderRadius: '$borderRadius',
  zIndex: -1,
})

const MobileMenu = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100vh',
  backdropFilter: 'blur(8px)',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 20,
})

const MobileList = styled('ul', {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  textAlign: 'center',
})

const MobileItem = styled('li', {
  marginBottom: '24px',
})
