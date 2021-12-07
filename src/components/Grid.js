import { useState } from "react";
import Card from "./Card";
import Pagination from "./Pagination";
import { cardContent } from "../cardContent";

export default function Grid() {
  const projects = cardContent;
  const [pageNumber, setPageNumber] = useState(0);

  const projectsPerPage = 9;
  const pagesVisited = pageNumber * projectsPerPage;

  const displayProjects = projects
    .slice(pagesVisited, pagesVisited + projectsPerPage)
    .map((project) => (
      <Card
        key={project.id}
        title={project.title}
        thumbnail={project.thumbnail}
        description={project.description}
        github={project.github}
        website={project.website}
      />
    ));

  const pageCount = Math.ceil(projects.length / projectsPerPage);

  const paginate = (pageNumber) => setPageNumber(pageNumber);

  return (
    <div>
      <div className="cards-container">{displayProjects}</div>
      <Pagination
        currentPage={pageNumber}
        totalProjects={pageCount}
        paginate={paginate}
      />
    </div>
  );
}
