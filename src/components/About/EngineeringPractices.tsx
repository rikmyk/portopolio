import { Badge, Box, Group, Paper, Text, useMantineColorScheme } from '@mantine/core';

import { useStyles } from '@/hooks/useStyles';

const practices = [
  { category: 'Software Engineering', items: ['SDLC', 'Clean Code', 'Secure Code', 'Debugging', 'Troubleshooting', 'Performance Optimization'] },
  { category: 'Database & Architecture', items: ['Database Design', 'Relational Data Modeling', 'Query Optimization'] },
  { category: 'DevOps & Pipeline', items: ['Gitflow', 'GitHub Actions', 'CI/CD'] },
  { category: 'Tools & Workflow', items: ['Agile/Scrum', 'API Testing', 'Technical Documentation', 'AI-assisted Dev Tools'] },
];

const EngineeringPractices = () => {
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
        Engineering & Workflow
      </Text>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {practices.map((group) => (
          <Box key={group.category}>
            <Text 
              size="xs" 
              weight={700} 
              color={isDark ? '#A1A1AA' : '#71717A'} 
              sx={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}
              mb={8}
            >
              {group.category}
            </Text>
            <Group spacing={8}>
              {group.items.map((item) => (
                <Badge
                  key={item}
                  variant="outline"
                  sx={{
                    textTransform: 'none',
                    fontWeight: 500,
                    borderRadius: '6px',
                    borderColor: isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.12)',
                    color: isDark ? '#A1A1AA' : '#52525B',
                    padding: '6px 10px',
                    height: 'auto',
                    backgroundColor: isDark ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.01)',
                  }}
                >
                  {item}
                </Badge>
              ))}
            </Group>
          </Box>
        ))}
      </Box>
    </Paper>
  );
};

export default EngineeringPractices;
