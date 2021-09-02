import React from "react";
import _ from "lodash";

//Followed a course I had previosly taken which involved the implementation of Lodash.  I have an idea of how it works in theory and what it's used for, but I do not have enough experience with it to use it effectively.

const Pagination = (props) => {
  const { itemsCount, pageSize } = props;
  const pagesCount = itemsCount / pageSize;
  const pages = _.range(1, pagesCount + 1);

  //Attempted to set up the pages and got the button menu working.  Could not discern how to correctly implement the '10 stories per page' idea I was going for.
  return (
    <nav className="post-block">
      <ul className="flex-row no-space">
        {pages.map((page) => (
          <li key={page}>
            <button className="button">{page}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
