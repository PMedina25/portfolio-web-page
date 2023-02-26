import React, { useState } from "react";

import TabNav from "./TabNav/TabNav";
import TabContent from "./TabContent/TabContent";

export interface Tab {
  label: string;
  content: React.ReactElement;
}

interface TabsProps {
  tabs: Tab[];
}

const Tabs = ({ tabs }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const onTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="tabs">
      <TabNav activeTab={activeTab} onTabClick={onTabClick} tabs={tabs} />
      {tabs.map((tab, index) => (
        <TabContent
          key={tab.label}
          isActiveTab={activeTab === index}
          tabContent={tab.content}
        />
      ))}
    </div>
  );
};

export default Tabs;
