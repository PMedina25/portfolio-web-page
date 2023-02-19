import React from "react";

import { Tab } from "../Tabs";

interface TabContentProps {
  activeTab: number;
  tabs: Tab[];
}

const TabContent = ({ activeTab, tabs }: TabContentProps) => {
  return <div className="tab-content">{tabs[activeTab].content}</div>;
};

export default TabContent;
