import React from "react";

const UIKit = () => {
  return (
    <div className="p-6">
      <h2 className="underline">Typographies</h2>
      <ul>
        <li>
          <h1 className="mt-4 mb-4">h1</h1>
        </li>
        <li>
          <h2 className="mt-2 mb-4">h2</h2>
        </li>
        <li>
          <h3 className="mt-2 mb-4">h3</h3>
        </li>
        <li>
          <h4 className="mt-2 mb-4">h4</h4>
        </li>
        <li>
          <h5 className="mt-2 mb-4">h5</h5>
        </li>
        <li>
          <h6 className="mt-2 mb-4">h6</h6>
        </li>
      </ul>
      <br />
      <h2 className="mb-4">Palette</h2>
      <div className="flex flex-row content-center items-center">
        <div className="bg-primary p-6 m-2" />
        <div className="bg-secondary p-6 m-2" />
        <div className="bg-dark-blue p-6 m-2" />
        <div className="bg-darker-blue p-6 m-2" />
        <div className="bg-gray p-6 m-2" />
        <div className="bg-white p-6 m-2" />

      </div>
    </div>
  );
};

export default UIKit;
