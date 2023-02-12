import React from "react";
import { MouseEventHandler } from "react";

interface HamburgerBoxProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const HamburgerBox = ({ onClick }: HamburgerBoxProps) => {
  return (
    <button className="hamburger-box" onClick={onClick}>
      <div className="hamburger-box__inner" />
      <div className="hamburger-box__inner" />
      <div className="hamburger-box__inner" />
    </button>
  );
};

export default HamburgerBox;
