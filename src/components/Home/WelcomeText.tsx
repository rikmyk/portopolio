import { Box, Button, Grid, Group, Stack, Text } from '@mantine/core';
import Link from 'next/link';
import React, { FC, useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

import { useStyles } from '@/hooks/useStyles';

interface Props {
  isDark: boolean;
}

const WelcomeText: FC<Props> = ({ isDark }) => {
  const { classes } = useStyles();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  return (
    <Grid.Col sm={6} orderSm={1}>
      <Stack
        spacing='md'
        sx={{
          textAlign: 'center',
          '@media (min-width: 768px)': {
            textAlign: 'left',
          },
        }}
      >
        <Group 
          spacing={8} 
          align="center" 
          sx={{ 
            display: 'inline-flex', 
            alignItems: 'center',
            backgroundColor: isDark ? 'rgba(16, 185, 129, 0.08)' : 'rgba(16, 185, 129, 0.06)',
            border: `1px solid ${isDark ? 'rgba(16, 185, 129, 0.2)' : 'rgba(16, 185, 129, 0.15)'}`,
            padding: '6px 14px', 
            borderRadius: 20,
            width: 'fit-content',
            marginBottom: 8,
            alignSelf: 'center',
            '@media (min-width: 768px)': {
              alignSelf: 'flex-start',
            }
          }}
        >
          <span className="pulse-dot" />
          <Text size="xs" weight={700} color="#10b981" sx={{ letterSpacing: '0.03em', textTransform: 'uppercase', display: 'flex', alignItems: 'center' }}>
            {mounted ? (
              <TypeAnimation
                sequence={[
                  'Interning at PT Nose Herbal Indo',
                  3000,
                  'Open to Freelance Projects',
                  3000,
                  'Based in Indonesia',
                  3000,
                ]}
                cursor={true}
                repeat={Infinity}
              />
            ) : (
              'Interning at PT Nose Herbal Indo'
            )}
          </Text>
        </Group>

        <Box>
          <Text
            weight={800}
            sx={{
              fontSize: 42,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              '@media (min-width: 768px)': {
                fontSize: 56,
              },
            }}
            color={isDark ? '#F5F5F7' : '#1A1A1A'}
          >
            Rico Maykel Erawanto
          </Text>
          <Box mt={10}>
            <Text component='span' className={classes.gradientText}>
              Full Stack Developer
            </Text>
          </Box>
        </Box>
        <Text
          size='lg'
          sx={{
            color: isDark ? '#A1A1AA' : '#52525B',
            lineHeight: 1.7,
            fontWeight: 400,
            fontSize: 16,
            maxWidth: 500,
            '@media (min-width: 992px)': {
              fontSize: 18,
            },
          }}
        >
          Specializing in building modern enterprise web applications, high-performance APIs, and custom automation tools. Dedicated to writing clean, maintainable code.
        </Text>

        <Group 
          spacing="md" 
          mt="lg"
          sx={{
            justifyContent: 'center',
            '@media (min-width: 768px)': {
              justifyContent: 'flex-start',
            }
          }}
        >
          <Link href="/projects" passHref legacyBehavior>
            <Button
              size="md"
              radius="lg"
              variant="filled"
              sx={{
                backgroundColor: isDark ? '#F5F5F7' : '#1A1A1A',
                color: isDark ? '#1A1A1A' : '#FFFFFF',
                fontWeight: 600,
                fontSize: 14,
                '&:hover': {
                  backgroundColor: isDark ? '#E5E5E7' : '#2A2A2A',
                },
                boxShadow: isDark ? '0 4px 14px rgba(255, 255, 255, 0.1)' : '0 4px 14px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.2s ease',
              }}
            >
              Explore Projects
            </Button>
          </Link>
          <Link href="/contact" passHref legacyBehavior>
            <Button
              size="md"
              radius="lg"
              variant="outline"
              sx={{
                borderColor: isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.15)',
                color: isDark ? '#F5F5F7' : '#1A1A1A',
                fontWeight: 600,
                fontSize: 14,
                backgroundColor: 'transparent',
                '&:hover': {
                  backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.03)',
                  borderColor: isDark ? 'rgba(255, 255, 255, 0.25)' : 'rgba(0, 0, 0, 0.25)',
                },
                transition: 'all 0.2s ease',
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
