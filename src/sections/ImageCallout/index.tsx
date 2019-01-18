import cn from 'classnames';
import * as React from 'react';

import { CallToAction, ICallToAction } from 'src/components/CallToAction';
import { Section } from 'src/components/Section';

export interface IImageCallout {
  title: string;
  cta: ICallToAction;
  description: string;
  image?: string;
  rootClassName: string;
}

export const ImageCallout: React.FunctionComponent<IImageCallout> = ({
  title,
  cta,
  description,
  image,
  rootClassName,
}) => {
  if (!image && !title && !description) {
    return null;
  }

  return (
    <Section
      id={title}
      rootClassName={cn(rootClassName, 'flex', 'md:pr-0 md:text-center')}
      paddingClassName={'pt-48 pb-40 md:pt-40 md:pb-24'}
    >
      <div className="flex-1 w-1/2 md:w-100 text-center items-end md:items-center pr-20 md:pr-0 md:text-center">
        <div className="max-w-md flex flex-col ml-auto">
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
          <div
            className="absolute pin bg-left-top bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${image})`, top: -60, bottom: -200 }}
          />
        </div>
      )}
    </Section>
  );
};
