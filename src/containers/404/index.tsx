import * as React from 'react';
import { Head } from 'react-static';

import { Button } from 'src/components/Button';
import { Image } from 'src/components/Image';

export const NotFound: React.FunctionComponent = () => {
  return (
    <div className="bg-black flex items-center justify-center py-64 px-4">
      <Head>
        <title>Page Not Found</title>
      </Head>
      <div className="text-center w-96 text-white">
        <h1 className="pb-4">404</h1>

        <div className="text-2xl leading-normal font-default opacity-75">This page doesn't exist!</div>

        <div className="py-8">
          <Image className="h-64" src="//thecatapi.com/api/images/get?format=src&type=gif" />
        </div>

        <Button href="/">Take me home</Button>
      </div>
    </div>
  );
};

export default NotFound;
