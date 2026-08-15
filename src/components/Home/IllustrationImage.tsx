import { Grid, Group } from '@mantine/core';
import Image from 'next/image';
import React, { FC } from 'react';

interface Props {
  src: string;
  width: number;
  height: number;
}

const IllustrationImage: FC<Props> = ({ src }) => {
  return (
    <Grid.Col sm={6} orderSm={2}>
      <Group position='center'>
        <div className='hero-avatar-wrapper'>
          {/* Dual Orbital Rings (Visual stroke circles) */}
          <div className='orbit-ring-inner' />
          <div className='orbit-ring-outer' />

          {/* Outer Orbit Track (Rotates Clockwise 360 degrees loop) */}
          <div className='orbit-track-outer'>
            <div className='stitch-badge badge-top-react' title='React'>
              <div className='orbit-keep-upright-outer'>
                <Image src='/images/tech/react.svg' alt='React' width={24} height={24} />
              </div>
            </div>
            <div className='stitch-badge badge-right-gh' title='Next.js'>
              <div className='orbit-keep-upright-outer'>
                <Image src='/images/tech/next.svg' alt='Next.js' width={24} height={24} style={{ filter: 'brightness(0) invert(1)' }} />
              </div>
            </div>
            <div className='stitch-badge badge-bottom-react' title='Docker'>
              <div className='orbit-keep-upright-outer'>
                <Image src='/images/tech/docker.svg' alt='Docker' width={24} height={24} />
              </div>
            </div>
            <div className='stitch-badge badge-left-js' title='Go (Golang)'>
              <div className='orbit-keep-upright-outer'>
                <Image src='/images/tech/golang.svg' alt='Go' width={26} height={26} />
              </div>
            </div>
          </div>

          {/* Inner Orbit Track (Rotates Counter-Clockwise 360 degrees loop) */}
          <div className='orbit-track-inner'>
            <div className='stitch-badge badge-right-top-ts' title='PostgreSQL'>
              <div className='orbit-keep-upright-inner'>
                <Image src='/images/tech/postgres.svg' alt='PostgreSQL' width={24} height={24} />
              </div>
            </div>
            <div className='stitch-badge badge-right-bottom-js' title='Linux'>
              <div className='orbit-keep-upright-inner'>
                <Image src='/images/tech/linux.svg' alt='Linux' width={24} height={24} />
              </div>
            </div>
            <div className='stitch-badge badge-bottom-left-ts' title='CI/CD'>
              <div className='orbit-keep-upright-inner'>
                <Image src='/images/tech/ci-cd.svg' alt='CI/CD' width={24} height={24} style={{ filter: 'brightness(0) invert(1)' }} />
              </div>
            </div>
            <div className='stitch-badge badge-top-left-re' title='TypeScript'>
              <div className='orbit-keep-upright-inner'>
                <Image src='/images/tech/ts.svg' alt='TypeScript' width={24} height={24} />
              </div>
            </div>
          </div>

          {/* Square Glass Card */}
          <div className='hero-glass-square-card'>
            {/* Circular Neon Halo Ring */}
            <div className='avatar-halo-ring'>
              <Image
                src={src}
                alt='Rico Maykel Erawanto'
                width={222}
                height={222}
                priority
                style={{ borderRadius: '50%', objectFit: 'cover', display: 'block', width: '100%', height: '100%' }}
              />
            </div>
          </div>
        </div>
      </Group>
    </Grid.Col>
  );
};

export default IllustrationImage;
