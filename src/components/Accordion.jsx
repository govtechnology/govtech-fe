/* eslint-disable react/prop-types */
import { useState } from "react";

function Accordion({ title, summary }) {
  const [isHidden, setIsHidden] = useState(true);

  const toggleAccordion = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div
      className={`rounded-[20px] ${
        isHidden ? "" : "shadow-lg mb-6"
      } transition-all duration-150 `}
    >
      <h2>
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium text-left text-black"
          onClick={toggleAccordion}
        >
          <span>{title}</span>
          <svg
            className={`w-3 h-3 shrink-0 ${
              isHidden ? "rotate-180" : ""
            } transition-all duration-150`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div className={`${isHidden ? "hidden" : ""}`}>
        <div className="px-5 pb-5">
          <p className="mb-2 text-gray-500">{summary}</p>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
