import { Badge, Box, List, Paper, Text, Timeline, useMantineColorScheme } from '@mantine/core';

import { workExperience } from '@/data/About/workExperience';
import { useStyles } from '@/hooks/useStyles';

const typeColor: Record<string, string> = {
  Freelance: 'indigo',
  Internship: 'teal',
  'Full-time': 'blue',
  'Part-time': 'orange',
};

const WorkExperience = () => {
  const { classes } = useStyles();
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';

  // Tandai index item terakhir yang masih "present" sebagai active di Timeline
  const lastPresentIndex = workExperience
    .map((e, i) => (e.timePeriod.toLowerCase().includes('present') ? i : -1))
    .filter((i) => i !== -1)
    .at(-1) ?? -1;

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
        Work Experience
      </Text>
      <Timeline active={lastPresentIndex} color='blue' bulletSize={20} lineWidth={2}>
        {workExperience.map((each) => (
          <Timeline.Item
            title={
              <Text weight={700} size='md' color={isDark ? '#F5F5F7' : '#1A1A1A'}>
                {each.name}
              </Text>
            }
            key={each.name}
          >
            <Badge
              color={typeColor[each.type] ?? 'gray'}
              variant={isDark ? 'filled' : 'light'}
              mb={6}
              size='sm'
              sx={{
                borderRadius: '6px',
                fontWeight: 600,
              }}
            >
              {each.type}
            </Badge>
            <List 
              size='sm' 
              mt={4} 
              spacing={4}
              sx={{
                color: isDark ? '#A1A1AA' : '#52525B',
              }}
            >
              {each.tasks.map((task, idx) => (
                <List.Item key={idx}>{task}</List.Item>
              ))}
            </List>
            <Text size='xs' color='dimmed' mt={8}>
              {each.timePeriod}
            </Text>
          </Timeline.Item>
        ))}
      </Timeline>
    </Paper>
  );
};

export default WorkExperience;
