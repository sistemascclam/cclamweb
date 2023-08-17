import Layout from "@components/layout";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const DynamicContent = () => {
  const router = useRouter();
  const {
    isReady,
    query: { dynamic, index },
  } = router;

  const [pageProps, setpageProps] = useState({
    title: '',
    description: '',
  });
  
  useEffect(() => {
    setpageProps({
        title: dynamic,
        description: `Description: ${dynamic}`,
    })
  }, [isReady, dynamic, index]);

  return (
    <>
      <Head>
        <title>{pageProps.title}</title>
        <meta name="title" content={pageProps.title} />
        <meta name="description" content={pageProps.description} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageProps.title} />
        <meta property="og:description" content={pageProps.description} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={pageProps.title} />
        <meta property="twitter:description" content={pageProps.description} />
      </Head>
      <main>
        {
            isReady? <>
            <p>{dynamic}</p>
            <p>{index}</p>
            </> : <>Loading....</>
        }
      </main>
    </>
  );
};

export default DynamicContent;
