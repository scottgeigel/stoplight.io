import * as React from 'react';

import { CallToAction, ICallToAction } from 'src/components/CallToAction';
import { Image } from 'src/components/Image';
import { ISection, Section } from 'src/components/Section';

export interface IImageCallout extends ISection {
  title: string;
  cta: ICallToAction;
  description: string;
  image?: string;
}

export const ImageCallout: React.FunctionComponent<IImageCallout> = ({ title, cta, description, image }) => {
  if (!image && !title && !description) {
    return null;
  }

  return (
    <Section id={title} className={'flex md:pr-0 md:text-center pt-48 pb-40 md:pt-40 md:pb-24'} noPadding>
      <div className="flex-1 w-1/2 md:w-100 text-center items-end md:items-center pr-20 md:pr-0 md:text-center">
        <div className="max-w-md flex flex-col ml-auto md:m-auto">
          <h2 className="text-secondary mb-10 text-3xl text-center">{title}</h2>

          <div
            className="mb-12 pb-12 leading-loose text-lg border-b border-darken-50 md:border-none sm:px-2"
            dangerouslySetInnerHTML={{ __html: description }}
          />

          {cta && <CallToAction {...cta} className="md:mx-auto" />}
        </div>
      </div>

      {image && (
        <div className="flex-1 w-1/2 md:hidden relative">
          <Image
            src={image}
            className="absolute pin bg-left-top bg-cover bg-no-repeat"
            style={{ top: -60, bottom: -200 }}
            size="lg"
            useDiv
          />
        </div>
      )}
    </Section>
  );
};
