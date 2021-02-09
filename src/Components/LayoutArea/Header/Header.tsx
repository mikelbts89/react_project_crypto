import React, { useEffect, useState } from "react";
import "./Header.css";
import { useParams } from "react-router-dom";

const Header = (): JSX.Element => {
  const [listName, setListName] = useState("");
  let { name } = useParams();
  useEffect(() => {
    setListName(name);
  }, [name]);
  let firstLetter = listName.slice(0, 1).toLocaleUpperCase();
  let otherLetters = listName.slice(1, listName.length);
  let JoinName = firstLetter + otherLetters;
  let pageName = JoinName.replace(/-/g, " ");

  return (
    <div className="Header">
      <h2>{pageName}</h2>
    </div>
  );
};

export default Header;
