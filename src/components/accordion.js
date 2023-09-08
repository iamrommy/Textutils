import React, { useState } from 'react';

const Accordion = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        className="flex items-center justify-between p-4 bg-gray-200 cursor-pointer rounded-2xl border-2"
        onClick={toggleAccordion} style={props.styles}
      >
        <h3 className="text-lg font-bold">{props.title}</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-6 h-6 transition-transform duration-300 transform ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      {isOpen && <div className="bg-gray-100 p-4 rounded-2xl">{props.content}</div>}
    </div>
  );
};

export default Accordion;