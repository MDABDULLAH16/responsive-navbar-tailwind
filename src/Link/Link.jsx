import React from "react";

const Link = ({ route }) => {
  const { name, path } = route;
  return (
    <div>
      <li className="ml-4 font-medium hover:bg-orange-400 pr-2">
        <a href={path}>{name}</a>
      </li>
    </div>
  );
};

export default Link;
