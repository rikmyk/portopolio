import '@/styles/globals.css';

import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core';
import { useColorScheme, useHotkeys, useLocalStorage } from '@mantine/hooks';
import { NotificationsProvider } from '@mantine/notifications';
import { AnimatePresence, domAnimation, LazyMotion, m } from 'framer-motion';
import { Provider } from 'jotai';
import type { AppProps } from 'next/app';
import { Router } from 'next/router';
import { DefaultSeo } from 'next-seo';
import NProgress from 'nprogress';

import { variants } from '@/animations/variants';
import Layout from '@/components/Templates/Layout';
import { metaTagsData } from '@/data/metaTags';

NProgress.configure({ showSpinner: false });

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps, router }: AppProps) {
  const preferredColorScheme = useColorScheme();

  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: preferredColorScheme,
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ colorScheme, fontFamily: 'Source Sans Pro, sans-serif' }}
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
                      titleTemplate='%s - Taufik Hidayat'
                      defaultTitle={metaTagsData.title}
                      description={metaTagsData.deskripsi}
                      twitter={{
                        cardType: 'summary_large_image',
                        site: '@tfkhdyt142',
                        handle: '@tfkhdyt142',
                      }}
                      canonical={metaTagsData.link}
                      openGraph={{
                        url: metaTagsData.link,
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
                    <Component {...pageProps} />
                  </m.div>
                </AnimatePresence>
              </LazyMotion>
            </Layout>
          </Provider>
        </NotificationsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default MyApp;
