import { Box, Grid } from '@mantine/core';
import { NextSeo } from 'next-seo';

import Education from '@/components/About/Education';
import EngineeringPractices from '@/components/About/EngineeringPractices';
import Introduction from '@/components/About/Introduction';
import WorkExperience from '@/components/About/WorkExperience';

const About = () => {
  return (
    <>
      <NextSeo title='About Me' />
      <Grid gutter="xl" mt="xl" align="flex-start">
        <Grid.Col span={12}>
          <Introduction />
        </Grid.Col>
        <Grid.Col xs={12} md={5}>
          <Education />
          <Box mt="xl">
            <EngineeringPractices />
          </Box>
        </Grid.Col>
        <Grid.Col xs={12} md={7}>
          <WorkExperience />
        </Grid.Col>
      </Grid>
    </>
  );
};

export default About;
