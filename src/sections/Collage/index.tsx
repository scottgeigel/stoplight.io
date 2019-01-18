import cn from 'classnames';
import * as React from 'react';

import { Container, IContainer } from 'src/components/Container';
import { IImage, Image } from 'src/components/Image';
import { ISection, Section } from 'src/components/Section';

export interface ICollage {
  images: IImage[];
  id?: ISection['id'];
  bgClassName?: string;
  title?: IContainer['title'];
  cta?: IContainer['cta'];
}

export const Collage: React.FunctionComponent<ICollage> = ({ id, bgClassName, images, title, cta }) => {
  if (!images || !images.length) {
    return null;
  }

  return (
    <Section id={id} bgClassName={bgClassName}>
      <Container title={title} cta={cta}>
        <div className={cn('flex justify-center flex-wrap items-center md:pb-20', { 'pb-32': cta })}>
          {images.map((image, key) => (
            <div key={key} className="sm:w-1/2 sm:p-6 p-8 text-center">
              <Image className="h-24" src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
