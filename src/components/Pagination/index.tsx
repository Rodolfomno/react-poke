type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

import {
  PaginationWrapper,
  NavButton,
  Pages,
  PageButton,
} from "./styles";

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  return (
    <PaginationWrapper>
      <NavButton
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        ← Anterior
      </NavButton>

      <Pages>
        {Array.from({ length: totalPages }).map((_, index) => {
          const page = index + 1;

          return (
            <PageButton
              key={page}
              active={page === currentPage}
              onClick={() => onPageChange(page)}
            >
              {page}
            </PageButton>
          );
        })}
      </Pages>

      <NavButton
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Próximo →
      </NavButton>
    </PaginationWrapper>
  );
}
