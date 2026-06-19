import { Flex, Footer, Text, useMantineColorScheme } from '@mantine/core';
import Link from 'next/link';

const CopyleftAnchor = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <Link
      href='https://github.com/tfkhdyt/web-portfolio-v3/blob/main/LICENSE'
      target='_blank'
      style={{ textDecoration: 'none' }}
    >
      <Text 
        component="span" 
        c={dark ? '#F5F5F7' : '#1A1A1A'} 
        td='underline' 
        weight={600}
        sx={{
          transition: 'color 0.2s ease',
          '&:hover': {
            color: '#3B82F6',
          }
        }}
      >
        Copyleft
      </Text>
    </Link>
  );
};

const MyFooter = () => {
  const currentYear = new Date().getFullYear();
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <Footer 
      height='60' 
      py='sm' 
      sx={{ 
        textAlign: 'center', 
        fontSize: 14,
        background: isDark ? 'rgba(5, 5, 5, 0.8) !important' : 'rgba(255, 255, 255, 0.8) !important',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderTop: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'} !important`,
      }}
    >
      <Flex justify='center' align='center' gap={5} sx={{ height: '100%' }}>
        <Text color={isDark ? '#A1A1AA' : '#52525B'} size='sm' style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <CopyleftAnchor /> &#127279; {currentYear} - Made with ❤️ by rkmykl
        </Text>
      </Flex>
    </Footer>
  );
};

export default MyFooter;
