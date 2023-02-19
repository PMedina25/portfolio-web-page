import React from "react";

import Dot from "../Dot/Dot";

const CodeEditor = () => {
  return (
    <div className="code-editor">
      <div className="code-editor__header">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="code-editor__header--dot">
            <Dot />
          </div>
        ))}
      </div>
      <pre className="code-editor__content">
        <code>
          <span className="code-editor__content--primary-text">{"{"}</span>
          <br />
          &emsp;&emsp;
          <span className="code-editor__content--secondary-text">{'"'}</span>
          <span className="code-editor__content--primary-text">languages</span>
          <span className="code-editor__content--secondary-text">{'": '}</span>
          <span className="code-editor__content--tertiary-text">{"["}</span>
          <span className="code-editor__content--secondary-text">{'"'}</span>
          <span>{"HTML"}</span>
          <span className="code-editor__content--secondary-text">{'", '}</span>
          <span className="code-editor__content--secondary-text">{'"'}</span>
          <span>{"CSS"}</span>
          <span className="code-editor__content--secondary-text">{'", '}</span>
          <span className="code-editor__content--secondary-text">{'"'}</span>
          <span>{"Sass"}</span>
          <span className="code-editor__content--secondary-text">{'", '}</span>
          <span className="code-editor__content--secondary-text">{'"'}</span>
          <span>{"JavaScript"}</span>
          <span className="code-editor__content--secondary-text">{'", '}</span>
          <span className="code-editor__content--secondary-text">{'"'}</span>
          <span>{"TypeScript"}</span>
          <span className="code-editor__content--secondary-text">{'"'}</span>
          <span className="code-editor__content--tertiary-text">{"]"}</span>
          <span className="code-editor__content--secondary-text">{","}</span>
          <br />
          &emsp;&emsp;
          <span className="code-editor__content--secondary-text">{'"'}</span>
          <span className="code-editor__content--primary-text">
            frameworksAndLibraries
          </span>
          <span className="code-editor__content--secondary-text">{'": '}</span>
          <span className="code-editor__content--tertiary-text">{"["}</span>
          <span className="code-editor__content--secondary-text">{'"'}</span>
          <span>{"React"}</span>
          <span className="code-editor__content--secondary-text">{'", '}</span>
          <span className="code-editor__content--secondary-text">{'"'}</span>
          <span>{"Next.js"}</span>
          <span className="code-editor__content--secondary-text">{'", '}</span>
          <span className="code-editor__content--secondary-text">{'"'}</span>
          <span>{"Material UI"}</span>
          <span className="code-editor__content--secondary-text">{'", '}</span>
          <span className="code-editor__content--secondary-text">{'"'}</span>
          <span>{"Storybook"}</span>
          <span className="code-editor__content--secondary-text">{'"'}</span>
          <span className="code-editor__content--tertiary-text">{"]"}</span>
          <span className="code-editor__content--secondary-text">{","}</span>
          <br />
          &emsp;&emsp;
          <span className="code-editor__content--secondary-text">{'"'}</span>
          <span className="code-editor__content--primary-text">testing</span>
          <span className="code-editor__content--secondary-text">{'": '}</span>
          <span className="code-editor__content--tertiary-text">{"["}</span>
          <span className="code-editor__content--secondary-text">{'"'}</span>
          <span>{"Jest"}</span>
          <span className="code-editor__content--secondary-text">{'", '}</span>
          <span className="code-editor__content--secondary-text">{'"'}</span>
          <span>{"React Testing Library"}</span>
          <span className="code-editor__content--secondary-text">{'", '}</span>
          <span className="code-editor__content--secondary-text">{'"'}</span>
          <span>{"Cypress"}</span>
          <span className="code-editor__content--secondary-text">{'"'}</span>
          <span className="code-editor__content--tertiary-text">{"]"}</span>
          <span className="code-editor__content--secondary-text">{","}</span>
          <br />
          &emsp;&emsp;
          <span className="code-editor__content--secondary-text">{'"'}</span>
          <span className="code-editor__content--primary-text">
            versionControl
          </span>
          <span className="code-editor__content--secondary-text">{'": '}</span>
          <span className="code-editor__content--tertiary-text">{"["}</span>
          <span className="code-editor__content--secondary-text">{'"'}</span>
          <span>{"Git"}</span>
          <span className="code-editor__content--secondary-text">{'", '}</span>
          <span className="code-editor__content--secondary-text">{'"'}</span>
          <span>{"Github"}</span>
          <span className="code-editor__content--secondary-text">{'", '}</span>
          <span className="code-editor__content--secondary-text">{'"'}</span>
          <span>{"Gitlab"}</span>
          <span className="code-editor__content--secondary-text">{'", '}</span>
          <span className="code-editor__content--secondary-text">{'"'}</span>
          <span>{"Bitbucket"}</span>
          <span className="code-editor__content--secondary-text">{'"'}</span>
          <span className="code-editor__content--tertiary-text">{"]"}</span>
          <br />
          <span className="code-editor__content--primary-text">{"}"}</span>
        </code>
      </pre>
    </div>
  );
};

export default CodeEditor;
