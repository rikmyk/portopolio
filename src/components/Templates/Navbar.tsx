import {
  Divider,
  Navbar,
  Stack,
  Text,
  useMantineColorScheme,
} from '@mantine/core';
import { useAtom } from 'jotai';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { headerItems } from '@/data/headerItem';
import { navbarAtom } from '@/store/navbar';

const MyNavbar = () => {
  const [opened, setOpened] = useAtom(navbarAtom);
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';
  const router = useRouter();
  const path = router.asPath;

  return (
    <Navbar
      p='md'
      hiddenBreakpoint='sm'
      hidden={!opened}
      width={{ sm: 200, lg: 300 }}
      sx={{
        background: isDark ? 'rgba(5, 5, 5, 0.8) !important' : 'rgba(255, 255, 255, 0.8) !important',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderRight: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'} !important`,
        zIndex: 90,
      }}
    >
      <Stack>
        {headerItems.map((item, idx) => (
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
              <Text 
                mx='md' 
                fz='md' 
                weight={600} 
                c={item.link === path ? '#3B82F6' : (isDark ? '#F5F5F7' : '#1A1A1A')}
                sx={{
                  transition: 'color 0.2s ease',
                  '&:hover': {
                    color: '#3B82F6',
                  }
                }}
              >
                {item.label}
              </Text>
            </Link>
            <Divider
              my='sm'
              mx='md'
              size='xs'
              color={item.link === path ? '#3B82F6' : (isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)')}
            />
          </div>
        ))}
      </Stack>
    </Navbar>
  );
};

export default MyNavbar;
