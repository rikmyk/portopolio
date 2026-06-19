import { Box, Paper, SimpleGrid, Text, useMantineColorScheme } from '@mantine/core';
import Link from 'next/link';
import { FC } from 'react';
import { BsEnvelope, BsGithub, BsInstagram, BsTelegram } from 'react-icons/bs';

import { contacts } from '@/data/Contact/contacts';
import { useStyles } from '@/hooks/useStyles';

interface Props {
  isDark: boolean;
}

const icons: Record<string, React.ReactNode> = {
  Email: <BsEnvelope size={22} />,
  Telegram: <BsTelegram size={22} />,
  GitHub: <BsGithub size={22} />,
  Instagram: <BsInstagram size={22} />,
};

const ContactList: FC<Props> = ({ isDark }) => {
  const { classes } = useStyles();

  return (
    <Box mt='lg'>
      <Text 
        size='md' 
        sx={{ 
          color: isDark ? '#A1A1AA' : '#52525B', 
          lineHeight: 1.6,
          maxWidth: 600,
        }}
        mb="xl"
      >
        Please don’t hesitate to get in touch with me by following my social
        media or sending an email. I will get back to you as soon as possible!
      </Text>

      <SimpleGrid
        breakpoints={[
          { minWidth: 0, cols: 1 },
          { minWidth: 'sm', cols: 2 },
        ]}
        spacing='lg'
      >
        {contacts.map((contact, idx) => (
          <Link 
            href={contact.link} 
            key={idx}
            target='_blank' 
            rel='me'
            style={{ textDecoration: 'none' }}
          >
            <Paper
              className={classes.card}
              p="xl"
              radius="lg"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                height: '100%',
                cursor: 'pointer',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 48,
                  height: 48,
                  borderRadius: '12px',
                  background: isDark ? 'rgba(59, 130, 246, 0.15)' : 'rgba(59, 130, 246, 0.08)',
                  color: '#3B82F6',
                  transition: 'transform 0.2s ease',
                  '&:hover': {
                    transform: 'scale(1.1)',
                  }
                }}
              >
                {icons[contact.name]}
              </Box>
              <Box>
                <Text 
                  size="xs" 
                  weight={600} 
                  sx={{ 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.05em',
                  }}
                  color={isDark ? '#71717A' : '#A1A1AA'}
                >
                  {contact.name}
                </Text>
                <Text 
                  size="md" 
                  weight={700}
                  className={`umami--click--${contact.name.replaceAll(' ', '-')}-Link`}
                  color={isDark ? '#F5F5F7' : '#1A1A1A'}
                  mt={2}
                >
                  {contact.label}
                </Text>
              </Box>
            </Paper>
          </Link>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ContactList;
