import React from "react";

import { Tab } from "../Tabs";

interface TabContentProps {
  isActiveTab: boolean;
  tabContent: React.ReactElement;
}

const TabContent = ({ isActiveTab, tabContent }: TabContentProps) => {
  return (
    <div
      className={`tab-content${isActiveTab ? " tab-content--active" : ""}`}
      aria-hidden={!isActiveTab}
    >
      {tabContent}
    </div>
  );
};

export default TabContent;
