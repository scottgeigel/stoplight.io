import cn from 'classnames';
import * as React from 'react';

import { Container } from 'src/components/Container';
import { Link } from 'src/components/Link';

export interface IPagination {
  currentPage: number;
  totalPages: number;

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
  // basePath,
  currentPage = 1,
  totalPages = 1,

  className,
}) => {
  if (totalPages <= 1) {
    return null;
  }

  return <Container className="inline-flex list-reset font-semibold block">Pagination</Container>;
};
