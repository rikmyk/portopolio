import {
  Box,
  Burger,
  Button,
  Container,
  Group,
  Header,
  MediaQuery,
  Text,
} from '@mantine/core';
import { useAtom } from 'jotai';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { headerItems } from '@/data/headerItem';
import { navbarAtom } from '@/store/navbar';

const MyHeader = () => {
  const [opened, setOpened] = useAtom(navbarAtom);
  const router = useRouter();
  const path = router.asPath;

  return (
    <Header
      height={70}
      p='md'
      sx={{
        background: 'transparent !important',
        borderBottom: 'none !important',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
      }}
    >
      <Container
        style={{
          display: 'flex',
          alignItems: 'center',
          height: '100%',
          justifyContent: 'space-between',
        }}
      >
        {/* Left space for balance */}
        <Box sx={{ width: 40 }}>
          <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
            <Burger
              opened={opened}
              onClick={() => setOpened((o) => !o)}
              size='sm'
              color='rgba(255,255,255,0.8)'
            />
          </MediaQuery>
        </Box>

        {/* Desktop Centered Nav Dock */}
        <MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
          <Box
            sx={{
              background: 'rgba(255, 255, 255, 0.04)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: 9999,
              padding: '4px 8px',
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
            }}
          >
            {headerItems.map((item, idx) => {
              const isActive = item.link === path;
              return (
                <Link href={item.link} key={idx} scroll={false} style={{ textDecoration: 'none' }}>
                  <Box
                    sx={{
                      position: 'relative',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                    <Button
                      variant='subtle'
                      size='sm'
                      radius='xl'
                      sx={{
                        color: isActive ? '#ffffff' : 'rgba(255,255,255,0.7)',
                        fontWeight: 600,
                        fontSize: 14,
                        padding: '6px 20px',
                        background: isActive
                          ? 'linear-gradient(135deg, rgba(31, 78, 140, 0.6) 0%, rgba(45, 212, 191, 0.35) 100%)'
                          : 'transparent',
                        border: isActive
                          ? '1px solid rgba(45, 212, 191, 0.6)'
                          : '1px solid transparent',
                        boxShadow: isActive ? '0 0 15px rgba(45, 212, 191, 0.4)' : 'none',
                        transition: 'all 0.25s ease',
                        '&:hover': {
                          background: isActive
                            ? 'linear-gradient(135deg, rgba(31, 78, 140, 0.75) 0%, rgba(45, 212, 191, 0.45) 100%)'
                            : 'rgba(255, 255, 255, 0.08)',
                          color: '#ffffff',
                        },
                      }}
                    >
                      {item.label}
                    </Button>
                    {isActive && (
                      <Box
                        sx={{
                          position: 'absolute',
                          bottom: 2,
                          width: 24,
                          height: 2,
                          borderRadius: 2,
                          background: '#2dd4bf',
                          boxShadow: '0 0 8px #2dd4bf',
                        }}
                      />
                    )}
                  </Box>
                </Link>
              );
            })}
          </Box>
        </MediaQuery>

        {/* Right space for balance */}
        <Box sx={{ width: 40 }} />
      </Container>
    </Header>
  );
};

export default MyHeader;


