import Head from '@/components/meta/Head';

import { getBaseUrl } from '@/helpers/url';

import IndexContents from '@/contents/index';

function Index() {
  return (
    <>
      <Head
        title="Prem Shinde · Full-Stack MERN Developer"
        description="Welcome to my portfolio! Explore my projects and insights as a Full-Stack MERN Developer passionate about crafting intuitive, clean, and modern web designs."
        ogImage={`${getBaseUrl()}/assets/images/og-image.png`}
        overrideTitle
      />
      <IndexContents />
    </>
  );
}

export default Index;
