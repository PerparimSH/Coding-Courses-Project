import React, { useState } from 'react';

const sections = [
  {
    title: 'Learn HTML/CSS',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    title: 'Learn JavaScript',
    content: 'Praesent non eros eget sem bibendum elementum.'
  },
  {
    title: 'Learn React',
    content: 'Aliquam rutrum tristique elit, et sagittis orci interdum vitae.'
  }
];

const Premium = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <h2>Premium</h2>
      {sections.map((section, index) => (
        <div className="accordion" key={index}>
          <div className="accordion-header" onClick={() => handleClick(index)}>
            <h3>{section.title}</h3>
            <span className={`arrow ${activeIndex === index ? 'open' : ''}`}>&#9650;</span>
          </div>
          {activeIndex === index && (
            <div className="accordion-content">
              <p>{section.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Premium;
