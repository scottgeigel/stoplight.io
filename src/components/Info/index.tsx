import * as React from 'react';
import { Link } from 'src/components/Link';

export interface IInfoItem {
  name: string;
  value: string;
  href: string;
}

export interface IInfo {
  title: string;
  image: string;
  description: string;
  items: IInfoItem[];
}

export const Info: React.FunctionComponent<IInfo> = ({ title, image, description, items = [] }) => {
  if (!image && !title && !description && !items.length) return null;

  return (
    <div className="p-8 rounded bg-white shadow">
      {(image || title) && (
        <div className="text-center">
          <div className="p-8">{image ? <img src={image} alt={title} /> : <h1>{title}</h1>}</div>
        </div>
      )}

      {description && <div className="pt-4">{description}</div>}

      {items.length && (
        <div className="pt-4">
          {items.map((item, index) => (
            <InfoItem key={index} {...item} />
          ))}
        </div>
      )}
    </div>
  );
};

export const InfoItem: React.FunctionComponent<IInfoItem> = ({ name, value, href }) => {
  if (!value && !href) {
    return null;
  }

  return (
    <div className="flex pb-2">
      {name && <div className="w-1/3 font-bold">{name}:</div>}

      {href ? <Link to={href}>{value || href}</Link> : <div>{value}</div>}
    </div>
  );
};
