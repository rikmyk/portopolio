import { Box, Button, Grid, Group, Stack, Text } from '@mantine/core';
import Link from 'next/link';
import { FC } from 'react';

interface Props {
  isDark: boolean;
}

const WelcomeText: FC<Props> = () => {

  return (
    <Grid.Col sm={6} orderSm={1}>
      <Stack
        spacing='lg'
        sx={{
          textAlign: 'center',
          alignItems: 'center',
          '@media (min-width: 768px)': {
            textAlign: 'left',
            alignItems: 'flex-start',
          },
        }}
      >


        {/* Name & Role matching Midnight Orbit Palette */}
        <Box sx={{ width: '100%' }}>
          <Text
            weight={800}
            sx={{
              fontSize: 48,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              color: '#f1f5f9',
              '@media (min-width: 768px)': {
                fontSize: 54,
              },
            }}
          >
            Rico{' '}
            <Text
              component='span'
              sx={{
                background: 'linear-gradient(135deg, #2dd4bf 0%, #1f4e8c 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Maykel
            </Text>
            <br />
            <Text
              component='span'
              sx={{
                background: 'linear-gradient(135deg, #2dd4bf 0%, #1f4e8c 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Erawanto
            </Text>
          </Text>
          <Box mt={14}>
            <Text
              weight={700}
              sx={{
                fontSize: 22,
                color: '#2dd4bf',
                letterSpacing: '-0.01em',
                '@media (min-width: 768px)': {
                  fontSize: 24,
                },
              }}
            >
              Full Stack Developer
            </Text>
          </Box>
        </Box>

        {/* Bio */}
        <Text
          sx={{
            color: 'rgba(241, 245, 249, 0.8)',
            lineHeight: 1.65,
            fontWeight: 400,
            fontSize: 15,
            maxWidth: 460,
          }}
        >
          Specializing in building modern enterprise web applications, high-performance APIs, and custom automation tools. Dedicated to writing clean, maintainable code.
        </Text>

        {/* CTA Buttons - Midnight Orbit styled */}
        <Group
          spacing='md'
          mt='sm'
          sx={{
            justifyContent: 'center',
            '@media (min-width: 768px)': {
              justifyContent: 'flex-start',
            },
          }}
        >
          <Link href='/projects' passHref legacyBehavior>
            <Button
              component='a'
              size='md'
              radius='xl'
              sx={{
                background: 'linear-gradient(135deg, #1f4e8c 0%, #2dd4bf 100%)',
                color: '#050812',
                fontWeight: 700,
                fontSize: 14,
                padding: '10px 24px',
                border: '1px solid rgba(45, 212, 191, 0.6)',
                boxShadow: '0 0 25px rgba(45, 212, 191, 0.4), inset 0 1px 1px rgba(241, 245, 249, 0.4)',
                transition: 'all 0.25s ease',
                '&:hover': {
                  background: 'linear-gradient(135deg, #2dd4bf 0%, #1f4e8c 100%)',
                  color: '#f1f5f9',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 0 35px rgba(45, 212, 191, 0.6), inset 0 1px 1px rgba(241, 245, 249, 0.6)',
                },
              }}
            >
              Explore Projects
            </Button>
          </Link>
          <Link href='/contact' passHref legacyBehavior>
            <Button
              component='a'
              size='md'
              radius='xl'
              sx={{
                background: 'rgba(17, 26, 58, 0.6)',
                border: '1px solid rgba(31, 78, 140, 0.6)',
                color: '#f1f5f9',
                fontWeight: 600,
                fontSize: 14,
                padding: '10px 24px',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.25s ease',
                '&:hover': {
                  background: 'rgba(31, 78, 140, 0.4)',
                  borderColor: 'rgba(45, 212, 191, 0.5)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              Get in Touch
            </Button>
          </Link>
        </Group>
      </Stack>
    </Grid.Col>
  );
};

export default WelcomeText;



