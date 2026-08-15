import {
  Divider,
  Navbar,
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
    <Navbar
      p='md'
      hiddenBreakpoint='sm'
      hidden={!opened}
      width={{ sm: 200, lg: 300 }}
      sx={{
        background: 'rgba(17, 26, 58, 0.95) !important',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderRight: '1px solid rgba(31, 78, 140, 0.35) !important',
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
                sx={{
                  color: item.link === path ? '#2dd4bf' : 'rgba(255,255,255,0.65)',
                  transition: 'color 0.2s ease',
                  '&:hover': {
                    color: '#2dd4bf',
                  },
                }}
              >
                {item.label}
              </Text>
            </Link>
            <Divider
              my='sm'
              mx='md'
              size='xs'
              color={item.link === path ? 'rgba(45, 212, 191, 0.4)' : 'rgba(255, 255, 255, 0.04)'}
            />
          </div>
        ))}
      </Stack>
    </Navbar>
  );
};

export default MyNavbar;


