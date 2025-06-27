import clsx from 'clsx';

import GeneratePagination from 'utils/index';
import { Dispatch, SetStateAction } from 'react';
import Button from 'components/atoms/a-button';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

function PaginationNumber({
  page,
  handleClick,
  isActive,
  position,
}: {
  page: number | string;
  handleClick: (page: number | string) => void;
  position?: 'first' | 'last' | 'middle' | 'single';
  isActive: boolean;
}) {
  const className = clsx('flex size-10 items-center justify-center rounded-md border text-sm', {
    'z-10 bg-[#783593] border-[#783593] text-white': isActive,
    'hover:bg-gray-100': !isActive && position !== 'middle',
    'text-gray-300': position === 'middle',
  });
  return isActive || position === 'middle' ? (
    <Button
      btnType="primary"
      type="button"
      label={page}
      className={className}
      handleClick={() => handleClick(page)}
    />
  ) : (
    <Button
      label={page}
      type="button"
      className={className}
      handleClick={() => handleClick(page)}
    />
  );
}

function PaginationArrow({
  handleClick,
  direction,
  isDisabled,
}: {
  handleClick: (page: number | string) => void;
  direction: 'left' | 'right';
  isDisabled?: boolean;
}) {
  const className = clsx('flex size-10 items-center justify-center rounded-md border', {
    'pointer-events-none text-gray-300': isDisabled,
    'hover:bg-gray-100': !isDisabled,
    'mr-2 md:mr-4': direction === 'left',
    'ml-2 md:ml-4': direction === 'right',
  });

  const icon =
    direction === 'left' ? (
      <FaArrowLeft
        className={clsx('w-4', {
          'pointer-events-none text-gray-300': isDisabled,
        })}
      />
    ) : (
      <FaArrowRight
        className={clsx('w-4', {
          'pointer-events-none text-gray-300': isDisabled,
        })}
      />
    );

  return isDisabled ? (
    <div className={className}>{icon}</div>
  ) : (
    <Button
      className={className}
      label={icon}
      type="button"
      handleClick={() => handleClick(direction === 'left' ? 'prev' : 'next')}
    />
  );
}

export default function Pagination({
  page,
  onPageChange,
  totalCount,
}: {
  page: number;
  onPageChange: Dispatch<SetStateAction<number>>;
  totalCount: number;
}) {
  // intentionally hardcode the number of rows to 10. do not change!!!!
  const totalPages = Math.ceil(Number(totalCount) / 10);
  const currentPage = page || 1;

  const allPages = GeneratePagination(currentPage, totalPages);
  const handlePage = (pageNumber: number | string) => {
    onPageChange(Number(pageNumber));
  };
  if (!totalCount) {
    return null;
  }

  return (
    <>
      <PaginationArrow
        direction="left"
        handleClick={() => handlePage(currentPage - 1)}
        isDisabled={currentPage <= 1}
      />
      <div className="flex space-x-2">
        {allPages.map((pageEl, index) => {
          let position: 'first' | 'last' | 'single' | 'middle' | undefined;

          if (index === 0) position = 'first';
          if (index === allPages.length - 1) position = 'last';
          if (allPages.length === 1) position = 'single';
          if (pageEl === '...') position = 'middle';

          return (
            <PaginationNumber
              key={pageEl}
              handleClick={() => handlePage(pageEl)}
              page={pageEl}
              position={position}
              isActive={currentPage === pageEl}
            />
          );
        })}
      </div>

      <PaginationArrow
        direction="right"
        handleClick={() => handlePage(currentPage + 1)}
        isDisabled={currentPage >= totalPages}
      />
    </>
  );
}
