import { Badge, Box, List, Text, Timeline } from '@mantine/core';

import { workExperience } from '@/data/About/workExperience';

const typeColor: Record<string, string> = {
  Freelance: 'violet',
  Internship: 'teal',
  'Full-time': 'blue',
  'Part-time': 'orange',
};

const WorkExperience = () => {
  // Tandai index item terakhir yang masih "present" sebagai active di Timeline
  const lastPresentIndex = workExperience
    .map((e, i) => (e.timePeriod.toLowerCase().includes('present') ? i : -1))
    .filter((i) => i !== -1)
    .at(-1) ?? -1;

  return (
    <Box mt='md'>
      <Text size={42} weight='bold'>
        Work Experience
      </Text>
      <Timeline active={lastPresentIndex} mt='sm' color='violet'>
        {workExperience.map((each) => (
          <Timeline.Item
            title={
              <Text weight='bold' size='lg'>
                {each.name}
              </Text>
            }
            key={each.name}
          >
            <Badge
              color={typeColor[each.type] ?? 'gray'}
              variant='light'
              mb={6}
              size='sm'
            >
              {each.type}
            </Badge>
            <List size='sm' mt={4}>
              {each.tasks.map((task, idx) => (
                <List.Item key={idx}>{task}</List.Item>
              ))}
            </List>
            <Text size='sm' color='dimmed' mt={6}>
              {each.timePeriod}
            </Text>
          </Timeline.Item>
        ))}
      </Timeline>
    </Box>
  );
};

export default WorkExperience;
