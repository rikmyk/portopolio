import {
  ActionIcon,
  Box,
  Group,
  Image as MantineImage,
  Modal,
  Paper,
  Text,
  Title,
  Tooltip,
  useMantineColorScheme,
} from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import { BsGithub } from 'react-icons/bs';
import { HiExternalLink } from 'react-icons/hi';
import { MdChevronLeft, MdChevronRight, MdOutlinePhotoLibrary } from 'react-icons/md';

import { Project } from '@/data/Projects/project';
import { skills } from '@/data/Skills/skills';
import { useStyles } from '@/hooks/useStyles';

interface Props {
  project: Project;
}

const ProjectCard: FC<Props> = ({ project }) => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';
  const { classes } = useStyles();
  const [previewOpen, setPreviewOpen] = useState(false);
  const [activeImg, setActiveImg] = useState(0);
  const [mounted, setMounted] = useState(false);

  // Hanya render Modal setelah mount di client → cegah hydration mismatch
  useEffect(() => { setMounted(true); }, []);

  const hasPreview = project.preview && project.preview.length > 0;

  return (
    <>
      {/* Preview Modal — hanya render di client setelah mount */}
      {mounted && hasPreview && (
        <Modal
          opened={previewOpen}
          onClose={() => setPreviewOpen(false)}
          title={
            <Text weight={700} size='lg'>
              {project.name} — Preview
            </Text>
          }
          size='xl'
          centered
          overlayOpacity={0.65}
          overlayBlur={3}
          radius='lg'
          styles={{ modal: { maxHeight: '90vh', display: 'flex', flexDirection: 'column' }, body: { flex: 1, overflow: 'auto' } }}
        >
          {/* Main Image — adaptif landscape & portrait + arrow navigation */}
          <Box sx={{ position: 'relative', width: '100%' }}>
            {/* Arrow Left */}
            {project.preview!.length > 1 && (
              <ActionIcon
                onClick={() => setActiveImg((prev) => Math.max(prev - 1, 0))}
                disabled={activeImg === 0}
                variant='filled'
                color='violet'
                radius='xl'
                size='xl'
                sx={{
                  position: 'absolute',
                  left: 8,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 10,
                  opacity: activeImg === 0 ? 0.3 : 0.85,
                  transition: 'opacity 0.2s, transform 0.15s',
                  '&:not(:disabled):hover': {
                    opacity: 1,
                    transform: 'translateY(-50%) scale(1.1)',
                  },
                }}
              >
                <MdChevronLeft size={28} />
              </ActionIcon>
            )}

            {/* Main Image */}
            <Box
              sx={{
                width: '100%',
                maxHeight: '65vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 8,
                overflow: 'hidden',
                background: 'rgba(0,0,0,0.05)',
              }}
            >
              <MantineImage
                src={project.preview![activeImg]}
                alt={`${project.name} preview ${activeImg + 1}`}
                radius='md'
                fit='contain'
                withPlaceholder
                styles={{
                  image: {
                    maxHeight: '65vh',
                    width: 'auto',
                    maxWidth: '100%',
                    objectFit: 'contain',
                  },
                }}
              />
            </Box>

            {/* Arrow Right */}
            {project.preview!.length > 1 && (
              <ActionIcon
                onClick={() => setActiveImg((prev) => Math.min(prev + 1, project.preview!.length - 1))}
                disabled={activeImg === project.preview!.length - 1}
                variant='filled'
                color='violet'
                radius='xl'
                size='xl'
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 10,
                  opacity: activeImg === project.preview!.length - 1 ? 0.3 : 0.85,
                  transition: 'opacity 0.2s, transform 0.15s',
                  '&:not(:disabled):hover': {
                    opacity: 1,
                    transform: 'translateY(-50%) scale(1.1)',
                  },
                }}
              >
                <MdChevronRight size={28} />
              </ActionIcon>
            )}
          </Box>

          {/* Thumbnail Strip */}
          {project.preview!.length > 1 && (
            <Group mt='md' spacing='xs' position='center'>
              {project.preview!.map((img, i) => (
                <Box
                  key={i}
                  onClick={() => setActiveImg(i)}
                  sx={{
                    cursor: 'pointer',
                    border: i === activeImg ? '2px solid #7950f2' : '2px solid transparent',
                    borderRadius: 8,
                    overflow: 'hidden',
                    width: 72,
                    height: 72,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(0,0,0,0.05)',
                    flexShrink: 0,
                    opacity: i === activeImg ? 1 : 0.6,
                    transition: 'opacity 0.2s, border-color 0.2s',
                    '&:hover': { opacity: 1 },
                  }}
                >
                  <MantineImage
                    src={img}
                    alt={`thumb ${i + 1}`}
                    fit='contain'
                    height={68}
                    width={68}
                    withPlaceholder
                    styles={{ image: { objectFit: 'contain' } }}
                  />
                </Box>
              ))}
            </Group>
          )}

          {/* Counter */}
          <Text align='center' size='sm' color='dimmed' mt='xs'>
            {activeImg + 1} / {project.preview!.length}
          </Text>
        </Modal>
      )}

      <Paper
        key={project.name}
        shadow='sm'
        radius='lg'
        p='xl'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
        }}
        className={classes.card}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'start',
            justifyContent: 'space-between',
          }}
        >
          <Title order={3}>{project.name}</Title>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 4,
            }}
          >
            {/* Preview Button */}
            {hasPreview && (
              <Tooltip label='View Preview' withArrow position='top'>
                <ActionIcon
                  color='violet'
                  variant='light'
                  size='lg'
                  onClick={() => { setActiveImg(0); setPreviewOpen(true); }}
                  className={`umami--click--${project.name.replaceAll(' ', '-')}-Preview`}
                >
                  <MdOutlinePhotoLibrary size={22} />
                </ActionIcon>
              </Tooltip>
            )}

            {project.link.github && (
              <Link href={project.link.github} target='_blank'>
                <Box
                  className={`umami--click--${project.name.replaceAll(
                    ' ',
                    '-'
                  )}-Source_Code`}
                  title='Source Code'
                >
                  <ActionIcon color={dark ? undefined : 'dark'} size='lg'>
                    <BsGithub size={24} />
                  </ActionIcon>
                </Box>
              </Link>
            )}
            {project.link.demo && (
              <Link href={project.link.demo} target='_blank'>
                <Box
                  className={`umami--click--${project.name.replaceAll(
                    ' ',
                    '-'
                  )}-Demo`}
                  title='Demo'
                >
                  <ActionIcon
                    component='a'
                    target='_blank'
                    color={dark ? undefined : 'dark'}
                    size='lg'
                  >
                    <HiExternalLink size={24} />
                  </ActionIcon>
                </Box>
              </Link>
            )}
          </Box>
        </Box>
        <Text my='md' sx={{ flexGrow: 2 }}>
          {project.desc}
        </Text>
        <Group spacing='xs'>
          {skills
            .filter((skill) => project.tech.includes(skill.name))
            .map((skill) => (
              <Box
                key={skill.name}
                sx={{ position: 'relative', height: 25, width: 25 }}
                title={skill.name}
              >
                <Image
                  src={`/images/tech/${skill.icon}`}
                  alt={skill.name}
                  fill
                  style={{ pointerEvents: 'none', objectFit: 'contain' }}
                />
              </Box>
            ))}
        </Group>
      </Paper>
    </>
  );
};

export default ProjectCard;
