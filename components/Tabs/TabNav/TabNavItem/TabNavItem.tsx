import React from "react";

interface TabNavItemProps {
  label: string;
  isActiveTab: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const TabNavItem = ({ label, isActiveTab, onClick }: TabNavItemProps) => {
  return (
    <button
      className={`tab-nav-item${isActiveTab ? " tab-nav-item--active" : ""}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default TabNavItem;
