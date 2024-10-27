import { useState } from "react";
import { Button } from "../Buttons";

export const Pagination = ({ pages, onPageChange }) => {
  const [, setCurrentPage] = useState(1);
  const handleCurrentPage = (index) => {
    setCurrentPage(index + 1);
    onPageChange(index + 1);
  };

  return Array.from({ length: pages }, (_, index) => (
    <Button
      key={index}
      variant="navigation"
      onClick={() => handleCurrentPage(index)}
    >
      {index + 1}
    </Button>
  ));
};
