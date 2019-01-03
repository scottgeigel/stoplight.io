import React from 'react';
import cn from 'classnames';

import CallToAction from '@components/CallToAction';
import { Section } from '@components/Section';

const ImageSection = ({ title, cta, description, image, rootClassName }) => {
  return (
    <Section
      rootClassName={cn(rootClassName, 'flex', 'md:pr-0 md:text-center')}
      paddingClassName={'pt-48 pb-40 md:pt-40 md:pb-24'}
    >
      <div className="flex flex-col flex-1 w-1/2 md:w-100 text-right items-end md:items-center pr-20 md:pr-0 md:text-center">
        <h2 className={cn('max-w-sm text-secondary text-right mb-10 text-3xl', 'md:text-center')}>{title}</h2>

        <div
          className="mb-12 pb-12 max-w-md leading-loose text-lg border-b border-darken-50 md:border-none sm:px-2"
          dangerouslySetInnerHTML={{ __html: description }}
        />

        {cta && <CallToAction {...cta} className="md:mx-auto" />}
      </div>

      <div className="flex-1 w-1/2 md:hidden relative">
        <div
          className="absolute pin bg-left-top bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${image})`, top: -60, bottom: -200 }}
        />
      </div>
    </Section>
  );
};

export default ImageSection;
