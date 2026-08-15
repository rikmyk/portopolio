import { AppShell, Container } from '@mantine/core';
import { useRouter } from 'next/router';
import { FC, ReactNode } from 'react';

import { headerItems } from '@/data/headerItem';
import useBreakpoint from '@/hooks/isSm';

import ScrollToTop from '../ScrollToTop';
import MyFooter from './Footer';
import MyHeader from './Header';
import MyNavbar from './Navbar';

interface Props {
  children: ReactNode;
}

// Floating sharp 3D glass crack shards component (Slow 360° Outer Orbit Ring)
const GlassShards = () => (
  <div className='glass-shards-orbit-wrapper'>
    <div className='glass-shard shard-1' />
    <div className='glass-shard shard-2' />
    <div className='glass-shard shard-3' />
    <div className='glass-shard shard-4' />
    <div className='glass-shard shard-5' />
    <div className='glass-shard shard-6' />
    <div className='glass-shard shard-7' />
    <div className='glass-shard shard-8' />
  </div>
);

// Continuous random shooting stars meteor shower component
const ShootingStars = () => (
  <div className='shooting-star-container'>
    <div className='shooting-star star-1' />
    <div className='shooting-star star-2' />
    <div className='shooting-star star-3' />
    <div className='shooting-star star-4' />
    <div className='shooting-star star-5' />
    <div className='shooting-star star-6' />
    <div className='shooting-star star-7' />
  </div>
);

// Cosmic starfield with horizontal nebula cloud matching Stitch screen
const CosmicBackground = () => (
  <div
    style={{
      position: 'fixed',
      inset: 0,
      zIndex: 0,
      overflow: 'hidden',
      pointerEvents: 'none',
      background:
        'radial-gradient(ellipse 100% 50% at 50% 50%, rgba(192, 38, 211, 0.22) 0%, rgba(124, 58, 237, 0.18) 35%, transparent 75%),' +
        'radial-gradient(circle 450px at 75% 45%, rgba(168, 85, 247, 0.28) 0%, rgba(236, 72, 153, 0.12) 60%, transparent 80%),' +
        'radial-gradient(circle 500px at 20% 55%, rgba(99, 102, 241, 0.2) 0%, transparent 70%),' +
        '#050412',
    }}
  >
    {/* Stars layer */}
    <div
      style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: [
          'radial-gradient(1px 1px at 8% 12%, rgba(255,255,255,0.95) 0%, transparent 100%)',
          'radial-gradient(1.5px 1.5px at 18% 38%, rgba(255,255,255,0.8) 0%, transparent 100%)',
          'radial-gradient(2px 2px at 32% 15%, rgba(255,255,255,0.9) 0%, transparent 100%)',
          'radial-gradient(1px 1px at 45% 58%, rgba(255,255,255,0.75) 0%, transparent 100%)',
          'radial-gradient(1px 1px at 62% 22%, rgba(255,255,255,0.95) 0%, transparent 100%)',
          'radial-gradient(2px 2px at 78% 48%, rgba(255,255,255,0.85) 0%, transparent 100%)',
          'radial-gradient(1px 1px at 88% 75%, rgba(255,255,255,0.8) 0%, transparent 100%)',
          'radial-gradient(1.5px 1.5px at 12% 78%, rgba(255,255,255,0.7) 0%, transparent 100%)',
          'radial-gradient(2px 2px at 28% 88%, rgba(255,255,255,0.9) 0%, transparent 100%)',
          'radial-gradient(1px 1px at 58% 82%, rgba(255,255,255,0.65) 0%, transparent 100%)',
          'radial-gradient(1px 1px at 4% 48%, rgba(255,255,255,0.8) 0%, transparent 100%)',
          'radial-gradient(2.5px 2.5px at 82% 12%, rgba(255,255,255,0.95) 0%, transparent 100%)',
          'radial-gradient(1px 1px at 48% 42%, rgba(255,255,255,0.6) 0%, transparent 100%)',
          'radial-gradient(1.5px 1.5px at 70% 70%, rgba(255,255,255,0.85) 0%, transparent 100%)',
          'radial-gradient(2px 2px at 22% 24%, rgba(220,200,255,0.9) 0%, transparent 100%)',
          'radial-gradient(1px 1px at 94% 38%, rgba(255,255,255,0.7) 0%, transparent 100%)',
          'radial-gradient(1px 1px at 2% 92%, rgba(255,255,255,0.8) 0%, transparent 100%)',
          'radial-gradient(2.5px 2.5px at 52% 4%, rgba(255,255,255,0.95) 0%, transparent 100%)',
          'radial-gradient(1px 1px at 68% 32%, rgba(255,255,255,0.6) 0%, transparent 100%)',
          'radial-gradient(1.5px 1.5px at 38% 68%, rgba(220,180,255,0.85) 0%, transparent 100%)',
        ].join(','),
        animation: 'twinkle 8s ease-in-out infinite alternate',
      }}
    />
    {/* Shooting Stars Meteor Shower Layer */}
    <ShootingStars />

    {/* Glass shards */}
    <GlassShards />
  </div>
);

// Social sidebar icons matching stitch_screen.png
const SocialSidebar = () => (
  <div className='social-sidebar'>
    <a
      href='https://github.com/rcomykl'
      target='_blank'
      rel='noopener noreferrer'
      title='GitHub'
      className='social-icon-btn icon-github'
    >
      <svg viewBox='0 0 24 24' width='18' height='18' fill='currentColor'>
        <path d='M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z'/>
      </svg>
    </a>
    <a
      href='https://linkedin.com/in/rcomykl'
      target='_blank'
      rel='noopener noreferrer'
      title='LinkedIn'
      className='social-icon-btn icon-linkedin'
    >
      <svg viewBox='0 0 24 24' width='16' height='16' fill='currentColor'>
        <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/>
      </svg>
    </a>
    <a
      href='https://www.instagram.com/kowri66/'
      target='_blank'
      rel='noopener noreferrer'
      title='Instagram'
      className='social-icon-btn icon-instagram'
    >
      <svg viewBox='0 0 24 24' width='18' height='18' fill='currentColor'>
        <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'/>
      </svg>
    </a>
  </div>
);

const MyAppShell: FC<Props> = ({ children }) => {
  const { isSm } = useBreakpoint();
  const router = useRouter();

  if (!headerItems.map((item) => item.link).includes(router.asPath))
    return <>{children}</>;

  return (
    <>
      {/* Cosmic background fixed layer */}
      <CosmicBackground />
      {/* Social sidebar */}
      <SocialSidebar />

      <AppShell
        styles={{
          main: {
            background: 'transparent',
            position: 'relative',
            zIndex: 1,
            minHeight: '100vh',
            paddingTop: 70,
          },
          root: {
            background: 'transparent',
          },
        }}
        navbarOffsetBreakpoint='sm'
        navbar={isSm ? <MyNavbar /> : undefined}
        footer={<MyFooter />}
        header={<MyHeader />}
      >
        <Container>{children}</Container>
        <ScrollToTop />
      </AppShell>
    </>
  );
};

export default MyAppShell;
