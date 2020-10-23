import React from 'react';

const InfoCard = ({ label, value }) => {
  return (
    <div className="flex flex-column items-center secondary-text-color">
      <div id="info" className="b">
        {value}
      </div>
      <label htmlFor="info" className="f6">
        {label}
      </label>
    </div>
  );
};

export default InfoCard;
