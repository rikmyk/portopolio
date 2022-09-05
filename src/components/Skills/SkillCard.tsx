import { Box, Paper } from '@mantine/core';
import Image from 'next/image';

import { Skill } from '@/data/Skills/skill';
import { useStyles } from '@/hooks/useStyles';

interface Props {
  skill: Skill;
}

function SkillCard({ skill }: Props) {
  const { classes } = useStyles();

  return (
    <Paper shadow='sm' radius='lg' p='xl' className={classes.card}>
      <Box
        sx={{
          position: 'relative',
          height: 100,
          width: 100,
          margin: '0 auto',
        }}
      >
        <Image
          src={`/images/tech/${skill.icon}`}
          layout='fill'
          objectFit='contain'
          alt={skill.name}
          style={{
            pointerEvents: 'none',
          }}
          priority={skill.category === 'Language'}
          // caption={skill.name}
        />
      </Box>
    </Paper>
  );
}

export default SkillCard;
