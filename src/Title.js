import React from 'react';
import './style.scss';

export const Title = ({ text }) => {
  const getStyles = (textLength) => {
    let fontSize;
    let lineHeight;
    let letterSpacing;

    if (textLength <= 20) {
      fontSize = '32px';
      lineHeight = '36px';
      letterSpacing = '-0.045em';
    } else if (textLength <= 52) {
      fontSize = '24px';
      lineHeight = '28px';
      letterSpacing = '-0.035em';
    } else if (textLength <= 90) {
      fontSize = '20px';
      lineHeight = '24px';
      letterSpacing = '-0.025em';
    } else {
      fontSize = '20px';
      lineHeight = '24px';
      letterSpacing = '-0.025em';
    }

    return {
      fontSize,
      letterSpacing,
      lineHeight,
    };
  };

  const titleStyle = getStyles(text.length);

  return (
    <h1 className="content-head__title" style={titleStyle}>
      {text}
    </h1>
  );
};
