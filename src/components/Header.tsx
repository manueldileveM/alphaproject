import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import { useEffect, useState } from 'react'

import { themeColors } from '../libreria/MainLibrary.tsx'
import Menu from '../widget/Menu.tsx'
import ThemeToggle from '../widget/ThemeToggle.tsx'

export default function Header() {
  const homeBar = [
    { nome: 'Home', goTo: 'home' },
    { nome: 'About', goTo: 'specials' },
    { nome: 'Skills', goTo: 'skills' },
    { nome: 'Experience', goTo: 'experience' },
    { nome: 'Certifications', goTo: 'certifications' },
    { nome: 'Projects', goTo: 'projects' },
    { nome: 'Contacts', goTo: 'contact' }
  ]

  const [active, setActive] = useState<number | null>(null)

  useEffect(() => {
    const sections = homeBar
      .map((item, index) => ({
        element: document.getElementById(item.goTo),
        index
      }))
      .filter(
        (section): section is { element: HTMLElement; index: number } =>
          section.element !== null
      )

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        if (visibleSections.length > 0) {
          const visibleSection = sections.find(
            (section) => section.element === visibleSections[0].target
          )

          if (visibleSection) {
            setActive(visibleSection.index)
          }
        }
      },
      {
        rootMargin: '-20% 0px -65% 0px',
        threshold: 0
      }
    )

    sections.forEach(({ element }) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  const [menuOpen, setMenuOpen] = useState(false)

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const handleNavigation = (goTo: string, index: number) => {
    document.getElementById(goTo)?.scrollIntoView({
      behavior: 'smooth'
    })

    setActive(index)
    setMenuOpen(false)
  }

  return (
    <Box
      id="header"
      sx={{
        width: '100%',
        minHeight: '72px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1000,
        boxSizing: 'border-box',
        px: { xs: 2, md: 2 },
        backgroundColor: themeColors.header,
        borderBottom: `1.5px solid ${themeColors.border}`
      }}
    >
      {/* NOME */}
      <Typography
        sx={{
          fontSize: { xs: '35px', sm: '40px', md: '56px' },
          lineHeight: 1,
          fontWeight: 'bold',
          color: themeColors.text,
          flexShrink: 0
        }}
      >
        MANUEL.
      </Typography>

      {/* NAVIGAZIONE DESKTOP */}
      {!isMobile && (
        <Box
          component="nav"
          aria-label="Navigazione principale"
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2
          }}
        >
          {homeBar.map((item, index) => (
            <Typography
              key={item.nome}
              component="button"
              onClick={() => handleNavigation(item.goTo, index)}
              sx={{
                border: 0,
                padding: 0,
                background: 'transparent',
                fontFamily: 'inherit',
                fontSize: { md: '15px', lg: '18px' },
                lineHeight: 1.4,
                fontWeight: 'bold',
                whiteSpace: 'nowrap',
                color:
                  active === index
                    ? themeColors.primary
                    : themeColors.textSecondary,
                cursor: 'pointer',
                '&:hover': {
                  color: themeColors.primary
                }
              }}
            >
              {item.nome}
            </Typography>
          ))}
        </Box>
      )}

      {/* PULSANTI A DESTRA */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          flexShrink: 0
        }}
      >
        <ThemeToggle />

        {isMobile && (
          <Menu
            isOpen={menuOpen}
            onToggle={() => setMenuOpen((current) => !current)}
          />
        )}
      </Box>

      {/* MENU A TENDINA MOBILE */}
      {isMobile && menuOpen && (
        <Box
          component="nav"
          aria-label="Navigazione mobile"
          sx={{
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '100%',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            p: 2,
            backgroundColor: themeColors.header,
            borderBottom: `1.5px solid ${themeColors.border}`,
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.12)'
          }}
        >
          {homeBar.map((item, index) => (
            <Typography
              key={item.nome}
              component="button"
              onClick={() => handleNavigation(item.goTo, index)}
              sx={{
                width: '100%',
                border: 0,
                borderRadius: '8px',
                padding: '12px',
                backgroundColor: 'transparent',
                fontFamily: 'inherit',
                fontSize: '16px',
                fontWeight: 'bold',
                textAlign: 'left',
                color:
                  active === index
                    ? themeColors.primary
                    : themeColors.textSecondary,
                cursor: 'pointer',
                '&:hover': {
                  color: themeColors.primary,
                  backgroundColor: themeColors.cardHover
                }
              }}
            >
              {item.nome}
            </Typography>
          ))}
        </Box>
      )}
    </Box>
  )
}
