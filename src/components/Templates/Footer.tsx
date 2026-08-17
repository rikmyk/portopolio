import { Flex, Footer, Text } from '@mantine/core';
import Link from 'next/link';

const MyFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Footer
      height='60'
      py='sm'
      sx={{
        textAlign: 'center',
        fontSize: 14,
        background: 'rgba(6, 56, 105, 0.45) !important',
        backdropFilter: 'blur(16px) saturate(130%) !important',
        WebkitBackdropFilter: 'blur(16px) saturate(130%) !important',
        borderTop: '1px solid rgba(76, 213, 218, 0.35) !important',
        boxShadow: '0 -8px 32px 0 rgba(2, 39, 75, 0.6) !important',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <Flex justify='center' align='center' gap={5} sx={{ height: '100%' }}>
        <Text
          size='sm'
          sx={{ color: 'rgba(255,255,255,0.4)', display: 'flex', alignItems: 'center', gap: '4px' }}
        >
          <Link
            href='https://github.com/tfkhdyt/web-portfolio-v3/blob/main/LICENSE'
            target='_blank'
            style={{ textDecoration: 'none' }}
          >
            <Text
              component='span'
              sx={{
                color: 'rgba(255,255,255,0.5)',
                textDecoration: 'underline',
                fontWeight: 600,
                transition: 'color 0.2s ease',
                '&:hover': { color: '#76EBD7' },
              }}
            >
              Copyleft
            </Text>
          </Link>{' '}
          &#127279; {currentYear} - Made with ❤️ by rkmykl
        </Text>
      </Flex>
    </Footer>
  );
};

export default MyFooter;


