import React, { useState } from "react";
import Button from "@mui/material/Button";
import "./paging.css";
import Pagination from "@mui/material/Pagination";

const Paging = ({}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => {
    setCurrentPage((page) => page + 1);
  };

  const previousPage = () => {
    setCurrentPage((page) => page - 1);
  };

  const changePage = (event) => {
    const pageNumber = Number(event.target.textContent);
    console.log(pageNumber);
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="pagination">
        <div className="pagination-buttons">
          <Pagination count={10} variant="outlined" onClick={changePage} />
        </div>
        <Button
          variant="text"
          onClick={previousPage}
          className={`prev ${currentPage === 1 ? "disabled" : ""}`}
        >
          Previous
        </Button>
        <Button onClick={nextPage}>Next</Button>
      </div>
    </div>
  );
};

export default Paging;
