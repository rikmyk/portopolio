import { SimpleGrid, Tabs, Text, useMantineColorScheme } from '@mantine/core';
import { NextSeo } from 'next-seo';

import ProjectCard from '@/components/Projects/ProjectCard';
import { projectCategories } from '@/data/Projects/projectCategories';
import { projects } from '@/data/Projects/projects';

const ProjectsPage = () => {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <>
      <NextSeo title='Projects' />
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
        Projects
      </Text>
      <Tabs 
        defaultValue='website' 
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
              backgroundColor: 'rgba(45, 212, 191, 0.15) !important',
              color: '#2dd4bf !important',
              border: '1px solid rgba(45, 212, 191, 0.4) !important',
              boxShadow: '0 0 15px rgba(45, 212, 191, 0.2)',
            },
            '&:hover:not([data-active])': {
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              color: '#F5F5F7',
            }
          }
        })}
      >
        <Tabs.List>
          {projectCategories.map((category) => (
            <Tabs.Tab value={category.toLowerCase()} key={category}>
              {category}
            </Tabs.Tab>
          ))}
        </Tabs.List>

        {projectCategories.map((category) => (
          <Tabs.Panel
            value={category.toLowerCase()}
            key={category}
            pt='xs'
            mt='md'
          >
            <SimpleGrid
              breakpoints={[
                { minWidth: 0, cols: 1 },
                { minWidth: 'md', cols: 2 },
              ]}
              spacing='lg'
            >
              {projects
                .filter((project) => project.category === category)
                .map((project) => (
                  <ProjectCard project={project} key={project.name} />
                ))}
            </SimpleGrid>
          </Tabs.Panel>
        ))}
      </Tabs>
    </>
  );
};

export default ProjectsPage;
