import React from 'react';

const Render = ({ html }) => {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default Render;