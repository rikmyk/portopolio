import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => {
  const isDark = theme.colorScheme === 'dark';
  return {
    card: {
      backgroundColor: isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(255, 255, 255, 0.45)',
      backdropFilter: 'blur(16px) saturate(120%)',
      WebkitBackdropFilter: 'blur(16px) saturate(120%)',
      border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.04)'}`,
      borderTop: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.7)'}`,
      borderRadius: theme.radius.lg,
      boxShadow: isDark ? '0 8px 30px rgba(0, 0, 0, 0.3)' : '0 8px 30px rgba(0, 0, 0, 0.02)',
      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
      '&:hover': {
        backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.65)',
        borderColor: isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.08)',
        borderTopColor: isDark ? 'rgba(255, 255, 255, 0.25)' : 'rgba(255, 255, 255, 0.9)',
        transform: 'translateY(-6px)',
        boxShadow: isDark ? '0 12px 35px rgba(0, 0, 0, 0.45)' : '0 12px 35px rgba(0, 0, 0, 0.04)',
      },
    },
    gradientText: {
      backgroundImage: `linear-gradient(135deg, #3B82F6 0%, #8B5CF6 50%, #EC4899 100%)`,
      color: 'transparent',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      fontWeight: 700,
      fontSize: 20,
      '@media (min-width: 768px)': {
        fontSize: 24,
        textAlign: 'left',
      },
      lineHeight: 1.2,
      marginTop: 2,
    },
    bentoItem: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      justifyContent: 'space-between',
    }
  };
});
