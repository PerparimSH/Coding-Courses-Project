import React, { useState } from 'react';

function Dashboard(props) {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="profile">
      <div className="profile-header">
        <img src="https://www.citypng.com/public/uploads/preview/download-profile-user-round-orange-icon-symbol-png-11639594360ksf6tlhukf.png" alt="Profile Picture" />
        <div className="profile-info">
          <h1 className="profilii">{user.username}</h1>
          <p className="job-title">Front-end Developer</p>
        </div>
      </div>

      <div className="about-me">
        <h2>About Me</h2>
        <p>I'm a passionate web developer who loves to build user-friendly and intuitive interfaces using React.
          As a front-end developer, I am constantly learning and experimenting with new technologies and techniques to build 
          the most user-friendly and visually appealing interfaces. 
          I strive to create responsive, accessible, and performant websites that provide an optimal user experience across all devices and platforms. 
          My passion for front-end development extends beyond just writing code; I enjoy collaborating with designers, UX experts, and other developers to bring ideas to life and solve complex problems. 
          Whether it's implementing complex animations or optimizing site speed, I am always looking for ways to improve my skills and make meaningful contributions to the development community.
        </p>
      </div>
    </div>
  );
}

export default Dashboard;
