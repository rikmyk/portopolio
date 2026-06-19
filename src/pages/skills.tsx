import { SimpleGrid, Tabs, Text, useMantineColorScheme } from '@mantine/core';
import { NextSeo } from 'next-seo';

import SkillCard from '@/components/Skills/SkillCard';
import { skillCategories } from '@/data/Skills/skillCategories';
import { skills } from '@/data/Skills/skills';

const SkillsPage = () => {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <>
      <NextSeo title='Skills' />
      <Text 
        weight={800}
        sx={{
          fontSize: 42,
          letterSpacing: '-0.02em',
          lineHeight: 1.2,
        }}
        color={isDark ? '#F5F5F7' : '#1A1A1A'}
        mt="xl"
      >
        Skills
      </Text>
      <Tabs 
        defaultValue='language' 
        variant='pills' 
        mt='lg'
        styles={(theme) => ({
          tabsList: {
            background: theme.colorScheme === 'dark' ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)',
            padding: 4,
            borderRadius: 12,
            border: `1px solid ${theme.colorScheme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'}`,
            display: 'flex',
            flexWrap: 'nowrap',
            overflowX: 'auto',
            overflowY: 'hidden',
            gap: 4,
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
          },
          tab: {
            borderRadius: 8,
            fontWeight: 500,
            fontSize: 13,
            padding: '8px 16px',
            transition: 'all 0.2s ease',
            color: theme.colorScheme === 'dark' ? '#A1A1AA' : '#71717A',
            border: 'none',
            backgroundColor: 'transparent',
            '&[data-active]': {
              backgroundColor: theme.colorScheme === 'dark' ? 'rgba(99, 102, 241, 0.12) !important' : 'rgba(99, 102, 241, 0.06) !important',
              color: theme.colorScheme === 'dark' ? '#A5B4FC !important' : '#4F46E5 !important',
              border: `1px solid ${theme.colorScheme === 'dark' ? 'rgba(165, 180, 252, 0.2)' : 'rgba(79, 70, 229, 0.15)'} !important`,
              boxShadow: theme.colorScheme === 'dark' ? 'none' : '0 1px 3px rgba(79, 70, 229, 0.08)',
            },
            '&:hover:not([data-active])': {
              backgroundColor: theme.colorScheme === 'dark' ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.04)',
              color: theme.colorScheme === 'dark' ? '#F5F5F7' : '#1A1A1A',
            }
          }
        })}
      >
        <Tabs.List>
          {skillCategories.map((category) => (
            <Tabs.Tab value={category.toLowerCase()} key={category}>
              {category}
            </Tabs.Tab>
          ))}
        </Tabs.List>

        {skillCategories.map((category) => (
          <Tabs.Panel
            value={category.toLowerCase()}
            key={category}
            pt='xs'
            mt='md'
          >
            <SimpleGrid
              breakpoints={[
                { minWidth: 0, cols: 2 },
                { minWidth: 'sm', cols: 3 },
                { minWidth: 'md', cols: 4 },
                { minWidth: 'lg', cols: 6 },
              ]}
              spacing='lg'
            >
              {skills
                .filter((skill) => skill.category === category)
                .map((skill) => (
                  <SkillCard skill={skill} key={skill.name} />
                ))}
            </SimpleGrid>
          </Tabs.Panel>
        ))}
      </Tabs>
    </>
  );
};

export default SkillsPage;
