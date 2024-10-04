import React from 'react';
import './web.css';

const WebsiteFrame = ({ src, title }) => {
  return (
    <div className="website-frame-container">
      <h2>Latest Climate News</h2>
      <iframe
        src={src}
        title={title}
        className="website-frame"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WebsiteFrame;