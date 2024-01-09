import React from "react";

const Link = ({ route }) => {
  const { name, path } = route;
  return (
    <div>
      <li className="ml-4 font-medium ">
        <a href={path}>{name}</a>
      </li>
    </div>
  );
};

export default Link;
