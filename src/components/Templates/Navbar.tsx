import {
  Divider,
  Drawer,
  Group,
  Stack,
  Text,
} from '@mantine/core';
import { useAtom } from 'jotai';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { headerItems } from '@/data/headerItem';
import { navbarAtom } from '@/store/navbar';

const MyNavbar = () => {
  const [opened, setOpened] = useAtom(navbarAtom);
  const router = useRouter();
  const path = router.asPath;

  return (
    <Drawer
      opened={opened}
      onClose={() => setOpened(false)}
      title={
        <Text weight={700} size='lg' sx={{ color: '#2dd4bf', letterSpacing: '0.05em' }}>
          Navigation
        </Text>
      }
      padding='xl'
      size='100%'
      zIndex={300}
      styles={{
        drawer: {
          background: 'rgba(5, 8, 18, 0.98) !important',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          color: '#f1f5f9',
        },
        header: {
          background: 'transparent',
          borderBottom: '1px solid rgba(45, 212, 191, 0.2)',
          paddingBottom: '16px',
          marginBottom: '10px',
        },
        closeButton: {
          color: '#2dd4bf',
          '&:hover': {
            background: 'rgba(45, 212, 191, 0.15)',
          },
        },
      }}
    >
      <Stack spacing='xs' mt='md'>
        {headerItems.map((item, idx) => {
          const isActive = item.link === path;
          return (
            <div
              key={idx}
              onClick={() => setOpened(false)}
              style={{ cursor: 'pointer' }}
            >
              <Link
                href={item.link}
                scroll={false}
                style={{ textDecoration: 'none' }}
              >
                <Group
                  position='apart'
                  py='sm'
                  px='md'
                  sx={{
                    borderRadius: 12,
                    background: isActive ? 'linear-gradient(135deg, rgba(31, 78, 140, 0.4) 0%, rgba(45, 212, 191, 0.2) 100%)' : 'transparent',
                    border: isActive ? '1px solid rgba(45, 212, 191, 0.5)' : '1px solid transparent',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      background: 'rgba(31, 78, 140, 0.3)',
                    },
                  }}
                >
                  <Text
                    fz='lg'
                    weight={isActive ? 700 : 500}
                    sx={{
                      color: isActive ? '#2dd4bf' : 'rgba(241, 245, 249, 0.85)',
                      transition: 'color 0.2s ease',
                    }}
                  >
                    {item.label}
                  </Text>
                  {isActive && (
                    <Text size='sm' sx={{ color: '#2dd4bf', fontWeight: 700 }}>
                      ●
                    </Text>
                  )}
                </Group>
              </Link>
              <Divider
                my='xs'
                size='xs'
                color={isActive ? 'rgba(45, 212, 191, 0.3)' : 'rgba(255, 255, 255, 0.05)'}
              />
            </div>
          );
        })}
      </Stack>
    </Drawer>
  );
};

export default MyNavbar;


