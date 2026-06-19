import { Box, Paper, Text, useMantineColorScheme } from '@mantine/core';
import Image from 'next/image';
import { FC } from 'react';

import { Skill } from '@/data/Skills/skill';
import { useStyles } from '@/hooks/useStyles';

interface Props {
  skill: Skill;
}

const SkillCard: FC<Props> = ({ skill }) => {
  const { classes } = useStyles();
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <Paper
      radius='lg'
      p='lg'
      className={classes.card}
      title={skill.name}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        aspectRatio: '1',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          height: 60,
          width: 60,
          transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          '&:hover': {
            transform: 'scale(1.15)',
          }
        }}
      >
        <Image
          src={`/images/tech/${skill.icon}`}
          fill
          alt={skill.name}
          style={{
            pointerEvents: 'none',
            objectFit: 'contain',
          }}
          priority={skill.category === 'Language'}
        />
      </Box>
      <Text 
        size="sm" 
        weight={600} 
        color={isDark ? '#F5F5F7' : '#1A1A1A'}
        align="center"
      >
        {skill.name}
      </Text>
    </Paper>
  );
};

export default SkillCard;
