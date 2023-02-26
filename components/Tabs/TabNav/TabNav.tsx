import React from "react";

import { Tab } from "../Tabs";
import TabNavItem from "./TabNavItem/TabNavItem";

interface TabNavProps {
  activeTab: number;
  onTabClick: (index: number) => void;
  tabs: Tab[];
}

const TabNav = ({ activeTab, onTabClick, tabs }: TabNavProps) => {
  return (
    <div className="tab-nav">
      {tabs.map((tab, index) => (
        <TabNavItem
          key={tab.label}
          label={tab.label}
          isActiveTab={activeTab === index}
          onClick={() => onTabClick(index)}
        />
      ))}
    </div>
  );
};

export default TabNav;
