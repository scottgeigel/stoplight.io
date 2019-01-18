import * as React from 'react';

export interface IInfo {
  title: string;
  image: string;
  description: string;
}

export const Info: React.FunctionComponent<IInfo> = ({ title, image, description }) => {
  if (!image && !title && !description) return null;

  return (
    <div className="p-8 rounded bg-white shadow">
      {image && <img src={image} alt={title} />}

      {title && <div className="text-muted uppercase">{title}</div>}

      {description && <div className="pt-4" dangerouslySetInnerHTML={{ __html: description }} />}
    </div>
  );
};
