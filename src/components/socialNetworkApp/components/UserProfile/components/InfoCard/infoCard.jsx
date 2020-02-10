import React from 'react';

const InfoCard = ({ label, value }) => {
  return (
    <div className="flex flex-column items-center">
      <div id="info">{value}</div>
      <label htmlFor="info">{label}</label>
    </div>
  );
};

export default InfoCard;
