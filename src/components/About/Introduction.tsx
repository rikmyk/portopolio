import { Center, Grid, Text } from '@mantine/core';
import { useEffect, useState } from 'react';

import { introduction } from '@/data/About/introdution';

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

  // Gunakan null saat SSR, baru isi setelah mount di client
  // → mencegah hydration mismatch karena new Date() berbeda di server & client
  const [age, setAge] = useState<number | null>(null);

  useEffect(() => {
    setAge(calculateAge(birthDate.year, birthDate.month, birthDate.day));
  }, [birthDate.year, birthDate.month, birthDate.day]);

  return (
    <Grid>
      <Grid.Col xs={12} md={3} orderXs={1} orderMd={2}>
        <Center sx={{ paddingTop: '1.5rem' }}>
          <RoundedImage
            src='/images/myface.jpg'
            width={150}
            height={150}
          />
        </Center>
      </Grid.Col>
      <Grid.Col xs={12} md={9} orderXs={2} orderMd={1}>
        <Text size={42} weight='bold'>
          About Me
        </Text>
        <Text
          component='span'
          variant='gradient'
          size={26}
          weight='bold'
          gradient={{ from: 'indigo', to: 'red', deg: 45 }}
        >
          Rico Maykel Erawanto
        </Text>
        {paragraphs.map((para, idx) => {
          // Paragraph dengan umur dinamis
          if (typeof para === 'object' && 'beforeAge' in para) {
            return (
              <Text size='md' my='sm' key={idx}>
                {para.beforeAge}
                <Text component='span' weight='bold'>
                  {age ?? '...'}
                </Text>
                {para.afterAge}
              </Text>
            );
          }

          // Paragraph biasa (string)
          return (
            <Text size='md' my='sm' key={idx}>
              {para}
            </Text>
          );
        })}
      </Grid.Col>
    </Grid>
  );
};

export default Introduction;
