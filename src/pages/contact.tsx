import { Text, useMantineColorScheme } from '@mantine/core';
import { NextSeo } from 'next-seo';

import ContactList from '@/components/Contact/ContactList';
// import MessageBox from '@/components/Contact/MessageBox';

const Contact = () => {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <>
      <NextSeo title='Contact' />
      <main>
        <Text 
          weight={800}
          sx={{
            fontSize: 42,
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
          }}
          color={isDark ? '#F5F5F7' : '#1A1A1A'}
          mt="xl"
        >
          Contact
        </Text>
        <ContactList isDark={isDark} />
        {/* <MessageBox /> */}
      </main>
    </>
  );
};

export default Contact;
