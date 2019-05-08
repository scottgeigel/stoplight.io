import cn from 'classnames';
import * as React from 'react';

import { Container } from 'src/components/Container';
import { IImage, Image } from 'src/components/Image';

export interface IHeroImage extends IImage {
  section?: boolean;
  className?: string;
}

export const HeroImage: React.FunctionComponent<IHeroImage> = ({ className, section = true, src, alt }) => {
  if (!src) {
    return null;
  }
  return (
    <section className="md:hidden">
      {
        <Container className="relative text-center" style={{ height: 500 }}>
          <Image className={cn(className, 'rounded-lg')} src={src} alt={alt} size="lg" />
        </Container>
      }
    </section>
  );
};
