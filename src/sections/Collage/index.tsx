import * as React from 'react';

import { Container, IContainer } from 'src/components/Container';
import { IImage, Image } from 'src/components/Image';
import { ISection, Section } from 'src/components/Section';

export interface ICollage extends ISection {
  images: IImage[];
  title?: IContainer['title'];
  cta?: IContainer['cta'];
}

export const Collage: React.FunctionComponent<ICollage> = ({ images, title, cta, ...sectionProps }) => {
  if (!images || !images.length) {
    return null;
  }

  return (
    <Section {...sectionProps}>
      <Container title={title} cta={cta}>
        <div className="flex justify-center flex-wrap items-center">
          {images.map((image, key) => (
            <div key={key} className="sm:w-1/2 sm:p-6 p-8 text-center">
              <Image className="h-12" src={image.src} alt={image.alt} size="sm" />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
