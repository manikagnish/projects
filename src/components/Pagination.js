import { useState } from "react";

const Pagination = ({ currentPage, totalProjects, paginate }) => {
  const pageNumbers = [];

  for (let i = 0; i < totalProjects; i++) {
    pageNumbers.push(i);
  }

  const [active, setActive] = useState(-1);

  return (
    <nav className="pagination-nav">
      <ul className="pagination">
        <li className="page-item">
          <a
            onClick={() => {
              paginate(currentPage > 0 ? currentPage - 1 : currentPage);
              setActive(currentPage - 1);
            }}
            href="/projects/#"
            className="page-link"
          >
            &larr; Prev
          </a>
        </li>
        {pageNumbers.map((number, index) => (
          <li key={number} className="page-item">
            <a
              onClick={() => {
                paginate(number);
                setActive(index);
              }}
              href="/projects/#"
              className={active === index ? "page-link active" : "page-link"}
            >
              {number + 1}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a
            onClick={() => {
              paginate(
                currentPage + 1 < totalProjects ? currentPage + 1 : currentPage
              );
              setActive(currentPage + 1);
            }}
            href="/projects/#"
            className="page-link"
          >
            next &rarr;
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
