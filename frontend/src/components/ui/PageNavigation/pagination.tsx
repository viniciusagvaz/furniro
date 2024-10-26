import { useState, useEffect } from "react";
import { Button } from "../Buttons"

export const Pagination = ({ pages, onPageChange, limit }) => {
const [, setCurrentPage] = useState(1);
  const handleCurrentPage = (index) => {
    setCurrentPage(index + 1);
    onPageChange(index + 1);
  };

  useEffect(() => {
    setCurrentPage(1);
    onPageChange(1); 
  }, [limit, onPageChange]);

  return (
    Array.from({ length: pages }, (_, index) => (
      <Button
        key={index}
        variant="navigation"
        onClick={() => handleCurrentPage(index)}
      >
        {index + 1}
      </Button>
    ))
  )
}