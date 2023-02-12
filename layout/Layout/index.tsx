import React from "react";

interface LayoutProps {
  children: JSX.Element;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="wrapper">
      <div className="wrapper__container">{children}</div>
    </main>
  );
};

export default Layout;
