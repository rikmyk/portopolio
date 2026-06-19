import { Box, Grid, Group } from '@mantine/core';
import Image from 'next/image';
import React, { FC } from 'react';

interface Props {
  src: string;
  width: number;
  height: number;
}

const IllustrationImage: FC<Props> = ({ src, width, height }) => {
  return (
    <Grid.Col sm={6} orderSm={2}>
      <Group position='center'>
        <Box
          className="float-animation"
          sx={(theme) => ({
            position: 'relative',
            padding: '2.5rem',
            borderRadius: '24px',
            background: theme.colorScheme === 'dark' ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.01)',
            border: `1px solid ${theme.colorScheme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'}`,
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            boxShadow: theme.colorScheme === 'dark' ? '0 20px 50px rgba(0, 0, 0, 0.3)' : '0 20px 50px rgba(0, 0, 0, 0.05)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: '-10%',
              left: '-10%',
              right: '-10%',
              bottom: '-10%',
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, transparent 70%)',
              zIndex: -1,
              pointerEvents: 'none',
            }
          })}
        >
          <Image
            src={src}
            alt='illustration'
            width={width}
            height={height}
            priority
          />
        </Box>
      </Group>
    </Grid.Col>
  );
};

export default IllustrationImage;
