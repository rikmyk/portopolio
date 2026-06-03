import { NextSeo } from 'next-seo';

import Education from '@/components/About/Education';
import Introduction from '@/components/About/Introduction';
import WorkExperience from '@/components/About/WorkExperience';

const About = () => {
  return (
    <>
      <NextSeo title='About Me' />
      <Introduction />
      <Education />
      <WorkExperience />
    </>
  );
};

export default About;
