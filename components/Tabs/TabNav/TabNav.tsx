import React from "react";

import { Tab } from "../Tabs";

interface TabNavProps {
  activeTab: number;
  onTabClick: (index: number) => void;
  tabs: Tab[];
}

const TabNav = ({ activeTab, onTabClick, tabs }: TabNavProps) => {
  return (
    <div className="tab-nav">
      {tabs.map((tab, index) => (
        <button
          key={tab.label}
          className={activeTab === index ? "active" : ""}
          onClick={() => onTabClick(index)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TabNav;
