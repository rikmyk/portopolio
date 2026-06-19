import {
  Box,
  Burger,
  Button,
  Container,
  Group,
  Header,
  MediaQuery,
  useMantineTheme,
} from '@mantine/core';
import { useAtom } from 'jotai';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { headerItems } from '@/data/headerItem';
import { navbarAtom } from '@/store/navbar';

import SwitchToggle from '../ColorSchemeToggle';

const MyHeader = () => {
  const [opened, setOpened] = useAtom(navbarAtom);
  const theme = useMantineTheme();
  const router = useRouter();
  const path = router.asPath;
  const isDark = theme.colorScheme === 'dark';

  return (
    <Header
      height={70}
      p='md'
      sx={{
        background: isDark ? 'rgba(5, 5, 5, 0.65) !important' : 'rgba(255, 255, 255, 0.65) !important',
        backdropFilter: 'blur(16px) saturate(120%)',
        WebkitBackdropFilter: 'blur(16px) saturate(120%)',
        borderBottom: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'} !important`,
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
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
            <Burger
              opened={opened}
              onClick={() => setOpened((o) => !o)}
              size='sm'
              color={theme.colorScheme === 'dark' ? '#F5F5F7' : '#1A1A1A'}
              mr='xl'
            />
          </MediaQuery>

          <MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
            <Group spacing={8}>
              {headerItems.map((item, idx) => (
                <Link href={item.link} key={idx} scroll={false}>
                  <Button
                    variant='subtle'
                    size='sm'
                    radius='md'
                    sx={{
                      color: item.link === path 
                        ? '#3B82F6' 
                        : (isDark ? '#A1A1AA' : '#52525B'),
                      fontWeight: 500,
                      fontSize: 14,
                      transition: 'all 0.2s ease',
                      backgroundColor: 'transparent',
                      '&:hover': {
                        backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
                        color: isDark ? '#F5F5F7' : '#000000',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
            </Group>
          </MediaQuery>
        </Box>
        <SwitchToggle />
      </Container>
    </Header>
  );
};

export default MyHeader;
