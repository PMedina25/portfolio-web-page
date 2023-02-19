import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import Tabs from "./Tabs";

describe("Tabs component", () => {
  const tabs = [
    {
      label: "Tab 1",
      content: <div>Content for Tab 1</div>,
    },
    {
      label: "Tab 2",
      content: <div>Content for Tab 2</div>,
    },
  ];

  it("renders the first tab by default", () => {
    const { getByText } = render(<Tabs tabs={tabs} />);
    expect(getByText("Content for Tab 1")).toBeInTheDocument();
  });

  it("renders the selected tab content", () => {
    const { getByText, getByRole } = render(<Tabs tabs={tabs} />);
    const tabButton = getByRole("button", { name: "Tab 2" });
    fireEvent.click(tabButton);
    expect(getByText("Content for Tab 2")).toBeInTheDocument();
  });
});
