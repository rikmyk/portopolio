import { Badge, Box, Button, Group, Paper, Stack, Text, Title } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { HiExternalLink, HiSparkles } from 'react-icons/hi';

import { skills } from '@/data/Skills/skills';

const featuredTech = ['TypeScript', 'Next.js', 'React.js', 'Tailwind CSS', 'Vercel'];

const FeaturedProject: FC = () => {
  return (
    <Box sx={{ width: '100%', maxWidth: 960, margin: '0 auto', padding: '0 16px' }} my='xl'>
      {/* Section Title */}
      <Group position='center' spacing={8} mb='md'>
        <HiSparkles size={22} color='#76EBD7' />
        <Text
          weight={700}
          sx={{
            fontSize: 14,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#76EBD7',
          }}
        >
          Featured Project
        </Text>
      </Group>

      {/* Main Glass Highlight Card */}
      <Paper
        p={{ base: 'lg', sm: 'xl' }}
        radius='lg'
        sx={{
          position: 'relative',
          background: 'rgba(6, 56, 105, 0.75)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(76, 213, 218, 0.3)',
          boxShadow: '0 0 25px rgba(2, 39, 75, 0.5), inset 0 1px 1px rgba(241, 245, 249, 0.12)',
          overflow: 'hidden',
          transition: 'all 0.3s ease',
          '&:hover': {
            borderColor: '#76EBD7',
            boxShadow: '0 0 35px rgba(76, 213, 218, 0.18), inset 0 1px 1px rgba(241, 245, 249, 0.2)',
            transform: 'translateY(-3px)',
          },
        }}
      >
        {/* Glow ambient background decoration */}
        <Box
          sx={{
            position: 'absolute',
            top: -60,
            right: -60,
            width: 220,
            height: 220,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(118, 235, 215, 0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <Stack spacing='md'>
          <Group position='apart' align='center'>
            <Badge
              variant='gradient'
              gradient={{ from: '#4CD5DA', to: '#1583C5', deg: 135 }}
              size='lg'
              radius='md'
              sx={{ fontWeight: 700, color: '#02274B' }}
            >
              AI Powered App
            </Badge>

            <Text size='xs' sx={{ color: '#F5F5F7', fontWeight: 500 }}>
              Live Website
            </Text>
          </Group>

          <Title
            order={2}
            sx={{
              fontSize: 28,
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: '#f1f5f9',
              '@media (min-width: 768px)': {
                fontSize: 34,
              },
            }}
          >
            AI CV Generator
          </Title>

          <Text
            sx={{
              fontSize: 15,
              lineHeight: 1.7,
              color: '#F5F5F7',
              maxWidth: 780,
            }}
          >
            An intelligent AI-powered CV generator application designed to help job seekers quickly craft professional, ATS-optimized resumes with real-time editing and modern layouts.
          </Text>

          {/* Tech Badges */}
          <Group spacing='xs' mt='xs'>
            {skills
              .filter((skill) => featuredTech.includes(skill.name))
              .map((skill) => (
                <Group
                  key={skill.name}
                  spacing={6}
                  sx={{
                    background: 'rgba(2, 39, 75, 0.6)',
                    border: '1px solid rgba(118, 235, 215, 0.25)',
                    borderRadius: 20,
                    padding: '4px 12px',
                  }}
                >
                  <Box sx={{ position: 'relative', width: 16, height: 16 }}>
                    <Image
                      src={`/images/tech/${skill.icon}`}
                      alt={skill.name}
                      fill
                      style={{ objectFit: 'contain' }}
                    />
                  </Box>
                  <Text size='xs' weight={600} sx={{ color: '#76EBD7' }}>
                    {skill.name}
                  </Text>
                </Group>
              ))}
          </Group>

          {/* Action buttons */}
          <Group spacing='md' mt='sm' sx={{ '@media (max-width: 576px)': { flexDirection: 'column', alignItems: 'stretch' } }}>
            <Button
              component='a'
              href='https://cv-generator-mu-one.vercel.app/'
              target='_blank'
              rel='noopener noreferrer'
              size='md'
              radius='xl'
              rightIcon={<HiExternalLink size={18} />}
              sx={{
                background: 'linear-gradient(135deg, #76EBD7 0%, #4CD5DA 100%)',
                color: '#02274B',
                fontWeight: 700,
                fontSize: 14,
                padding: '10px 24px',
                border: '1px solid rgba(118, 235, 215, 0.5)',
                boxShadow: '0 0 25px rgba(118, 235, 215, 0.25)',
                transition: 'all 0.25s ease',
                '@media (max-width: 576px)': {
                  width: '100%',
                },
                '&:hover': {
                  background: 'linear-gradient(135deg, #4CD5DA 0%, #76EBD7 100%)',
                  color: '#02274B',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 0 35px rgba(118, 235, 215, 0.35)',
                },
              }}
            >
              Try AI CV Generator
            </Button>

            <Link href='/projects' legacyBehavior>
              <Button
                component='a'
                size='md'
                radius='xl'
                variant='subtle'
                sx={{
                  color: '#f1f5f9',
                  fontWeight: 600,
                  fontSize: 14,
                  padding: '10px 20px',
                  '@media (max-width: 576px)': {
                    width: '100%',
                  },
                  '&:hover': {
                    background: 'rgba(76, 213, 218, 0.3)',
                    color: '#76EBD7',
                  },
                }}
              >
                View All Projects &rarr;
              </Button>
            </Link>
          </Group>
        </Stack>
      </Paper>
    </Box>
  );
};

export default FeaturedProject;
