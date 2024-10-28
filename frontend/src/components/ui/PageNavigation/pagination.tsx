import { Button } from "../Buttons";


interface PaginationProps {
  pages: number;
  onPageChange: (newPage: number) => void;
  currentPage: number; 
}


export const Pagination = ({ pages, onPageChange, currentPage }: PaginationProps ) => {
  const handleCurrentPage = (index) => {
    onPageChange(index + 1);
  };  

  return Array.from({ length: pages }, (_, index) => (
    <Button
      key={index}
      variant={currentPage === index + 1 ? "active" : "navigation"}
      onClick={() => handleCurrentPage(index)}
    >
      {index + 1}
    </Button>
  ));
};
