import _ from "lodash";

//Followed a course I had previosly taken which involved the implementation of Lodash.  I have an idea of how it works in theory and what it's used for, but I do not have enough experience with it to use it effectively.

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items)
    .slice(startIndex)
    .take(pageSize)
    .value();
}
