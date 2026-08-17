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
              color: '#F5F5F7',
              '@media (min-width: 768px)': {
                fontSize: 54,
              },
            }}
          >
            Rico{' '}
            <Text
              component='span'
              sx={{
                color: '#F5F5F7',
              }}
            >
              Maykel
            </Text>
            <br />
            <Text
              component='span'
              sx={{
                color: '#F5F5F7',
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
                color: '#76EBD7',
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
            color: '#F5F5F7',
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
            '@media (max-width: 576px)': {
              flexDirection: 'column',
              alignItems: 'stretch',
              width: '100%',
            },
          }}
        >
          <Link href='/projects' passHref legacyBehavior>
            <Button
              component='a'
              size='md'
              radius='xl'
              sx={{
                background: 'linear-gradient(135deg, #4CD5DA 0%, #76EBD7 100%)',
                color: '#02274B',
                fontWeight: 700,
                fontSize: 14,
                padding: '10px 24px',
                border: '1px solid rgba(118, 235, 215, 0.45)',
                boxShadow: '0 0 25px rgba(118, 235, 215, 0.25), inset 0 1px 1px rgba(241, 245, 249, 0.4)',
                transition: 'all 0.25s ease',
                '@media (max-width: 576px)': {
                  width: '100%',
                },
                '&:hover': {
                  background: 'linear-gradient(135deg, #76EBD7 0%, #4CD5DA 100%)',
                  color: '#02274B',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 0 35px rgba(118, 235, 215, 0.35), inset 0 1px 1px rgba(241, 245, 249, 0.6)',
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
                background: 'rgba(6, 56, 105, 0.6)',
                border: '1px solid rgba(76, 213, 218, 0.5)',
                color: '#f1f5f9',
                fontWeight: 600,
                fontSize: 14,
                padding: '10px 24px',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.25s ease',
                '@media (max-width: 576px)': {
                  width: '100%',
                },
                '&:hover': {
                  background: 'rgba(76, 213, 218, 0.4)',
                  borderColor: 'rgba(118, 235, 215, 0.4)',
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



