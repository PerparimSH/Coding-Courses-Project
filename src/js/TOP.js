import React, { useState, useEffect } from 'react';

function TOP() {
  const [showTopButton, setShowTopButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollTop > windowHeight / 2) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='TOP'>
      {showTopButton && (
        <button onClick={scrollToTop}>
          <i className="icon-circle-arrow-up"></i>
        </button>
      )}
    </div>
  );
}

export default TOP;
