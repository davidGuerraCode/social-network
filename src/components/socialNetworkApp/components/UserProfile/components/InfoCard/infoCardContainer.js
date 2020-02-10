import React from 'react';
import InfoCard from './infoCard';

const data = [
  {
    label: 'Publications',
    value: 17
  },
  {
    label: 'Followers',
    value: 200
  },
  {
    label: 'Following',
    value: 250
  }
];

const infoCardContainer = () => {
  const info = data.map((val, index) => {
    return <InfoCard label={val.label} value={val.value} key={index} />;
  });

  return <div className="flex justify-around pa3">{info}</div>;
};

export default infoCardContainer;
