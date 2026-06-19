import { Box, Paper, Text, Timeline, useMantineColorScheme } from '@mantine/core';

import { education } from '@/data/About/education';
import { useStyles } from '@/hooks/useStyles';

const Education = () => {
  const { classes } = useStyles();
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <Paper className={classes.card} p="xl" radius="lg">
      <Text 
        size={28} 
        weight={800}
        sx={{
          letterSpacing: '-0.02em',
          lineHeight: 1.2,
        }}
        color={isDark ? '#F5F5F7' : '#1A1A1A'}
        mb="lg"
      >
        Education
      </Text>
      <Timeline active={1} color="blue" bulletSize={20} lineWidth={2}>
        {education.map((each) => (
          <Timeline.Item
            title={
              <Text weight={700} size='md' color={isDark ? '#F5F5F7' : '#1A1A1A'}>
                {each.type}
              </Text>
            }
            key={each.name}
          >
            <Text size="sm" weight={500} color={isDark ? '#A1A1AA' : '#52525B'}>{each.name}</Text>
            <Text size='xs' color={isDark ? '#A1A1AA' : '#71717A'}>{each.major}</Text>
            <Text size='xs' color='dimmed' mt={4}>
              {each.timePeriod}
            </Text>
          </Timeline.Item>
        ))}
      </Timeline>
    </Paper>
  );
};

export default Education;
