import * as React from 'react';
import cn from 'classnames';

import Link from '@components/Link';

export interface IPaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;

  color: string;
  backgroundColor: string;
  borderColor: string;

  className?: string;
}

export interface IPageItemProps {
  to: string;
  content: any;
  active?: boolean;
  disabled?: boolean;

  color: string;
  backgroundColor: string;
  borderColor: string;

  className?: string;
}

const Pagination = ({
  basePath = '',
  currentPage = 1,
  totalPages = 1,

  className,
  ...colorProps
}: IPaginationProps) => {
  console.log({ totalPages, currentPage });
  if (totalPages === 1) return null;

  const pageItems: any[] = [
    <PageItem
      key="previous"
      to={`${basePath}/page/${currentPage - 1}`}
      content="<"
      className="rounded-l-lg"
      disabled={currentPage === 1}
      {...colorProps}
    />,
  ];

  let pageStart = currentPage - 2;
  const pageEnd = currentPage + 2;
  while (pageStart < pageEnd) {
    if (pageStart > 0 && pageStart <= totalPages) {
      pageItems.push(
        <PageItem
          to={`${basePath}/page/${pageStart}`}
          content={pageStart}
          active={pageStart === currentPage}
          {...colorProps}
        />
      );
    }

    pageStart += 1;
  }

  pageItems.push(
    <PageItem
      key="next"
      to={`${basePath}/page/${currentPage + 1}`}
      content=">"
      className="rounded-r-lg"
      disabled={currentPage === totalPages}
      {...colorProps}
    />
  );

  return <ul className={`inline-flex list-reset font-semibold block`}>{pageItems}</ul>;
};

export const PageItem = ({
  to,
  content,
  active,
  disabled,
  className,
  color = 'blue-light',
  backgroundColor = 'white',
  borderColor = 'grey-light',
}: IPageItemProps) => {
  return (
    <Link
      to={to}
      disabled={disabled || active}
      className={cn(
        className,
        'px-3 py-2 -ml-px border',
        disabled
          ? `cursor-not-allowed text-grey-dark bg-${backgroundColor} border-${borderColor}`
          : active
          ? `cursor-default text-${backgroundColor} bg-${color} border-${color}`
          : `cursor-pointer text-${color} bg-${backgroundColor} border-${borderColor}`
      )}
    >
      {content}
    </Link>
  );
};

export default Pagination;
