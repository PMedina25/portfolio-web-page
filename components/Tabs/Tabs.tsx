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
    <>
      <TabContent activeTab={activeTab} tabs={tabs} />
      <TabNav activeTab={activeTab} onTabClick={onTabClick} tabs={tabs} />
    </>
  );
};

export default Tabs;
