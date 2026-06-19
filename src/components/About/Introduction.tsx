import { Box, Center, Grid, Paper, Text, useMantineColorScheme } from '@mantine/core';
import { useEffect, useState } from 'react';

import { introduction } from '@/data/About/introdution';
import { useStyles } from '@/hooks/useStyles';

import RoundedImage from './RoundedImage';

/** Hitung umur berdasarkan tanggal lahir.
 *  Umur bertambah tepat pada hari ulang tahun (day & month). */
const calculateAge = (year: number, month: number, day: number): number => {
  const today = new Date();
  let age = today.getFullYear() - year;

  // Belum ulang tahun di tahun ini → kurangi 1
  const birthThisYear = new Date(today.getFullYear(), month - 1, day);
  if (today < birthThisYear) {
    age -= 1;
  }

  return age;
};

const Introduction = () => {
  const { paragraphs, birthDate } = introduction;
  const { classes } = useStyles();
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';

  // Gunakan null saat SSR, baru isi setelah mount di client
  // → mencegah hydration mismatch karena new Date() berbeda di server & client
  const [age, setAge] = useState<number | null>(null);

  useEffect(() => {
    setAge(calculateAge(birthDate.year, birthDate.month, birthDate.day));
  }, [birthDate.year, birthDate.month, birthDate.day]);

  return (
    <Paper className={classes.card} p="xl" radius="lg">
      <Grid align="center" gutter="xl">
        <Grid.Col xs={12} md={9} orderXs={2} orderMd={1}>
          <Text 
            size={36} 
            weight={800} 
            sx={{
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
            }}
            color={isDark ? '#F5F5F7' : '#1A1A1A'}
          >
            About Me
          </Text>
          <Text
            component='span'
            variant='gradient'
            size={22}
            weight='bold'
            gradient={{ from: '#3B82F6', to: '#EC4899', deg: 45 }}
            sx={{ display: 'block', marginTop: 4, marginBottom: 12 }}
          >
            Rico Maykel Erawanto
          </Text>
          {paragraphs.map((para, idx) => {
            // Paragraph dengan umur dinamis
            if (typeof para === 'object' && 'beforeAge' in para) {
              return (
                <Text size='md' my='md' key={idx} sx={{ color: isDark ? '#A1A1AA' : '#52525B', lineHeight: 1.75 }}>
                  {para.beforeAge}
                  <Text component='span' weight='bold' color={isDark ? '#F5F5F7' : '#1A1A1A'}>
                    {age ?? '...'}
                  </Text>
                  {para.afterAge}
                </Text>
              );
            }

            // Paragraph biasa (string)
            return (
              <Text size='md' my='md' key={idx} sx={{ color: isDark ? '#A1A1AA' : '#52525B', lineHeight: 1.75 }}>
                {para}
              </Text>
            );
          })}
        </Grid.Col>
        <Grid.Col xs={12} md={3} orderXs={1} orderMd={2}>
          <Center sx={{ position: 'relative' }}>
            <RoundedImage
              src='/images/myface.jpg'
              width={150}
              height={150}
            />
          </Center>
        </Grid.Col>
      </Grid>
    </Paper>
  );
};

export default Introduction;
