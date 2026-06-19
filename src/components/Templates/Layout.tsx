import { AppShell, Container, useMantineTheme } from '@mantine/core';
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

const MyAppShell: FC<Props> = ({ children }) => {
  const theme = useMantineTheme();
  const { isSm } = useBreakpoint();
  const router = useRouter();

  if (!headerItems.map((item) => item.link).includes(router.asPath))
    return <>{children}</>;

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === 'dark'
              ? `radial-gradient(circle at 10% 20%, rgba(99, 102, 241, 0.12) 0%, transparent 40%),
                 radial-gradient(circle at 90% 80%, rgba(236, 72, 153, 0.08) 0%, transparent 45%),
                 radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.06) 0%, transparent 50%),
                 ${theme.colors.dark[8]}`
              : `radial-gradient(circle at 10% 20%, rgba(99, 102, 241, 0.04) 0%, transparent 45%),
                 radial-gradient(circle at 90% 80%, rgba(236, 72, 153, 0.03) 0%, transparent 50%),
                 radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.02) 0%, transparent 55%),
                 ${theme.colors.gray[0]}`,
          backgroundAttachment: 'fixed',
          backgroundSize: '200% 200%',
          animation: 'floatGlow 20s ease infinite',
          transition: 'background-color 0.3s ease, color 0.3s ease',
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
  );
};

export default MyAppShell;
