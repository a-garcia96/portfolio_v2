import React from "react";

const Tag = ({ tag }) => {
  return (
    <li
      key={tag}
      className="bg-neutral-100 rounded-full px-4 py-2 text-xs w-fit text-blue-500 font-bold"
    >
      {tag}
    </li>
  );
};

export default Tag;
