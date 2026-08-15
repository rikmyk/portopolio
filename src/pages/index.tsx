import { Box, Center, Grid, useMantineColorScheme } from '@mantine/core';
import type { NextPage } from 'next';

import FeaturedProject from '@/components/Home/FeaturedProject';
import IllustrationImage from '@/components/Home/IllustrationImage';
import WelcomeText from '@/components/Home/WelcomeText';

const Home: NextPage = () => {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <Box sx={{ pb: '4rem' }}>
      <Center
        sx={{ minHeight: '75vh', '@media (min-width: 768px)': { minHeight: '80vh' } }}
      >
        <Grid align='center' sx={{ width: '90%' }}>
          <IllustrationImage
            src='/images/myface.jpeg'
            width={240}
            height={240}
          />
          <WelcomeText isDark={isDark} />
        </Grid>
      </Center>

      {/* Featured Project Showcase */}
      <FeaturedProject />
    </Box>
  );
};

export default Home;
