import '@/styles/globals.css';

import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { Rubik } from '@next/font/google';
import { Worker } from '@react-pdf-viewer/core';
import { AnimatePresence, domAnimation, LazyMotion, m } from 'framer-motion';
import { Provider } from 'jotai';
import type { AppProps } from 'next/app';
import { Router } from 'next/router';
import { DefaultSeo } from 'next-seo';
import NProgress from 'nprogress';
import { FC, useEffect } from 'react';

import { variants } from '@/animations/variants';
import Layout from '@/components/Templates/Layout';
import { metaTagsData } from '@/data/metaTags';
import messageForHackers from '@/utils/messageForHackers';

NProgress.configure({ showSpinner: false });

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const rubik = Rubik({ subsets: ['latin'] });

const MyApp: FC<AppProps> = ({ Component, pageProps, router }) => {
  const colorScheme: ColorScheme = 'dark';
  const toggleColorScheme = () => undefined;

  useEffect(() => {
    messageForHackers();
  }, []);

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme,
          fontFamily: rubik.style.fontFamily,
          colors: {
            dark: [
              '#F5F5F7', // 0: primary text
              '#A1A1AA', // 1: secondary text
              '#71717A', // 2
              '#52525B', // 3
              '#27272A', // 4
              'rgba(139, 92, 246, 0.08)', // 5: surface/card
              'rgba(139, 92, 246, 0.12)', // 6
              'rgba(255, 255, 255, 0.08)', // 7
              '#050510', // 8: primary background
              '#030308', // 9
            ],
            violet: [
              '#f5f0ff',
              '#ede9fe',
              '#ddd6fe',
              '#c4b5fd',
              '#a78bfa',
              '#8b5cf6', // primary violet
              '#7c3aed',
              '#6d28d9',
              '#5b21b6',
              '#4c1d95',
            ],
          },
          primaryColor: 'violet',
        }}
      >
        <NotificationsProvider>
          <Provider>
            <Layout>
              <style>
                {`html {
                color-scheme: ${colorScheme}
              }`}
              </style>
              <LazyMotion features={domAnimation}>
                <AnimatePresence
                  mode='wait'
                  initial={false}
                  onExitComplete={() => window.scrollTo(0, 0)}
                >
                  <m.div
                    key={router.asPath}
                    variants={variants}
                    initial='hidden'
                    animate='enter'
                    exit='exit'
                    transition={{ ease: 'easeInOut', duration: 0.3 }}
                  >
                    <DefaultSeo
                      titleTemplate='%s - Rico Maykel Erawanto'
                      defaultTitle={metaTagsData.title}
                      description={metaTagsData.deskripsi}
                      twitter={{
                        cardType: 'summary_large_image',
                        site: '@tfkhdyt142',
                        handle: '@tfkhdyt142',
                      }}
                      openGraph={{
                        type: 'profile',
                        title: metaTagsData.title,
                        description: metaTagsData.deskripsi,
                        images: [
                          {
                            url:
                              metaTagsData.link + '/images/thumbnail-630.png',
                            width: 1120,
                            height: 630,
                            alt: 'thumbnail 630p',
                            type: 'image/png',
                          },
                          {
                            url: metaTagsData.link + metaTagsData.thumbnail,
                            width: 1280,
                            height: 720,
                            alt: 'thumbnail 720p',
                            type: 'image/png',
                          },
                        ],
                        site_name: metaTagsData.title,
                      }}
                    />
                    <Worker workerUrl='/workers/pdf.worker.min.js'>
                      <a rel="me" href="https://fosstodon.org/@rcomykl" style={{ display: 'none' }}>Hamyunz1</a>
                      <Component {...pageProps} />
                    </Worker>
                  </m.div>
                </AnimatePresence>
              </LazyMotion>
            </Layout>
          </Provider>
        </NotificationsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export default MyApp;
