import React from 'react';

const Testimonial = ({ image, quote, author, company, role }, key) => {
  return (
    <div key={key} className="w-1/2 sm:w-full flex px-14 pb-20 sm:px-0 sm:px-10">
      <div className="testimonial-card max-w-lg w-full lg:flex shadow-lg mx-auto items-stretch bg-white">
        <div className="flex flex-col justify-center sm:items-center sm:pt-8">
          <div
            className="-ml-14 sm:ml-0 rounded-full bg-cover shadow-sm border-grey border h-40 w-40"
            style={{
              backgroundImage: `url(${image})`,
            }}
            alt={author}
          />
        </div>

        <div className="p-8 flex flex-col justify-center leading-normal">
          <p className="text-grey-darker leading-loose">{quote}</p>

          <p className="font-bold mt-4">
            {author}
            {company && `, ${company}`}
            {role && `, ${role}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
