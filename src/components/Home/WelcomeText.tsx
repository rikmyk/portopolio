import { Box, Grid, Stack, Text } from '@mantine/core';
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
        <Box>
          <Text
            weight='bold'
            sx={{
              fontSize: 36,
              '@media (min-width: 768px)': {
                fontSize: 42,
              },
            }}
            color={isDark ? 'white' : 'dark'}
          >
            Rico Maykel Erawanto
          </Text>
          {mounted ? (
            <TypeAnimation
              sequence={[
                'Junior Full Stack Developer and Freelancer',
                2000,
                'Hungry to learn',
                2000,
                'Game Enthusiast',
                2000,
              ]}
              cursor={true}
              repeat={Infinity}
              className={classes.gradientText}
            />
          ) : (
            <Text component='span' className={classes.gradientText}>
              Junior Full Stack Developer and Freelancer
            </Text>
          )}
        </Box>
        <Text
          size='md'
          sx={{
            '@media (min-width: 992px)': {
              fontSize: 18,
            },
          }}
        >
          Hi everyone <span className='wave'>👋🏼</span>, welcome to my portfolio
          website
        </Text>
      </Stack>
    </Grid.Col>
  );
};

export default WelcomeText;
