import cn from 'classnames';
import * as React from 'react';

import { Container } from 'src/components/Container';
import { Link } from 'src/components/Link';

export interface IPagination {
  path: string;
  currentPage: number;
  totalPages: number;
  enabled: boolean;

  className?: string;
}

export interface IPageItemProps {
  to: string;
  content: any;
  active?: boolean;
  disabled?: boolean;

  className?: string;
}

export const PageItem = ({ to, content, active, disabled, className }: IPageItemProps) => {
  return (
    <Link
      to={to}
      disabled={disabled || active}
      className={cn(
        className,
        'px-3 py-2 -ml-px border',
        disabled
          ? `cursor-not-allowed text-grey-dark bg-white border-grey-light`
          : active
          ? `cursor-default text-white bg-blue-light border-blue-light`
          : `cursor-pointer text-blue-light bg-white border-grey-light`
      )}
    >
      {content}
    </Link>
  );
};

export const Pagination: React.FunctionComponent<IPagination> = ({
  path,
  currentPage = 1,
  totalPages = 1,
  enabled,

  className,
}) => {
  if (totalPages <= 1 || !enabled) {
    return null;
  }

  // previous arrow
  const pageItems: IPageItemProps[] = [
    {
      to: `${path}/page/${currentPage - 1}`,
      content: '<',
      className: 'rounded-l-lg',
      disabled: currentPage === 1,
    },
  ];

  // only show five pages
  let startPage = currentPage - 2;
  const endPage = currentPage + 2;

  while (startPage <= endPage) {
    if (startPage > 0 && startPage <= totalPages) {
      pageItems.push({
        to: `${path}/page/${startPage}`,
        content: startPage,
        active: startPage === currentPage,
      });
    }

    startPage += 1;
  }

  // next arrow
  pageItems.push({
    to: `${path}/page/${currentPage + 1}`,
    content: '>',
    className: 'rounded-r-lg',
    disabled: currentPage === totalPages,
  });

  return (
    <Container className="list-reset font-semibold block text-center">
      {pageItems.map((item, index) => (
        <React.Fragment key={index}>
          <PageItem {...item} />
        </React.Fragment>
      ))}
    </Container>
  );
};
