import React from 'react';
import './style.scss';

export const Title = ({ text }) => {
  const getFontSize = (textLength) => {
    if (textLength <= 20) {
      return '32px';
    } else if (textLength <= 52) {
      return '24px';
    } else if (textLength <= 90) {
      return '20px';
    } else {
      return '20px'; // Defina o tamanho padrão para textos muito longos
    }
  };

  const titleStyle = {
    fontSize: getFontSize(text.length),
  };

  return (
    <h1 className="content-head__title" style={titleStyle}>
      {text}
    </h1>
  );
};
