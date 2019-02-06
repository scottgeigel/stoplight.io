import * as React from 'react';

export interface IQuote {
  quote: string;
  author: string;
  role: string;
}

export const Quote: React.FunctionComponent<IQuote> = ({ quote, author, role }) => {
  return (
    <div className="mt-8 p-8 shadow rounded bg-grey-lighter relative">
      <p className="leading-loose pb-6 italic text-lg">{`"${quote}"`}</p>

      {(author || role) && (
        <div className="font-bold">
          <div className="pb-1 uppercase text-green">{author}</div>
          <div>{role}</div>
        </div>
      )}
    </div>
  );
};
