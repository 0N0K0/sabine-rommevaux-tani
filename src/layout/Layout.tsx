import { ActionIcon, Affix, AppShell, Grid, Stack } from '@mantine/core';
import { Header } from './Header';
import { Footer } from './Footer';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import arrowUp from '../assets/icons/arrow-bend-left-up.svg';

export function Layout({ children }: { children: ReactNode }) {
  const headerContentRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    if (!headerContentRef.current) return;

    const observer = new ResizeObserver(([entry]) => {
      const height = entry.borderBoxSize?.[0]?.blockSize;

      if (height !== undefined) {
        setHeaderHeight(height);
      }
    });

    observer.observe(headerContentRef.current);

    return () => observer.disconnect();
  }, []);

  const footerContentRef = useRef<HTMLDivElement>(null);
  const [footerHeight, setFooterHeight] = useState(0);

  useEffect(() => {
    if (!footerContentRef.current) return;

    const observer = new ResizeObserver(([entry]) => {
      const height = entry.borderBoxSize?.[0]?.blockSize;

      if (height !== undefined) {
        setFooterHeight(height);
      }
    });

    observer.observe(footerContentRef.current);

    return () => observer.disconnect();
  }, []);

  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const useStaticMode = headerHeight + footerHeight >= windowHeight / 3;

  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    if (!useStaticMode) {
      setShowBackToTop(false);
      return;
    }

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [useStaticMode]);

  return (
    <AppShell
      mode={useStaticMode ? 'static' : 'fixed'}
      header={{ height: headerHeight, offset: useStaticMode ? false : true }}
      footer={{ height: footerHeight, offset: useStaticMode ? false : true }}
      padding="48px"
      styles={{
        root: {
          overflow: 'hidden',
        },
      }}
    >
      <AppShell.Header>
        <Stack
          ref={headerContentRef}
          pt={{
            base: '16px',
            sm: '32px',
          }}
          style={{
            gap: '32px',
          }}
        >
          <Header />
        </Stack>
      </AppShell.Header>
      <AppShell.Main
        px={{
          base: '16px',
          sm: '32px',
          md: '64px',
        }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '48px',
        }}
      >
        {children}
      </AppShell.Main>
      <AppShell.Footer>
        <Grid
          ref={footerContentRef}
          gap="sm"
          align="center"
          px={{ base: '16px', sm: '32px', md: '64px' }}
          py="16px"
        >
          <Footer />
        </Grid>
      </AppShell.Footer>
      {useStaticMode && showBackToTop && (
        <Affix position={{ bottom: 24, right: 24 }}>
          <ActionIcon
            size="lg"
            radius="xl"
            variant="filled"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              });
            }}
            aria-label="Retour en haut"
          >
            <img
              src={arrowUp}
              alt=""
              style={{
                width: 18,
                height: 18,
              }}
            />
          </ActionIcon>
        </Affix>
      )}
    </AppShell>
  );
}
